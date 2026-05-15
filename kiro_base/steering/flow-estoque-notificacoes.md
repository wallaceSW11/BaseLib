# flow-estoque-notificacoes

Fluxo de movimentação de estoque, notificações em tempo real e webhooks.

## modelo de estoque

`Product` tem dois campos de estoque:
- `Stock` — total físico (editável pelo owner)
- `StockPending` — reservado em pedidos com `PaymentStatus = PENDING`
- `StockAvailable = Stock - StockPending` — calculado, exposto na vitrine

**Regra:** nunca decrementar `Stock` diretamente ao criar pedido. Sempre incrementar `StockPending`. `Stock` só muda via ajuste manual do owner.

## StockMovement

Tabela `stock_movements`. Rastreia toda movimentação.

```csharp
public enum StockMovementType
{
    ManualAdjustment,  // owner editou estoque no painel
    OrderReserved,     // pedido criado ou renovado — StockPending aumentou
    OrderReleased,     // pedido cancelado ou expirado — StockPending diminuiu
    OrderCompleted     // reservado para uso futuro
}
```

Campos relevantes: `ProductId`, `BakeryId`, `Type`, `Quantity`, `StockAfter`, `OrderId?`, `UserEmail?`, `CreatedAt`.

**Convenção de sinal do `Quantity`:**
- Negativo → reduz estoque disponível: `OrderReserved` (`-i.Quantity`), `OrderReleased` (`-i.Quantity`), `OrderCompleted` (`-i.Quantity`)
- Positivo ou negativo → `ManualAdjustment` (diferença entre novo e antigo estoque)

`OrderReserved` usa `Quantity` **negativo** — reservar aumenta `StockPending` e reduz `StockAvailable`. Salvar positivo seria inconsistente com os demais tipos e causaria exibição errada no painel.

**StockBefore no MapToDto** — calculado a partir do `StockAfter`:
```csharp
var stockBefore = m.Type switch
{
    StockMovementType.OrderCompleted => m.StockAfter,  // reduz Stock total, não StockAvailable
    _ => m.StockAfter - m.Quantity                     // todos os outros: fórmula uniforme
};
```

## quando StockMovement é criado

| Ação | Tipo | Quem cria |
|------|------|-----------|
| Owner edita estoque do produto | `ManualAdjustment` | `ProductService.UpdateAsync` |
| Cliente cria pedido | `OrderReserved` | `PublicController.CreateOrder` (fire-and-forget) |
| Cliente renova pedido expirado | `OrderReserved` | `PublicController.RenewOrder` (fire-and-forget) |
| Cliente cancela pedido | `OrderReleased` | `PublicController.CancelOrder` (fire-and-forget) |
| Job expira pedido | `OrderReleased` | `OrderExpirationJob` |

Criações em lote (pedido com múltiplos itens): `CreateManyAsync` — uma chamada só.

## endpoints de movimentação

```
GET /api/products/{id}/stock-movements?page=1&pageSize=20
  → histórico de um produto específico (paginado)

GET /api/products/stock-movements?search=&dateFrom=&dateTo=&page=1&pageSize=20
  → todos os movimentos da confeitaria com filtros
  → retorna StockMovementsPageDto { items: StockMovementDto[], total: int }
```

Ambos requerem auth de owner (`GetBakeryId()`).

## SignalR

Hub: `AppHub` em `/hubs/app`

**Entrar em grupo:**
```js
// painel admin (requer auth JWT)
connection.invoke("JoinBakery")

// vitrine ou acompanhamento (público)
connection.invoke("JoinGroup", "store_minha-loja")
connection.invoke("JoinGroup", "order_123")
```

**Grupos e eventos:**

| Grupo | Evento | Payload | Quando |
|-------|--------|---------|--------|
| `bakery_{bakeryId}` | `OrderCreated` | `OrderDto` | Novo pedido criado |
| `store_{slug}` | `StockUpdated` | `[{ productId, stockAvailable }]` | Estoque alterado |
| `bakery_{id}` + `order_{id}` | `PaymentUpdated` | `{ orderId, paymentStatus, orderStatus }` | Pagamento confirmado |
| `bakery_{id}` + `order_{id}` | `OrderStatusUpdated` | (depende da implementação) | Status operacional alterado |

Notificações são **fire-and-forget** via `Task.WhenAll()` — nunca aguardar resultado nem deixar falha de notificação quebrar o fluxo principal.

```csharp
// padrão correto
_ = Task.WhenAll(
    notificationService.NotifyAsync($"bakery_{bakery.Id}", "OrderCreated", dto),
    notificationService.NotifyAsync($"store_{slug}", "StockUpdated", stockPayload),
    stockMovementRepository.CreateManyAsync(movements)
);
```

## webhook MP Pix (pedidos)

Endpoint: `POST /api/public/webhooks/mp`
- Sem autenticação, sem validação de assinatura
- Sempre retorna `200 OK` — nunca retornar erro para o gateway

Fluxo:
1. Verifica `type == "payment"` — ignora outros tipos
2. Extrai `data.id` (MP payment ID)
3. Busca `Order` por `MpPaymentId` — ignora se não encontrado ou já `PAID`
4. Busca `Bakery` pelo `BakeryId` do pedido — precisa do `MpAccessToken`
5. Consulta status na API MP: `GET /v1/payments/{mpPaymentId}` com token do owner
6. Se `approved`: `ExecuteUpdateAsync` → `PaymentStatus = PAID`, `Status = IN_PREPARATION`
7. Notifica `bakery_{id}` e `order_{id}` com `PaymentUpdated`

## webhook MP Assinaturas (billing)

Endpoint: `POST /api/payments/webhook`
- Valida assinatura HMAC-SHA256 com `MercadoPago:WebhookSecret`
- Header `x-signature`: `ts={timestamp},v1={hash}`
- Manifest: `id:{data.id};request-id:{x-request-id};ts:{ts};`
- Se `WebhookSecret` não configurado: aceita sem validar (dev)

Tipos processados:
- `preapproval` / `subscription_preapproval` → `HandlePreapprovalWebhookAsync`
- `payment` → `HandlePaymentWebhookAsync` (retry com backoff: 3s, 6s, 12s, 20s — race condition MP)
- `subscription_authorized_payment` → `HandleAuthorizedPaymentWebhookAsync`

## simulação de pagamento (dev only)

```
POST /api/public/:slug/orders/:id/simulate-payment
```
- Retorna `404` fora de Development
- Sem autenticação
- Comportamento idêntico ao webhook real: `PaymentStatus → PAID`, `OrderStatus → IN_PREPARATION`, eventos SignalR
- Uso: testar fluxo de pagamento sem configurar MP

## OrderExpirationJob

BackgroundService — executa a cada 1 minuto.

Para cada pedido com `PaymentStatus = PENDING` e `ExpiresAt < now`:
1. `SELECT FOR UPDATE` nos produtos
2. `StockPending -= quantidade` para cada item
3. `PaymentStatus = EXPIRED`
4. Cria `StockMovement` tipo `OrderReleased` (quantidade negativa)
5. Notifica `store_{slug}` com `StockUpdated`
6. Soft delete após 2 dias: `DeletedAt = now` quando `ExpiresAt < now - 2 dias`

## arquivos-chave

```
backend/Shared/Models/StockMovement.cs
backend/Features/Products/Services/ProductService.cs
backend/Features/Products/Repositories/StockMovementRepository.cs
backend/Features/Products/Controllers/ProductsController.cs
backend/Features/Public/Controllers/PublicController.cs   (CreateOrder, RenewOrder, CancelOrder, MpPixWebhook, SimulatePayment)
backend/Features/Public/Services/MpPixService.cs
backend/Features/Orders/Services/OrderExpirationJob.cs
backend/Features/Billing/Controllers/PaymentsController.cs
backend/Features/Billing/Services/SubscriptionService.cs
backend/Hubs/AppHub.cs
backend/Hubs/NotificationService.cs
backend/Hubs/INotificationService.cs
```

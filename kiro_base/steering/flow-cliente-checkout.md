# flow-cliente-checkout

Fluxo completo do cliente na vitrine pública (store).

## identidade do cliente

- `Customer` é global — sem vínculo com nenhuma confeitaria (`BakeryId` não existe no model)
- Um único cadastro por email vale para todas as lojas da plataforma
- Autenticação via cookie HttpOnly `customer_token` (JWT)
- Separado do auth da confeitaria (`auth_token`) — são sistemas independentes
- `Customer.OriginBakeryId` (nullable) — registra de qual loja o cliente se cadastrou (analytics)

## rotas da vitrine

```
/:slug                  → vitrine da loja (StoreView)
/:slug/produto/:id      → detalhe do produto (ProductDetailView)
/:slug/carrinho         → carrinho (CartView)
/:slug/checkout         → dados do pedido (CheckoutView)
/:slug/pagamento        → QR Code Pix (PaymentView)
/:slug/pedido/:id       → acompanhamento do pedido (OrderTrackingView)
/:slug/pedidos          → histórico de pedidos (CustomerOrdersView)
/:slug/perfil           → perfil do cliente — requer auth (CustomerProfileView)
/:slug/login            → login do cliente (CustomerLoginView) — página standalone
/:slug/cadastro         → cadastro do cliente (CustomerRegisterView)
/:slug/termos           → termos de uso (TermsView)
```

## fluxo de compra

```
Vitrine → adiciona produto → Carrinho → Finalizar pedido → Checkout → Pagamento Pix → Acompanhamento
```

### checkout (CheckoutView)

#### cliente logado
- Nome e telefone exibidos como labels readonly (não editáveis)
- Sem toggle "Salvar contato"
- Entrega: lista de endereços cadastrados (máx 3, radio-group com label + endereço formatado)
- Botão "Usar outro endereço" expande formulário de CEP inline
  - Ao preencher: opção "Salvar endereço" (switch) + campo de descrição (label)
  - Novo endereço só é salvo no banco ao clicar em "Gerar QR Code" via `POST /customers/me/addresses`
  - Após salvar: `fetchMe()` atualiza a store e `selectedAddressId` aponta para o novo

#### cliente anônimo
- Exibe banner "Já tem conta?" com botão "Entrar / Cadastrar"
  - Abre `CustomerLoginModal` (modal inline, não navega para outra página)
  - Login bem-sucedido: preenche nome, telefone e seleciona endereço padrão automaticamente
  - "Criar conta": navega para `/:slug/cadastro?redirect=/:slug/checkout`
- Nome, telefone e endereço: campos livres editáveis
- Nada é salvo no banco — pedido criado com `isAnonymous: true`

#### pedido
- Criado via `POST /public/:slug/orders` (sem auth)
- `isAnonymous: true` quando cliente não logado
- Após criar: navega para `/:slug/pagamento`

### CustomerLoginModal

- Modal inline no checkout — não é página separada, não navega
- Campos: email, senha
- Link "Esqueci minha senha" → `/:slug/esqueci-senha`
- Link "Criar conta" → `/:slug/cadastro?redirect=/:slug/checkout`
- Ao logar com sucesso: emite evento `logged-in` → checkout chama `fillFormFromCustomer()`

## stores envolvidas

```
useCartStore          → itens do carrinho (localStorage)
useCheckoutStore      → orderId após criação do pedido
useCustomerAuthStore  → estado do cliente logado (cookie) + addresses
useCustomerStore      → contato anônimo salvo (localStorage) — usado apenas para anônimos
usePublicStore        → config da loja (nome, slug, currentSlug, entrega, retirada, taxa)
```

## interceptor axios (api.ts)

Regras de redirecionamento por 401:
- `/auth/*` → não redireciona (trata no componente)
- `/customers/*` → não redireciona (cliente pode ser anônimo)
- qualquer outro endpoint → `window.location.href = '/login'` (sessão da confeitaria expirada)

## backend — endpoint público de pedido

```
POST /api/public/:slug/orders
Body: {
  customerName: string,
  customerPhone: string,
  deliveryMethod: "PICKUP" | "DELIVERY",
  deliveryAddress?: string,
  isAnonymous: boolean,
  items: [{ productId: number, quantity: number }]
}
Sem autenticação — qualquer um pode criar pedido
Retorna: OrderDto { id, status: "PENDING", paymentStatus: "PENDING", pixQrCode?, pixQrCodeBase64?, expiresAt: now+15min }
```

Transação `SELECT FOR UPDATE` — estoque reservado atomicamente (`StockPending += quantidade`).
Se `PaymentMode = MercadoPago`: QR Code gerado na criação. Falha silenciosa — pedido criado mesmo sem QR Code.

## regenerar QR Code

```
POST /api/public/:slug/orders/:id/generate-pix
Requer: CustomerOnly auth
Condição: order.PaymentStatus == PENDING
Uso: quando QR Code não foi gerado na criação (falha silenciosa)
```

## acompanhamento em tempo real (SignalR)

Cliente conecta ao hub `/hubs/app` e entra no grupo `order_{orderId}` via `JoinGroup`.
Eventos recebidos:
- `PaymentUpdated` — pagamento confirmado: `{ orderId, paymentStatus: "PAID", orderStatus: "IN_PREPARATION" }`
- `OrderStatusUpdated` — status operacional alterado pelo owner

## simulação de pagamento (dev)

```
POST /api/public/:slug/orders/:id/simulate-payment
Disponível apenas em Development — retorna 404 em produção
Sem autenticação
Simula webhook aprovado: PaymentStatus → PAID, OrderStatus → IN_PREPARATION
Dispara mesmos eventos SignalR do webhook real
```

## Order.IsAnonymous

- `bool` no model `Order`, default `false`
- Migration: coluna `is_anonymous` (snake_case) na tabela `orders`
- Permite analytics: pedidos anônimos vs autenticados por loja

## cadastro de cliente (CustomerRegisterView)

- Campos: nome, telefone, email, senha, confirmar senha, aceitar termos, endereço (opcional)
- Envia `originSlug` = slug da loja atual → backend resolve para `OriginBakeryId`
- Após cadastro: redireciona para `route.query.redirect` ou `/:slug/checkout`
- Cadastro global — email único na plataforma inteira

## arquivos envolvidos

```
frontend/src/views/store/CheckoutView.vue
frontend/src/views/store/CartView.vue
frontend/src/views/store/PaymentView.vue
frontend/src/views/store/OrderTrackingView.vue
frontend/src/views/store/CustomerLoginView.vue
frontend/src/views/store/CustomerRegisterView.vue
frontend/src/components/store/CustomerLoginModal.vue
frontend/src/stores/store/useCartStore.ts
frontend/src/stores/store/useCheckoutStore.ts
frontend/src/stores/store/useCustomerAuthStore.ts
frontend/src/stores/store/useCustomerStore.ts
frontend/src/stores/store/usePublicStore.ts
frontend/src/services/store/customerService.ts
backend/Features/Public/Controllers/PublicController.cs
backend/Features/Customers/Controllers/CustomersController.cs
backend/Features/Customers/Services/CustomerService.cs
backend/Shared/Models/Order.cs
backend/Shared/Models/Customer.cs
```

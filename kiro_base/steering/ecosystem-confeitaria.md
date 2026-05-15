# ecosystem-confeitaria

Mapa do projeto Confeitaria. Leia antes de qualquer tarefa.

## stack

frontend: Vue 3 + TypeScript + Vuetify 3 + Pinia + Vue Router + Axios + Vite + pnpm
backend: .NET 9 + ASP.NET Core + Entity Framework Core 9 + PostgreSQL 17
auth: JWT via cookie HttpOnly — `auth_token` (boleira) | `customer_token` (cliente)
pagamentos: MercadoPago (OAuth marketplace) | Pix manual (atual)
imagens: Cloudinary (prod) / local (dev)
infra: Docker + docker-compose

## monorepo

```
/
├── frontend/   Vue 3 SPA
└── backend/    .NET 9 Web API
```

## domínio

- Bakery: tenant principal. Slug único define a URL da loja.
- Customer: cliente final. Global — sem BakeryId. `OriginBakeryId` nullable (analytics).
- Product: produto da confeitaria (nome, preço, estoque, imagem, ativo). Estoque dividido em `Stock` (total) e `StockPending` (reservado em pedidos). `StockAvailable = Stock - StockPending`.
- StockMovement: rastreia toda movimentação de estoque. Tipos: `ManualAdjustment`, `OrderReserved`, `OrderReleased`, `OrderCompleted`.
- Order: `OrderStatus` (operacional) + `PaymentStatus` (pagamento) separados. Soft delete via `DeletedAt`.
- Subscription: assinatura do plano via MercadoPago.

## status dos pedidos

`OrderStatus` e `PaymentStatus` são enums **separados e independentes**. Nunca misturar.

**OrderStatus** — status operacional do pedido. Atualizado via `PATCH /orders/:id/status`.
```
PENDING          → Criado (inicial)
IN_PREPARATION   → Em preparação
READY_FOR_PICKUP → Pronto para retirada
ON_THE_WAY       → A caminho
PICKED_UP        → Retirado (terminal)
DELIVERED        → Entregue (terminal)
CANCELLED        → Cancelado (terminal)
```

**PaymentStatus** — status de pagamento.
```
PENDING   → Pendente (inicial)
PAID      → Pago — via POST /orders/:id/confirm-payment
EXPIRED   → Expirado — via OrderExpirationJob
CANCELLED → Cancelado (terminal) — quando pedido é cancelado
```

**Workflow de transições (owner):**
```
PENDING          → IN_PREPARATION | READY_FOR_PICKUP | ON_THE_WAY | PICKED_UP | DELIVERED | CANCELLED
IN_PREPARATION   → READY_FOR_PICKUP | ON_THE_WAY | CANCELLED
READY_FOR_PICKUP → PICKED_UP | CANCELLED
ON_THE_WAY       → DELIVERED | CANCELLED
PICKED_UP        → (terminal)
DELIVERED        → (terminal)
CANCELLED        → (terminal)

PaymentStatus CANCELLED → (terminal)
```

**Regras de negócio:**
- Ao confirmar pagamento via webhook MP (`POST /public/webhooks/mp`) ou manualmente (`POST /orders/:id/confirm-payment`): `PaymentStatus → PAID` e `OrderStatus → IN_PREPARATION` automaticamente.
- Ao cancelar pedido (cliente ou owner): `OrderStatus → CANCELLED` e `PaymentStatus → CANCELLED`. Estoque liberado (`StockPending -= quantidade`). `StockMovement` tipo `OrderReleased` criado.
- Owner tem controle total sobre os status — pode alterar manualmente qualquer transição válida.
- Cliente só pode criar pedido e cancelar.

No frontend: `OrderStatus` e `PaymentStatus` estão em `src/types/bakery.ts`. `DeliveryStatus` foi removido — absorvido pelo `OrderStatus`.
Nunca usar valores de um enum no lugar do outro — `PAID`/`EXPIRED`/`CANCELLED` são de `PaymentStatus`, não de `OrderStatus`.

## exibição de status na vitrine (visão do cliente)

Badge de status na lista de pedidos do cliente segue esta prioridade:

1. `OrderStatus === CANCELLED` → "Cancelado" (vermelho) — sempre tem prioridade
2. `PaymentStatus === PENDING` → "Aguardando pagamento" (laranja)
3. `PaymentStatus === EXPIRED` → "Expirado" (cinza)
4. Qualquer outro → exibe `OrderStatus`: Aberto, Confirmado, Pronto, Entregue

`PaymentStatus === PAID` nunca é exibido diretamente — quando pago, o badge reflete o `OrderStatus` operacional.
Implementado em `frontend/src/views/store/CustomerOrdersView.vue`.
`DeletedAt` nullable — global query filter no EF filtra `DeletedAt == null` em todas as queries.

## integração Mercado Pago

Modelo: **marketplace OAuth** — a plataforma tem um único app MP. Cada owner faz OAuth, autoriza, e a plataforma salva o `access_token` do owner. O QR Code Pix é gerado usando o token do owner — o dinheiro cai direto na conta dele, sem passar pela plataforma.

Fluxo:
1. Owner clica "Conectar com Mercado Pago" → `GET /store/mp/auth` → redirect para URL OAuth do MP
2. MP redireciona para `GET /store/mp/callback?code=xxx&state=bakeryId`
3. Backend troca `code` por `access_token` + `refresh_token` via API MP, salva no `Bakery`
4. Ao criar pedido com `PaymentMode = MercadoPago`: backend chama `POST /v1/payments` na API MP usando o token do owner, salva `MpPaymentId`, `PixQrCode` e `PixQrCodeBase64` no `Order`. Falha na geração é silenciosa — pedido é criado mesmo assim, cliente vê tela sem QR Code.
5. Webhook de pagamento: `POST /api/public/webhooks/mp` — recebe notificação do MP, consulta status via `MpPixService.GetPaymentStatusAsync`, atualiza `PaymentStatus → PAID` + `OrderStatus → IN_PREPARATION` e notifica via SignalR.
6. Endpoint de regeneração: `POST /public/:slug/orders/:id/generate-pix` — gera novo QR Code para pedido `PENDING` sem QR Code (ex: falha silenciosa na criação).

Campos no `Bakery`: `PaymentMode?` (nullable — obrigatório configurar), `MpAccessToken?`, `MpRefreshToken?`, `MpUserId?`
`PaymentMode` enum: `Manual` | `MercadoPago` | `Other` (reservado para futuro)

Credenciais da plataforma: `MercadoPago__ClientId` e `MercadoPago__ClientSecret` no `.env` do backend.
NUNCA usar o `AccessToken` da plataforma para gerar pagamentos — sempre usar o token do owner obtido via OAuth.

**Ciclo de vida dos tokens:**
- `code` OAuth: uso único, expira em ~10 minutos — só para a troca inicial
- `access_token`: dura 180 dias — usado para gerar QR Codes
- `refresh_token`: sem expiração definida — usado para renovar o `access_token` sem interação do owner
- Refresh automático **ainda não implementado** — necessário antes de 180 dias após o primeiro OAuth de cada owner

**Configuração obrigatória no painel MP (por ambiente):**
- Modelo de integração: **Marketplace** (não "Pagamentos diretos")
- Authorization code flow: habilitado
- Redirect URI cadastrada exatamente igual à enviada no request: `{BackUrl}/api/store/mp/callback`
- Sem essa configuração, o MP retorna "O aplicativo não está pronto para se conectar"

**Dev local:** o MP exige HTTPS na redirect URI. Workaround: após o OAuth, copiar a URL de callback que aparece no browser (aponta para produção) e substituir o host por `http://localhost:5000` antes de colar — o `code` expira em ~10 min.

Criação do pedido: transação `SELECT FOR UPDATE`. Estoque decrementado atomicamente (`StockPending += quantidade`). `StockMovement` tipo `OrderReserved` criado fire-and-forget.
`OrderExpirationJob` (BackgroundService): roda a cada 1 min, expira pedidos com `ExpiresAt < now`, libera estoque (`StockPending -= quantidade`), cria `StockMovement` tipo `OrderReleased`, notifica vitrine via SignalR `StockUpdated`. Soft delete após 2 dias.
`POST /public/:slug/orders/:id/renew`: reativa pedido expirado, reserva estoque, reseta `ExpiresAt = now + 15min`, regenera QR Code MP se configurado.

## notificações em tempo real (SignalR)

Hub: `AppHub` em `/hubs/app`

**Grupos:**
- `bakery_{bakeryId}` — painel admin da confeitaria (requer `JoinBakery()` autenticado)
- `store_{slug}` — vitrine pública (via `JoinGroup("store_{slug}")`)
- `order_{orderId}` — acompanhamento de pedido específico (via `JoinGroup("order_{orderId}")`)

**Eventos emitidos:**
| Evento | Grupo | Quando |
|--------|-------|--------|
| `OrderCreated` | `bakery_{id}` | Novo pedido criado |
| `StockUpdated` | `store_{slug}` | Estoque alterado (criação, cancelamento, expiração, renovação) |
| `PaymentUpdated` | `bakery_{id}` + `order_{id}` | Pagamento confirmado via webhook |
| `OrderStatusUpdated` | `bakery_{id}` + `order_{id}` | Status operacional alterado |

Payload de `StockUpdated`: `[{ productId, stockAvailable }]`
Payload de `PaymentUpdated`: `{ orderId, paymentStatus: "PAID", orderStatus: "IN_PREPARATION" }`

Notificações são fire-and-forget via `Task.WhenAll()` — nunca bloquear o fluxo principal por falha de notificação.

## webhook MercadoPago (Pix de pedidos)

Endpoint: `POST /api/public/webhooks/mp` — sem autenticação, sem validação de assinatura (diferente do webhook de assinaturas).

Fluxo:
1. Recebe payload com `type: "payment"` e `data.id` (MP payment ID)
2. Busca `Order` pelo `MpPaymentId` — ignora se não encontrado ou já `PAID`
3. Consulta status na API MP via `MpPixService.GetPaymentStatusAsync` usando token do owner
4. Se `approved`: atualiza `PaymentStatus → PAID` + `OrderStatus → IN_PREPARATION` via `ExecuteUpdateAsync`
5. Notifica `bakery_{id}` e `order_{id}` com evento `PaymentUpdated`
6. Sempre retorna `200 OK` — nunca retornar erro para o gateway

**Webhook de assinaturas** (diferente): `POST /api/payments/webhook` — valida assinatura HMAC-SHA256 com `MercadoPago:WebhookSecret`. Processa `preapproval`, `payment` e `subscription_authorized_payment`.

## simulação de pagamento (dev only)

`POST /api/public/:slug/orders/:id/simulate-payment` — disponível **apenas em Development** (`env.IsDevelopment()`).
Simula pagamento aprovado: atualiza `PaymentStatus → PAID` + `OrderStatus → IN_PREPARATION`, dispara mesmos eventos SignalR do webhook real.
Retorna `404` em produção.

## módulos do backend

```
Features/
├── Auth/       registro, login, logout, troca de senha, reset por email
├── Products/   CRUD + upload de imagem + histórico de movimentação de estoque
├── Orders/     listagem e atualização de status
├── Customers/  registro e gestão de clientes da vitrine
├── Store/      configurações da loja (perfil, pagamento, entrega, slug)
├── Public/     endpoints públicos sem auth (vitrine, pedido público, webhook MP Pix)
├── Billing/    assinaturas e webhooks MercadoPago (preapproval, payment)
└── Admin/      dashboard, analytics, feedback, logs (role Admin)

Shared/
├── Controllers/  BaseController (GetBakeryId, SetAuthCookie)
├── Models/       entidades cross-feature (Bakery, Product, Order, Customer, StockMovement...)
└── Middleware/   GlobalException, ActivityTracking, SubscriptionAccess

Infrastructure/
├── Database/   ApplicationDbContext
├── Email/      EmailService
└── Storage/    StorageService (Cloudinary/local)

Hubs/
├── AppHub.cs             SignalR hub
├── INotificationService  interface
└── NotificationService   implementação
```

## módulos do frontend

```
src/
├── views/bakery/    painel admin (autenticado)
├── views/store/     vitrine pública (cliente final)
├── stores/bakery/   estado do painel (product, order, store)
├── stores/store/    estado da vitrine (cart, checkout, customer, customerAuth)
├── services/auth/   authService
├── services/bakery/ productService, orderService, storeService
├── services/store/  customerService
├── services/core/   api.ts (axios), localStorageService
├── models/          tipos de domínio
├── constants/       routes.ts, icons.ts
└── composables/     useSnackbar
```

## rotas principais

admin: `/:slug/admin/*` — requer auth (`auth_user` no localStorage)
vitrine: `/:slug/*` — público
auth: `/login`, `/cadastro`, `/esqueci-senha`, `/reset-password`

## ambientes

dev: frontend http://localhost:5173 | backend http://localhost:5000
prod: Docker, variáveis via `.env.production`

## convenções

- código em inglês, UI em pt-br
- sem comentários — nomes auto-documentados
- sem AutoMapper — MapToDto private static no service
- sem lógica no controller — apenas orquestração
- camadas: Controller → Service → Repository → Database
- frontend: Component → Store → Service → API (sem pular camadas)

## banco de dados

PostgreSQL 17 + Npgsql + snake_case naming convention.
Migration única `InitialCreate`. Novas: `dotnet ef migrations add NomeDaMigration`.
snake_case em tudo: tabelas, colunas, índices, FKs. Ver skill `code-style-backend`.

**Acesso via MCP:** a conexão MCP postgres é **read-only** — apenas SELECT funciona. Para DML (INSERT, UPDATE, DELETE) usar o terminal:
```bash
docker exec -it confeitaria_db psql -U postgres -d confeitaria_db -c "SQL aqui"
```

## lib @wallacesw11/base-lib

Componentes: `PhoneField`, `CepField`, `FullAddress`, `MoneyField`, `notify`, `confirm`, `loading`.
Sempre `variant="outlined"` nos campos. Documentação completa: skill `base-lib`.

## onde buscar informação

| Preciso de | Onde ir | Tipo |
|------------|---------|------|
| Auth da boleira | `flow-login-boleira.md`, `flow-cadastro-boleira.md` | steering |
| Vitrine / checkout | `flow-cliente-checkout.md` | steering |
| Produtos | `flow-cadastro-produtos.md` | steering |
| Code style backend | skill `code-style-backend` | skill (sob demanda) |
| Code style frontend | skill `code-style-frontend` | skill (sob demanda) |
| Lib de componentes | skill `base-lib` | skill (sob demanda) |
| Code review | skill `code-review` | skill (sob demanda) |
| Git/commits | `rule-git.md` | steering |

## arquivos-chave por feature

```
Auth (boleira):
  backend/Features/Auth/Controllers/AuthController.cs
  backend/Features/Auth/Services/AuthService.cs
  frontend/src/services/auth/authService.ts
  frontend/src/views/bakery/LoginView.vue

Produtos + Estoque:
  backend/Features/Products/Controllers/ProductsController.cs
  backend/Features/Products/Services/ProductService.cs
  backend/Features/Products/Repositories/StockMovementRepository.cs
  backend/Shared/Models/StockMovement.cs
  frontend/src/stores/bakery/product.ts
  frontend/src/views/bakery/ProductFormView.vue

Pedidos (admin):
  backend/Features/Orders/Controllers/OrdersController.cs
  backend/Features/Orders/Services/OrderService.cs
  frontend/src/stores/bakery/order.ts

Vitrine pública:
  backend/Features/Public/Controllers/PublicController.cs
  frontend/src/views/store/StoreView.vue
  frontend/src/stores/store/usePublicStore.ts

Checkout / pedido público:
  backend/Features/Public/Controllers/PublicController.cs
  frontend/src/views/store/CheckoutView.vue
  frontend/src/stores/store/useCheckoutStore.ts

Webhook MP Pix (pedidos):
  backend/Features/Public/Controllers/PublicController.cs  (MpPixWebhook, SimulatePayment)
  backend/Features/Public/Services/MpPixService.cs

Webhook MP Assinaturas:
  backend/Features/Billing/Controllers/PaymentsController.cs
  backend/Features/Billing/Services/SubscriptionService.cs

SignalR / Notificações:
  backend/Hubs/AppHub.cs
  backend/Hubs/NotificationService.cs

Clientes:
  backend/Features/Customers/Controllers/CustomersController.cs
  backend/Features/Customers/Services/CustomerService.cs
  frontend/src/stores/store/useCustomerAuthStore.ts

Configurações da loja:
  backend/Features/Store/Controllers/StoreController.cs
  frontend/src/views/bakery/ProfileView.vue
  frontend/src/stores/bakery/store.ts
```

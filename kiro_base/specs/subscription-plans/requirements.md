# Requirements Document

## Introduction

Sistema completo de planos de assinatura para o Forizi Confeitaria. O backend de Billing já existe parcialmente (SubscriptionService, MercadoPagoGateway, IPaymentGateway, DTOs, repositório) — portado de outro projeto. Este documento cobre tudo que falta: middleware de bloqueio por assinatura, efeitos colaterais de expiração na confeitaria, tratamento de vitrine pública offline, frontend completo (tipos, store, modal de planos, callback, interceptor 402, banner de status), integração do trial no registro, ajustes no gateway, migration/seed, DI registration e configuração.

## Glossary

- **Subscription_Access_Middleware**: Middleware ASP.NET Core que intercepta requisições de escrita (POST/PUT/DELETE) e retorna HTTP 402 quando a assinatura da boleira está inativa. Requisições GET e rotas públicas passam sem verificação.
- **Subscription_Service**: Serviço existente (`SubscriptionService`) que gerencia toda a lógica de assinaturas: trial, subscribe, upgrade, cancel, webhooks, sync e verificação de acesso.
- **Payment_Gateway**: Interface `IPaymentGateway` implementada por `MercadoPagoGateway` para comunicação provider-agnostic com o Mercado Pago.
- **Bakery**: Entidade principal (tenant). Possui `IsPublished` que controla visibilidade da loja na vitrine pública.
- **Subscription_Plans_Modal**: Modal Vue 3 exibido no frontend quando a assinatura está inativa, apresentando os planos disponíveis e redirecionando para o checkout do Mercado Pago.
- **Subscription_Store**: Store Pinia (`useSubscriptionStore`) que gerencia estado da assinatura no frontend, incluindo computed `hasFullAccess`.
- **Subscription_Banner**: Componente de alerta no painel admin mostrando dias restantes do trial, status da assinatura e aviso de expiração.
- **Offline_Page**: Tela genérica exibida na vitrine pública quando a loja não está publicada, informando que a loja está temporariamente offline.
- **Callback_View**: View exibida após retorno do checkout do Mercado Pago, que faz polling + confirm para verificar ativação da assinatura.
- **Trial**: Período gratuito de 15 dias concedido automaticamente ao cadastrar uma boleira.
- **Lifetime_Account**: Conta vitalícia concedida por admin que nunca é bloqueada pelo middleware.
- **Public_Route**: Rota que não requer verificação de assinatura (auth, subscriptions, webhooks, health, swagger, rotas /api/public/).

## Requirements

### Requirement 1: Middleware de Bloqueio por Assinatura

**User Story:** As a bakery owner, I want write operations to be blocked when my subscription is inactive, so that the platform enforces subscription-based access control.

#### Acceptance Criteria

1. WHEN a POST, PUT or DELETE request is received for an authenticated bakery route, THE Subscription_Access_Middleware SHALL verify the subscription status via Subscription_Service.HasActiveAccessAsync before allowing the request to proceed.
2. WHEN the subscription is inactive and the request method is POST, PUT or DELETE, THE Subscription_Access_Middleware SHALL return HTTP 402 with a JSON body containing `{ "message": "Assinatura inativa", "code": "SUBSCRIPTION_REQUIRED" }`.
3. WHEN the request method is GET, THE Subscription_Access_Middleware SHALL allow the request to proceed without subscription verification.
4. WHEN the request path matches a Public_Route (/api/auth, /api/subscriptions, /api/payments/webhook, /health, /swagger, /api/public/), THE Subscription_Access_Middleware SHALL allow the request to proceed without subscription verification regardless of HTTP method.
5. WHEN the request has no authenticated user (anonymous request), THE Subscription_Access_Middleware SHALL allow the request to proceed without subscription verification.
6. THE Subscription_Access_Middleware SHALL be registered in the middleware pipeline after authentication and authorization middleware in Program.cs.

### Requirement 2: Efeitos Colaterais da Expiração na Confeitaria

**User Story:** As a platform operator, I want the bakery store to be automatically unpublished when the subscription expires, so that only paying customers have active public stores.

#### Acceptance Criteria

1. WHEN the Subscription_Service.HasActiveAccessAsync method transitions a trial subscription to Expired status, THE Subscription_Service SHALL set Bakery.IsPublished to false for the corresponding bakery.
2. WHEN a webhook or sync operation transitions a subscription to Cancelled or Expired status (and CurrentPeriodEnd has passed), THE Subscription_Service SHALL set Bakery.IsPublished to false for the corresponding bakery.
3. WHEN a bakery owner attempts to publish the store (set IsPublished to true), THE Store_Service SHALL verify the subscription is active via Subscription_Service.HasActiveAccessAsync and reject the operation with an error message "É necessário uma assinatura ativa para publicar a loja" if inactive.
4. WHILE the subscription is inactive, THE Subscription_Access_Middleware SHALL block creation, editing and deletion of orders via HTTP 402 response, making orders effectively read-only.

### Requirement 3: Vitrine Pública — Slug e Loja Offline

**User Story:** As a customer visiting a bakery store, I want to see a friendly offline page when the store is not published, so that I understand the store is temporarily unavailable.

#### Acceptance Criteria

1. WHEN a customer accesses a slug that exists and the bakery IsPublished is true, THE Public_Controller SHALL return the bakery data normally.
2. WHEN a customer accesses a slug that does not exist, THE Public_Controller SHALL return HTTP 404 and the frontend SHALL redirect the user to the root path (/).
3. WHEN a customer accesses a slug that exists but the bakery IsPublished is false, THE Public_Controller SHALL return HTTP 200 with a response containing `{ "offline": true, "name": "<bakery_name>" }` and the frontend SHALL display the Offline_Page with the bakery name.
4. THE Offline_Page SHALL display a centered layout with a bakery icon, the bakery name, a message "Esta loja está temporariamente fora do ar" and a secondary message "Volte em breve".
5. WHILE the Offline_Page is displayed, THE frontend SHALL hide the store navigation (bottom nav, sidebar, topbar cart/orders links).

### Requirement 4: Frontend — Tipos TypeScript e Subscription Service

**User Story:** As a frontend developer, I want TypeScript types and an API service for subscriptions, so that the frontend can communicate with the subscription backend in a type-safe manner.

#### Acceptance Criteria

1. THE frontend SHALL define TypeScript interfaces for Subscription, SubscriptionPlan, SubscribeResponse, CancelSubscriptionRequest and SubscriptionStatus in a dedicated types file.
2. THE subscription_service SHALL expose methods: getPlans, getMySubscription, subscribe, upgrade, cancel, sync and confirm, each calling the corresponding backend endpoint via the shared axios instance.
3. THE subscription_service SHALL reside in `src/services/bakery/subscriptionService.ts` following the existing service layer pattern.

### Requirement 5: Frontend — Subscription Store (Pinia)

**User Story:** As a bakery owner using the admin panel, I want the subscription state to be managed centrally, so that all components can reactively access subscription status.

#### Acceptance Criteria

1. THE Subscription_Store SHALL expose reactive state: subscription (Subscription or null), plans (SubscriptionPlan array), and loading (boolean).
2. THE Subscription_Store SHALL expose a computed property `hasFullAccess` that returns true when subscription status is Active, Trial (with valid trial date), Lifetime, or Cancelled with CurrentPeriodEnd in the future.
3. THE Subscription_Store SHALL expose actions: loadSubscription, loadPlans, subscribe, upgrade, cancel, sync and confirm.
4. WHEN loadSubscription is called, THE Subscription_Store SHALL fetch the current subscription from the backend and update the reactive state.
5. THE Subscription_Store SHALL reside in `src/stores/bakery/subscription.ts` following the existing Pinia composition API pattern.

### Requirement 6: Frontend — Modal de Planos

**User Story:** As a bakery owner with an inactive subscription, I want to see a modal presenting available plans, so that I can subscribe and regain full access.

#### Acceptance Criteria

1. THE Subscription_Plans_Modal SHALL display available plans with name, price, billing interval and a subscribe button for each plan.
2. WHEN the user clicks a subscribe button, THE Subscription_Plans_Modal SHALL call the Subscription_Store subscribe action and redirect the user to the Mercado Pago checkout URL returned by the backend.
3. WHEN the user has an active monthly subscription, THE Subscription_Plans_Modal SHALL display an upgrade option for the yearly plan.
4. THE Subscription_Plans_Modal SHALL be openable programmatically from the axios 402 interceptor and from the Subscription_Banner.
5. THE Subscription_Plans_Modal SHALL reside in `src/components/SubscriptionPlansModal.vue`.

### Requirement 7: Frontend — Callback View Pós-Checkout

**User Story:** As a bakery owner returning from Mercado Pago checkout, I want to see a confirmation page that verifies my subscription activation, so that I know my payment was processed.

#### Acceptance Criteria

1. WHEN the user returns from Mercado Pago checkout, THE Callback_View SHALL extract the preapproval_id from the URL query parameters.
2. THE Callback_View SHALL call the confirm endpoint with the preapproval_id and then poll the sync endpoint at 3-second intervals for up to 30 seconds until the subscription status is Active.
3. WHEN the subscription becomes Active during polling, THE Callback_View SHALL display a success message and redirect to the admin panel after 3 seconds.
4. WHEN polling times out without activation, THE Callback_View SHALL display a message informing the user that the payment is being processed and to check back later.
5. THE Callback_View SHALL be accessible at `/:slug/admin/assinatura/callback` and registered in the router.

### Requirement 8: Frontend — Interceptor 402 no Axios

**User Story:** As a bakery owner with an inactive subscription, I want to be prompted with the plans modal when any write operation is blocked, so that I can subscribe without navigating away.

#### Acceptance Criteria

1. WHEN the axios instance receives a 402 response, THE interceptor SHALL open the Subscription_Plans_Modal instead of propagating the error to the calling component.
2. THE interceptor SHALL NOT open the modal for requests to subscription-related endpoints (/api/subscriptions, /api/payments) to avoid circular behavior.
3. THE interceptor SHALL be added to the existing response interceptor in `src/services/core/api.ts`.

### Requirement 9: Frontend — Banner de Status da Assinatura

**User Story:** As a bakery owner, I want to see a banner in the admin panel showing my subscription status, so that I am aware of trial days remaining, expiration warnings and current plan.

#### Acceptance Criteria

1. WHILE the subscription status is Trial, THE Subscription_Banner SHALL display the number of days remaining until trial expiration with a blue info color.
2. WHILE the subscription status is Trial and 3 or fewer days remain, THE Subscription_Banner SHALL display a warning color (orange) with a message urging the user to subscribe.
3. WHILE the subscription status is Active, THE Subscription_Banner SHALL display the current plan name and the next billing date.
4. WHILE the subscription status is Cancelled with CancelAtPeriodEnd true and CurrentPeriodEnd in the future, THE Subscription_Banner SHALL display a warning that access will end on the period end date.
5. WHILE the subscription status is Expired or Cancelled (with no remaining period), THE Subscription_Banner SHALL display an error color (red) with a message to subscribe and a button that opens the Subscription_Plans_Modal.
6. WHILE the subscription status is Lifetime, THE Subscription_Banner SHALL NOT be displayed.
7. THE Subscription_Banner SHALL be rendered inside the BakeryAdminLayout component.

### Requirement 10: Integração do Trial no Registro

**User Story:** As a new bakery owner registering on the platform, I want to automatically receive a 15-day trial, so that I can explore the platform before subscribing.

#### Acceptance Criteria

1. WHEN a new bakery is registered via AuthService.RegisterAsync, THE Auth_Service SHALL call Subscription_Service.CreateTrialAsync with the new bakery ID after successful registration.
2. IF the CreateTrialAsync call fails, THEN THE Auth_Service SHALL log the error and continue the registration flow without blocking the user.
3. THE trial subscription SHALL have TrialEndsAt set to 15 days from the current Brazil datetime.

### Requirement 11: Ajustes no MercadoPagoGateway

**User Story:** As a platform operator, I want the gateway to use the correct product name and pricing, so that customers see "Assinatura Forizi Confeitaria" on their Mercado Pago statements.

#### Acceptance Criteria

1. THE MercadoPago_Gateway SHALL use the reason "Assinatura Forizi Confeitaria" instead of "Assinatura Meu Mês" when creating a preapproval.
2. THE Plan seed data SHALL define the monthly plan at R$ 29,90 and the yearly plan at R$ 299,90.

### Requirement 12: Migration e Seed dos Planos

**User Story:** As a developer deploying the application, I want the billing tables and plan seed data to be created automatically, so that the subscription system is ready to use after deployment.

#### Acceptance Criteria

1. THE ApplicationDbContext SHALL include DbSet declarations for Plan, Subscription and Payment entities (already present).
2. THE ApplicationDbContext SHALL include EF Core configuration for Plan, Subscription and Payment entities with proper indexes, precision and relationships (already present).
3. THE Plan seed data SHALL include two active plans: "Mensal" (R$ 29,90, Monthly) and "Anual" (R$ 299,90, Yearly) (already present in ConfigurePlan).
4. WHEN a new migration is generated, THE migration SHALL create tables plans, subscriptions and payments with snake_case naming convention enforced by UseSnakeCaseNamingConvention.

### Requirement 13: DI Registration e Configuração

**User Story:** As a developer, I want all billing services to be properly registered in the DI container, so that the subscription system is fully wired up.

#### Acceptance Criteria

1. THE Program.cs SHALL register ISubscriptionRepository, ISubscriptionService and IPaymentGateway (via HttpClient factory) in the DI container (already present).
2. THE appsettings SHALL include configuration sections for MercadoPago:AccessToken, MercadoPago:BackUrl, MercadoPago:WebhookSecret and MercadoPago:NotificationUrl.
3. THE Subscription_Access_Middleware SHALL be registered in the middleware pipeline in Program.cs after UseAuthentication and UseAuthorization.

### Requirement 14: Frontend — Tela de Loja Offline para Vitrine Pública

**User Story:** As a customer visiting an unpublished bakery store, I want to see a visually appealing offline page, so that I understand the store is temporarily unavailable without being confused.

#### Acceptance Criteria

1. THE Offline_Page component SHALL display a centered card with a store icon (mdi-store-off-outline), the bakery name, a primary message "Esta loja está temporariamente fora do ar" and a secondary message "Volte em breve".
2. THE Offline_Page component SHALL use the project's design system colors (--fc-primary, --fc-surface, --fc-on-surface) and be responsive for mobile and desktop.
3. THE Offline_Page component SHALL reside in `src/views/store/StoreOfflineView.vue`.
4. WHEN the publicStore detects the bakery is offline, THE StoreLayout SHALL render the Offline_Page instead of the router-view and hide the navigation elements.

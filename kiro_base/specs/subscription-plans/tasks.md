# Implementation Plan: Subscription Plans

## Overview

Implementação completa do sistema de assinaturas para o Forizi Confeitaria. O backend de Billing já existe parcialmente — este plano cobre o que falta: middleware de bloqueio, side-effects de expiração, vitrine offline, frontend completo (tipos, store, modal, callback, interceptor 402, banner), integração do trial no registro, ajustes no gateway, migration/seed e DI.

**⚠️ CODE-STYLE OBRIGATÓRIO EM TODAS AS TASKS:**
- **Backend:** NUNCA AutoMapper (MapToDto private static), NUNCA expor entidade (sempre DTO record), NUNCA lógica no controller (só orquestração), NUNCA .Result/.Wait() (sempre async/await), primary constructor, early return, Entry(entity).State = EntityState.Modified para HasConversion, camadas Controller → Service → Repository → Database, snake_case no banco.
- **Frontend:** Zero lógica no template (computed/methods), loading no finally, sem console.log (usar notify.error), camadas Component → Store → Service → API (sem pular), tipagem completa (sem var, sem any), Vuetify variant="outlined" nos campos, Pinia composition API, ESLint + Prettier.

## Tasks

- [x] 1. Backend — Migration e Seed de Preços dos Planos
  - [x] 1.1 Criar migration para atualizar preços dos planos
    - Gerar migration via `dotnet ef migrations add UpdatePlanPrices`
    - Atualizar seed data: Plan 1 "Mensal" → R$ 29,90 (Monthly), Plan 2 "Anual" → R$ 299,90 (Yearly)
    - Atualizar os valores no `ConfigurePlan` do `ApplicationDbContext`
    - **Code-style:** snake_case em tabelas/colunas/constraints, NUNCA migration manual
    - _Requirements: 12.3, 12.4_

  - [x] 1.2 Adicionar método `UpdateBakeryAsync` ao `ISubscriptionRepository` e `SubscriptionRepository`
    - Adicionar `Task UpdateBakeryAsync(Bakery bakery)` na interface
    - Implementar no repositório usando `Entry(entity).State = EntityState.Modified` (Bakery tem HasConversion em enums)
    - **Code-style:** repositório = acesso a dados apenas, DbContext via primary constructor, Entry.State para HasConversion
    - _Requirements: 2.1, 2.2_

- [x] 2. Backend — SubscriptionAccessMiddleware
  - [x] 2.1 Criar `SubscriptionAccessMiddleware` em `backend/Shared/Middleware/SubscriptionAccessMiddleware.cs`
    - Implementar middleware com primary constructor (`RequestDelegate next`)
    - `ISubscriptionService` injetado via method injection no `InvokeAsync` (middleware é singleton, service é scoped)
    - GET sempre passa, rotas públicas passam (/api/auth, /api/subscriptions, /api/payments, /health, /swagger, /api/public), sem usuário autenticado passa
    - Para POST/PUT/DELETE em rotas não-públicas com usuário autenticado: chamar `HasActiveAccessAsync(userId)`
    - Se inativo: retornar HTTP 402 com `{ "message": "Assinatura inativa", "code": "SUBSCRIPTION_REQUIRED" }`
    - **Code-style:** early return sempre, sem ifs aninhados, async/await, primary constructor
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x] 2.2 Registrar middleware no `Program.cs`
    - Adicionar `app.UseMiddleware<SubscriptionAccessMiddleware>()` após `UseAuthentication` e `UseAuthorization`, antes de `MapControllers`
    - _Requirements: 1.6, 13.3_

- [x] 3. Backend — Side-Effects de Expiração e Publicação
  - [x] 3.1 Alterar `HasActiveAccessAsync` no `SubscriptionService` para despublicar bakery ao expirar trial
    - Quando trial expira (status → Expired): buscar bakery via `_repository.GetBakeryByIdAsync(userId)`, se `IsPublished == true` setar `false` e chamar `_repository.UpdateBakeryAsync(bakery)`
    - Manter lógica existente intacta, apenas adicionar side-effect após `subscription.Status = SubscriptionStatus.Expired`
    - **Code-style:** early return, async/await, sem lógica no controller
    - _Requirements: 2.1_

  - [x] 3.2 Adicionar despublicação nos handlers de webhook quando subscription fica inativa
    - No `HandlePreapprovalWebhookAsync`, quando `newStatus` é `Cancelled` ou `Expired` e `CurrentPeriodEnd` já passou: despublicar bakery
    - **Code-style:** early return, async/await
    - _Requirements: 2.2_

  - [x] 3.3 Alterar `TogglePublishAsync` no `StoreService` para verificar assinatura ativa antes de publicar
    - Injetar `ISubscriptionService` no `StoreService` via primary constructor
    - Quando `!bakery.IsPublished` (quer publicar): chamar `HasActiveAccessAsync(bakeryId)`, se `false` → throw `InvalidOperationException("É necessário uma assinatura ativa para publicar a loja")`
    - **Code-style:** primary constructor, early return, lógica no service (não no controller)
    - _Requirements: 2.3_

- [x] 4. Checkpoint — Backend middleware e side-effects
  - Build sem erros de compilação (`dotnet build`)
  - Verificar registro do middleware no Program.cs
  - Perguntar ao usuário se há ajustes antes de continuar

- [ ] 5. Backend — Integração do Trial no Registro e Ajustes no Gateway
  - [ ] 5.1 Integrar criação de trial no `AuthService.RegisterAsync`
    - Injetar `ISubscriptionService` e `ILogger<AuthService>` no `AuthService` via primary constructor
    - Após `bakeryRepository.CreateAsync(bakery)`: chamar `subscriptionService.CreateTrialAsync(created.Id)` em try/catch
    - Se falhar: `logger.LogError(ex, ...)` e continuar — fire-and-forget, não bloqueia registro
    - **Code-style:** primary constructor, async/await, NUNCA engolir exceção (log + continue é ok para fire-and-forget)
    - _Requirements: 10.1, 10.2, 10.3_

  - [ ] 5.2 Alterar `reason` no `MercadoPagoGateway.CreateSubscriptionAsync`
    - Trocar `"Assinatura Meu Mês"` por `"Assinatura Forizi Confeitaria"`
    - _Requirements: 11.1_

- [ ] 6. Backend — Vitrine Pública Offline
  - [ ] 6.1 Adicionar método `GetBySlugWithoutPublishFilterAsync` no repositório de bakery
    - Adicionar na interface `IBakeryRepository` e implementar no `BakeryRepository`
    - Buscar bakery por slug sem filtrar `IsPublished`
    - **Code-style:** repositório = acesso a dados apenas, DbContext via primary constructor
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ] 6.2 Alterar endpoint `GetStore` no `PublicController` para retornar offline response
    - Usar `GetBySlugWithoutPublishFilterAsync(slug)` em vez do método existente
    - Se bakery `null` → 404
    - Se bakery existe mas `!IsPublished` → 200 com `{ offline = true, name = bakery.Name }`
    - Se bakery existe e `IsPublished` → retornar dados normalmente
    - **Code-style:** controller fino (só orquestração), early return, ActionResult<T>
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 7. Checkpoint — Backend completo
  - Build sem erros de compilação (`dotnet build`)
  - Perguntar ao usuário se há ajustes antes de partir para o frontend

- [ ] 8. Frontend — Tipos TypeScript e Subscription Service
  - [ ] 8.1 Criar tipos TypeScript em `frontend/src/types/subscription.ts`
    - Definir interfaces: `SubscriptionPlan`, `Subscription`, `SubscribeResponse`, `CancelSubscriptionRequest`
    - Definir type: `SubscriptionStatus` (union type: 'Trial' | 'Active' | 'PastDue' | 'Cancelled' | 'Expired' | 'Lifetime' | 'Pending')
    - **Code-style:** tipagem completa, sem any, sem var
    - _Requirements: 4.1_

  - [ ] 8.2 Criar subscription service em `frontend/src/services/bakery/subscriptionService.ts`
    - Seguir padrão existente de `storeService.ts` (objeto com métodos async)
    - Métodos: `getPlans`, `getMySubscription`, `subscribe`, `upgrade`, `cancel`, `sync`, `confirm`
    - Usar instância `api` de `@/services/core/api`
    - **Code-style:** service = HTTP apenas, tipagem completa, async/await, sem .then/.catch
    - _Requirements: 4.2, 4.3_

- [ ] 9. Frontend — Subscription Store (Pinia)
  - [ ] 9.1 Criar subscription store em `frontend/src/stores/bakery/subscription.ts`
    - Pinia composition API pattern (defineStore com setup function)
    - State: `subscription` (ref<Subscription | null>), `plans` (ref<SubscriptionPlan[]>), `loading` (ref<boolean>)
    - Computed: `hasFullAccess` — true se Active, Lifetime, Trial com trialEndsAt futuro, ou Cancelled com currentPeriodEnd futuro
    - Actions: `loadSubscription`, `loadPlans`, `subscribe`, `upgrade`, `cancel`, `sync`, `confirm`
    - Cada action: loading no finally, notify.error no catch
    - **Code-style:** Pinia composition API, loading no finally, sem console.log (usar notify.error), tipagem completa, sem any
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 10. Frontend — SubscriptionPlansModal
  - [ ] 10.1 Criar `frontend/src/components/SubscriptionPlansModal.vue`
    - Modal Vuetify `v-dialog` com planos: nome, preço, intervalo, botão assinar
    - Quando assinatura mensal ativa: exibir opção de upgrade para anual
    - Ao clicar assinar: chamar `subscriptionStore.subscribe(planId)`, redirecionar para `checkoutUrl` via `window.location.href`
    - Exportar ref global `subscriptionModalOpen` para ser aberto pelo interceptor 402
    - **Code-style:** zero lógica no template (usar computed), loading no finally, sem console.log, variant="outlined" nos campos, camadas Component → Store
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 11. Frontend — SubscriptionBanner
  - [ ] 11.1 Criar `frontend/src/components/bakery/SubscriptionBanner.vue`
    - Componente `v-alert` com lógica por status:
      - Trial: azul info, "X dias restantes" (laranja warning se ≤ 3 dias)
      - Active: info com plano e próxima cobrança
      - Cancelled + período ativo: warning com data de fim
      - Expired/Cancelled sem período: error vermelho com botão para abrir modal
      - Lifetime: não renderiza (v-if)
    - **Code-style:** zero lógica no template (computed para cor, texto, visibilidade), camadas Component → Store
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

  - [ ] 11.2 Integrar `SubscriptionBanner` no `BakeryAdminLayout.vue`
    - Importar e renderizar `SubscriptionBanner` dentro do layout, antes do `<router-view />`
    - Carregar subscription no `onMounted` do layout via `subscriptionStore.loadSubscription()`
    - **Code-style:** camadas Component → Store, sem lógica no template
    - _Requirements: 9.7_

- [ ] 12. Frontend — Callback View e Interceptor 402
  - [ ] 12.1 Criar `frontend/src/views/bakery/SubscriptionCallbackView.vue`
    - Rota: `/:slug/admin/assinatura/callback`
    - Extrair `preapproval_id` dos query params
    - Chamar `confirm(preapprovalId)`, depois polling de `sync` a cada 3s por até 30s
    - Sucesso (Active): mensagem de sucesso + redirect para admin após 3s
    - Timeout: mensagem "pagamento sendo processado, verifique mais tarde"
    - **Code-style:** loading no finally, sem console.log, tipagem completa, camadas Component → Store
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ] 12.2 Registrar rota do callback no router
    - Adicionar rota `assinatura/callback` como child de `/:slug/admin`
    - Lazy load do componente
    - _Requirements: 7.5_

  - [ ] 12.3 Adicionar interceptor 402 no `frontend/src/services/core/api.ts`
    - No interceptor de response existente: quando status 402 e URL não é `/subscriptions` nem `/payments`
    - Abrir `SubscriptionPlansModal` (importar ref global) e rejeitar promise silenciosamente
    - Para URLs de `/subscriptions` ou `/payments`: propagar erro normalmente
    - **Code-style:** sem console.log, tipagem completa
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 13. Frontend — Vitrine Offline
  - [ ] 13.1 Criar `frontend/src/views/store/StoreOfflineView.vue`
    - Card centralizado com ícone `mdi-store-off-outline`, nome da confeitaria, "Esta loja está temporariamente fora do ar", "Volte em breve"
    - Usar variáveis CSS do design system (--fc-primary, --fc-surface, --fc-on-surface)
    - Responsivo para mobile e desktop
    - **Code-style:** zero lógica no template, sem !important no CSS, sem hardcodar cores
    - _Requirements: 14.1, 14.2, 14.3_

  - [ ] 13.2 Alterar `publicStore` para detectar offline e `StoreLayout` para renderizar offline page
    - No `publicStore.load()`: detectar `offline: true` na response, setar ref `offline` e `name`
    - No `StoreLayout`: quando `publicStore.offline === true`, renderizar `StoreOfflineView` em vez de `<router-view />`, esconder navegação (bottom nav, sidebar, topbar)
    - **Code-style:** zero lógica no template (computed), camadas Component → Store
    - _Requirements: 3.3, 3.4, 3.5, 14.4_

- [ ] 14. Checkpoint — Frontend completo
  - Build sem erros de TypeScript (`pnpm build` ou `pnpm type-check`)
  - Perguntar ao usuário se há ajustes antes do checkpoint final

- [ ] 15. Final checkpoint — Validação manual
  - Build do backend sem erros de compilação
  - Build do frontend sem erros de TypeScript
  - Testar manualmente os fluxos principais: trial no registro, bloqueio ao expirar, loja offline, checkout MP, banner de status
  - Perguntar ao usuário se há ajustes antes de fechar

## Notes

- Testes unitários e property-based tests serão implementados em uma fase futura (após validação manual completa)
- Cada task referencia requirements específicos para rastreabilidade
- Checkpoints garantem validação incremental
- O backend de Billing já existe parcialmente — as tasks focam no que falta
- **CODE-STYLE É OBRIGATÓRIO:** seguir rigorosamente `rule-code-style-backend.md` e `rule-code-style-frontend.md` em todas as tasks

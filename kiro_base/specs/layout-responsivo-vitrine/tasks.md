# Tasks — Layout Responsivo Vitrine

## Task 1 — Verificar e globalizar variáveis CSS `--store-*`

**Objetivo:** garantir que as variáveis de cor da vitrine estejam disponíveis globalmente antes de qualquer outra mudança.

**Passos:**
1. Verificar onde as variáveis `--store-primary`, `--store-surface`, `--store-on-surface`, etc. estão definidas (buscar em `StoreLayout.vue`, `main.ts`, `App.vue`, `assets/`).
2. Se estiverem em `StoreLayout.vue` com `:root` ou `scoped`, mover para `frontend/src/assets/store-theme.css`.
3. Importar o arquivo no `main.ts` se ainda não estiver importado globalmente.
4. Confirmar que `HomeView.vue` consegue usar as variáveis sem erro.

**Arquivos:**
- `frontend/src/views/store/StoreLayout.vue`
- `frontend/src/assets/store-theme.css` (criar se não existir)
- `frontend/src/main.ts`

**Critério de aceite:** `HomeView` usa `var(--store-primary)` sem precisar redefinir nada.

---

## Task 2 — StoreLayout: sidebar desktop + layout responsivo

**Objetivo:** adicionar sidebar de navegação no desktop sem alterar o mobile.

**Passos:**
1. Importar `useBreakpoint` da lib no `StoreLayout.vue`.
2. Adicionar `v-if="!isMobile"` na sidebar e `v-if="isMobile"` no bottom nav.
3. Criar o template da sidebar com os mesmos itens do bottom nav + toggle de tema + link "Outras lojas".
4. Adicionar classes CSS condicionais no layout root (`:class="{ 'store-layout--desktop': !isMobile }"`).
5. Implementar CSS desktop:
   - `.store-layout--desktop`: `padding-left: 240px`, `padding-bottom: 0`
   - `.store-topbar--desktop`: `padding-left: 256px`
   - `.store-sidebar`: `position: fixed`, `top: 52px`, `left: 0`, `width: 240px`, `height: calc(100dvh - 52px)`, scroll interno
6. Estilizar sidebar com variáveis `--store-*` (mesma identidade da vitrine).
7. Badge do carrinho na sidebar igual ao bottom nav.
8. Item ativo destacado via `isActive` computed (já existe no componente).

**Arquivos:**
- `frontend/src/views/store/StoreLayout.vue`

**Critério de aceite:**
- Mobile (< 960px): topbar + bottom nav, sem sidebar. Idêntico ao atual.
- Desktop (≥ 960px): topbar + sidebar fixa 240px, sem bottom nav.
- Badge do carrinho aparece nos dois contextos.
- Nenhuma lógica de negócio duplicada.

---

## Task 3 — StoreView: grid responsivo

**Objetivo:** grid de produtos com mais colunas no desktop.

**Passos:**
1. No `StoreView.vue`, alterar a regra CSS do `.store-products__grid`:
   - De: `grid-template-columns: 1fr 1fr`
   - Para: `grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))`

**Arquivos:**
- `frontend/src/views/store/StoreView.vue`

**Critério de aceite:**
- Mobile: 2 colunas (minmax(180px) em tela ~360px = 2 colunas).
- Desktop: 3–4 colunas automaticamente.
- Nenhuma lógica Vue alterada.

---

## Task 4 — Views internas: max-width e centralização

**Objetivo:** evitar que o conteúdo fique "esticado" em telas largas.

**Passos:** para cada view abaixo, adicionar/ajustar o seletor raiz com `max-width` e `margin: 0 auto`:

| View | Seletor | max-width |
|------|---------|-----------|
| `CartView.vue` | `.cart-view` | 640px (já tem 480px, aumentar) |
| `ProductDetailView.vue` | `.product-detail` | 720px |
| `CustomerOrdersView.vue` | `.orders-view` | 720px |
| `CheckoutView.vue` | `.checkout-view` | 640px |
| `PaymentView.vue` | seletor raiz | 640px |
| `OrderTrackingView.vue` | seletor raiz | 640px |
| `CustomerProfileView.vue` | `.profile-view` | 720px |
| `CustomerLoginView.vue` | `.auth-view` | 480px |
| `CustomerRegisterView.vue` | seletor raiz | 480px |

Antes de editar cada view, ler o arquivo para confirmar o seletor raiz e o `max-width` atual.

**Arquivos:**
- `frontend/src/views/store/CartView.vue`
- `frontend/src/views/store/ProductDetailView.vue`
- `frontend/src/views/store/CustomerOrdersView.vue`
- `frontend/src/views/store/CheckoutView.vue`
- `frontend/src/views/store/PaymentView.vue`
- `frontend/src/views/store/OrderTrackingView.vue`
- `frontend/src/views/store/CustomerProfileView.vue`
- `frontend/src/views/store/CustomerLoginView.vue`
- `frontend/src/views/store/CustomerRegisterView.vue`

**Critério de aceite:**
- Nenhuma view fica com conteúdo esticado em telas > 960px.
- Mobile não é afetado.
- Nenhuma lógica Vue alterada — apenas CSS.

---

## Task 5 — HomeView: redesign

**Objetivo:** transformar a home em uma página de apresentação da plataforma com hero, busca e grid de cards.

**Passos:**
1. Ler o `HomeView.vue` atual e o `usePlatformStore` para entender o estado disponível.
2. Adicionar `search` ref e `filtered` computed (filtro local por nome e cidade).
3. Adicionar hero section com ícone, título, subtítulo e campo de busca.
4. Atualizar topbar: adicionar botão "Cadastrar" ao lado do login.
5. Atualizar grid de cards:
   - Mobile: lista vertical (1 coluna) — igual ao atual.
   - Desktop: `repeat(auto-fill, minmax(320px, 1fr))`.
6. Enriquecer card: adicionar campo `description` opcional.
7. Manter CTA de cadastro existente com visual mais destacado.
8. Usar variáveis `--store-*` para cores (após Task 1).
9. Usar `isMobile` da lib para ajustes pontuais de layout (ex: hero compacto no mobile).

**Arquivos:**
- `frontend/src/views/HomeView.vue`

**Critério de aceite:**
- Hero visível em ambos os tamanhos.
- Busca filtra localmente sem nova chamada à API.
- Grid responsivo: 1 coluna mobile, 2–3 colunas desktop.
- `usePlatformStore` não é alterado.
- Campo `description` tratado como opcional (sem quebrar se não existir).

---

## Ordem de execução

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5
```

Task 1 é pré-requisito para Task 2 e Task 5 (variáveis CSS).
Tasks 3 e 4 são independentes entre si e podem ser feitas em paralelo após Task 2.
Task 5 depende de Task 1.

# Design — Layout Responsivo Vitrine

## Princípio central

**Mobile não muda.** Tudo que existe hoje em `≤ 960px` permanece idêntico.
O `isMobile` da lib (`useBreakpoint`) é o único interruptor entre os dois layouts.

```ts
import { useBreakpoint } from '@wallacesw11/base-lib'
const { isMobile } = useBreakpoint() // true = smAndDown (< 960px)
```

---

## R1 + R2 — StoreLayout desktop

### Estrutura visual desktop

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR (52px, full width, blur)                        │
│  [logo + nome]                          [compartilhar]  │
└─────────────────────────────────────────────────────────┘
┌──────────┬──────────────────────────────────────────────┐
│          │                                              │
│ SIDEBAR  │         CONTEÚDO PRINCIPAL                   │
│  240px   │         max-width: 960px                     │
│  fixa    │         margin: 0 auto                       │
│          │                                              │
│ [Início] │                                              │
│ [Carrinho│                                              │
│  badge]  │                                              │
│ [Pedidos]│                                              │
│ [Perfil] │                                              │
│          │                                              │
│ ─────── │                                              │
│ [Tema]   │                                              │
│ [Lojas]  │                                              │
│          │                                              │
│ by Forizi│                                              │
└──────────┴──────────────────────────────────────────────┘
```

### Comportamento

- **Topbar:** permanece full-width com blur. No desktop, o conteúdo interno se alinha com a área de conteúdo (padding-left = 240px).
- **Sidebar:** `position: fixed`, `top: 52px`, `left: 0`, `width: 240px`, `height: calc(100dvh - 52px)`. Mesma identidade visual da vitrine (tons terrosos, `--store-*`).
- **Main:** `padding-left: 240px` no desktop, `padding-top: 52px` em ambos. `padding-bottom: 64px` só no mobile (bottom nav).
- **Bottom nav:** `display: none` no desktop via CSS (não remover do DOM — usar `v-show` ou classe condicional).

### Sidebar desktop — itens

```
[ícone] Início
[ícone] Carrinho  [badge com count]
[ícone] Pedidos
[ícone] Perfil

── separador ──

[ícone] Modo escuro / claro  (toggle)
[ícone] Outras lojas         (→ /)

── rodapé ──
by Forizi  |  v1.x.x
```

Item ativo: fundo `rgba(165, 54, 0, 0.10)`, cor `--store-primary`, font-weight 600.

### Implementação no StoreLayout

Usar `isMobile` para controlar classes CSS, não para duplicar template:

```vue
<div class="store-layout" :class="{ 'store-layout--desktop': !isMobile }">
  <header class="store-topbar" :class="{ 'store-topbar--desktop': !isMobile }">
    ...
  </header>

  <!-- sidebar: só renderiza no desktop -->
  <aside v-if="!isMobile" class="store-sidebar">
    ...
  </aside>

  <main class="store-main">
    <router-view />
  </main>

  <!-- bottom nav: só renderiza no mobile -->
  <nav v-if="isMobile" class="store-bottom-nav">
    ...
  </nav>
</div>
```

CSS desktop via classe modificadora:

```css
.store-layout--desktop {
  padding-left: 240px;
  padding-bottom: 0;
}

.store-topbar--desktop {
  padding-left: 256px; /* 240px sidebar + 16px */
}
```

---

## R3 — Grid de produtos responsivo

Mudança mínima no CSS do `StoreView.vue`:

```css
/* antes */
.store-products__grid {
  grid-template-columns: 1fr 1fr;
}

/* depois */
.store-products__grid {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
```

Resultado: 2 colunas em mobile, 3–4 colunas em desktop automaticamente. Sem JS, sem breakpoint explícito.

---

## R4 — Max-width nas views internas

Padrão a aplicar em cada view:

| View | Seletor raiz | max-width atual | max-width novo |
|------|-------------|-----------------|----------------|
| `CartView` | `.cart-view` | 480px | 640px |
| `ProductDetailView` | `.product-detail` | nenhum | 720px + `margin: 0 auto` |
| `CustomerOrdersView` | `.orders-view` | nenhum | 720px + `margin: 0 auto` |
| `CheckoutView` | `.checkout-view` | nenhum | 640px + `margin: 0 auto` |
| `PaymentView` | `.payment-view` | verificar | 640px + `margin: 0 auto` |
| `OrderTrackingView` | `.order-tracking` | verificar | 640px + `margin: 0 auto` |
| `CustomerProfileView` | `.profile-view` | nenhum | 720px + `margin: 0 auto` |
| `CustomerLoginView` | `.auth-view` | nenhum | 480px + `margin: 0 auto` |
| `CustomerRegisterView` | `.auth-view` (ou similar) | verificar | 480px + `margin: 0 auto` |

Padrão CSS a adicionar/ajustar no seletor raiz de cada view:

```css
.nome-da-view {
  width: 100%;
  max-width: 640px; /* ou o valor da tabela */
  margin: 0 auto;
}
```

Isso não afeta mobile porque `max-width` só limita quando a tela é maior que o valor.

---

## R5 — HomeView redesign

### Layout mobile (≤ 960px) — lista

```
┌─────────────────────────────┐
│  TOPBAR                     │
│  🎂 Forizi    [Login] [Cad] │
├─────────────────────────────┤
│  HERO                       │
│  [ícone grande]             │
│  Encontre sua confeitaria   │
│  Tagline curta              │
├─────────────────────────────┤
│  [🔍 Buscar por nome...]    │
├─────────────────────────────┤
│  Confeitarias               │
│  ┌─────────────────────┐   │
│  │ [avatar] Nome       │   │
│  │         Cidade      │   │
│  │         [badges]    │   │
│  └─────────────────────┘   │
│  ...                        │
├─────────────────────────────┤
│  CTA cadastro               │
└─────────────────────────────┘
```

### Layout desktop (> 960px) — grid

```
┌──────────────────────────────────────────────────────┐
│  TOPBAR: 🎂 Forizi              [Login] [Cadastrar]  │
├──────────────────────────────────────────────────────┤
│                                                      │
│  HERO (fundo terroso, centralizado, max-width 800px) │
│  [ícone]  Encontre sua confeitaria favorita          │
│           Tagline                                    │
│           [🔍 Buscar por nome ou cidade...]          │
│                                                      │
├──────────────────────────────────────────────────────┤
│  Confeitarias  (max-width 1100px, margin auto)       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐             │
│  │  card    │ │  card    │ │  card    │             │
│  └──────────┘ └──────────┘ └──────────┘             │
│                                                      │
├──────────────────────────────────────────────────────┤
│  CTA cadastro (centralizado)                         │
└──────────────────────────────────────────────────────┘
```

### Hero section

- Fundo: `#f6f3ef` (light) / `#2a1a14` (dark)
- Ícone: `mdi-cake-variant` tamanho 56, cor `#a53600`
- Título: "Encontre sua confeitaria favorita" — 24px bold
- Subtítulo: "Peça online das melhores confeitarias artesanais" — 14px muted
- Campo de busca integrado ao hero no desktop, separado no mobile

### Card de confeitaria — enriquecido

```
┌─────────────────────────────────────────┐
│  [avatar 56px]  Nome da Confeitaria     │
│                 Cidade - Estado         │
│                 [Entrega] [Retirada]    │
│                 Descrição curta (opt.)  │
│                                    [>] │
└─────────────────────────────────────────┘
```

No desktop: cards em grid `repeat(auto-fill, minmax(320px, 1fr))`.
No mobile: lista vertical (1 coluna), igual ao atual.

### Topbar da Home

- Manter: logo "🎂 Forizi" + botão de login
- Adicionar: botão "Cadastrar" (outlined, pequeno) ao lado do login
- No mobile: só ícones para economizar espaço

### Busca local

```ts
const search = ref('')
const filtered = computed(() =>
  bakeries.value.filter(b =>
    b.name.toLowerCase().includes(search.value.toLowerCase()) ||
    (b.city ?? '').toLowerCase().includes(search.value.toLowerCase())
  )
)
```

---

## R6 — Variáveis CSS globais

Verificar onde as variáveis `--store-*` são definidas. Se estiverem apenas no `StoreLayout.vue` (scoped), a `HomeView` não as enxerga.

Solução: mover as variáveis para `frontend/src/assets/store-theme.css` e importar no `main.ts` (ou `App.vue`).

Verificar antes de mover — pode já estar em um arquivo global.

---

## Arquivos a criar/modificar

| Arquivo | Tipo de mudança |
|---------|----------------|
| `StoreLayout.vue` | Adicionar sidebar desktop, classes condicionais, `isMobile` |
| `StoreView.vue` | Grid CSS: `auto-fill minmax` |
| `CartView.vue` | max-width 640px |
| `ProductDetailView.vue` | max-width 720px + margin auto |
| `CustomerOrdersView.vue` | max-width 720px + margin auto |
| `CheckoutView.vue` | max-width 640px + margin auto |
| `PaymentView.vue` | max-width 640px + margin auto |
| `OrderTrackingView.vue` | max-width 640px + margin auto |
| `CustomerProfileView.vue` | max-width 720px + margin auto |
| `CustomerLoginView.vue` | max-width 480px + margin auto |
| `CustomerRegisterView.vue` | max-width 480px + margin auto |
| `HomeView.vue` | Redesign completo |
| `assets/store-theme.css` (novo ou existente) | Variáveis `--store-*` globais |

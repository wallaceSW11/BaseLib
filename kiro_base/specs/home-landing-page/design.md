# Design — Home / Landing Page

## Estrutura do componente

Um único arquivo: `frontend/src/views/HomeView.vue`.

Seções como blocos `<section>` dentro do template, sem sub-componentes (página simples, sem reutilização).

---

## Paleta de cores

Reutilizar as variáveis já definidas em `@/styles/store.css`:

```css
--store-primary: #a53600        /* marrom-terracota — CTAs, destaques */
--store-primary-dark: #7a2800   /* hover dos botões */
--store-surface: #fcf9f5        /* fundo geral */
--store-surface-low: #f6f3ef    /* fundo de cards, seções alternadas */
--store-on-surface: #1c1c1a     /* texto principal */
--store-on-surface-variant: #5a4139  /* texto secundário/muted */
--store-outline: #e2bfb4        /* bordas */
--store-tertiary: #ffdcbd       /* badge, destaques suaves */
```

Gradiente de texto (headline hero):
```css
background: linear-gradient(135deg, #a53600, #d4a574);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Tipografia

Plus Jakarta Sans (já carregada via Vuetify plugin — `@/plugins/vuetify.ts`).

| Elemento | Tamanho | Peso |
|----------|---------|------|
| H1 hero desktop | 3.25rem | 800 |
| H1 hero mobile | 2.25rem | 800 |
| H2 seções desktop | 2.5rem | 700 |
| H2 seções mobile | 1.75rem | 700 |
| H3 cards | 1.25rem | 700 |
| Body | 1rem | 400 |
| Body muted | 1rem | 400, opacity 0.7 |
| Badge/label | 0.8rem | 600 |

---

## Layout geral

```
max-width: 1200px
margin: 0 auto
padding: 0 24px (desktop) / 0 16px (mobile)
```

Breakpoint: `@media (max-width: 960px)` para mobile.

---

## R1 — Navbar

```
position: fixed; top: 0; left: 0; right: 0; z-index: 100
height: 72px (desktop) / 60px (mobile)
background: rgba(252, 249, 245, 0.88)
backdrop-filter: blur(12px)
border-bottom: 1px solid var(--store-outline) com 40% opacidade
```

Scroll: classe `.navbar--scrolled` adicionada via `window.addEventListener('scroll')` no `onMounted`.

```css
.navbar--scrolled {
  box-shadow: 0 4px 20px rgba(90, 65, 57, 0.08);
}
```

Mobile drawer: `v-navigation-drawer` temporário, abre ao clicar no hamburger (`mdi-menu`).

Botão "Criar minha loja" na navbar:
```css
background: var(--store-primary)
color: white
border-radius: 9999px
padding: 10px 20px
font-weight: 600
```

---

## R2 — Hero

Layout desktop: `display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center`.
Layout mobile: coluna única, visual abaixo do conteúdo.

**Badge:**
```css
display: inline-block
background: var(--store-tertiary)
color: var(--store-on-surface)
border-radius: 9999px
padding: 6px 16px
font-size: 0.85rem
font-weight: 600
```

**Botão CTA hero:**
```css
background: var(--store-primary)
color: white
border-radius: 9999px
padding: 16px 36px
font-size: 1.1rem
font-weight: 700
transition: transform 0.2s, box-shadow 0.2s
```
Hover: `transform: translateY(-2px)`.

**Sub-CTA:**
```
✓ 15 dias grátis · Sem cartão de crédito
font-size: 0.875rem, color: var(--store-on-surface-variant)
```

**Social proof (avatares):**
```css
.avatars img {
  width: 36px; height: 36px
  border-radius: 50%
  border: 2px solid var(--store-surface)
  margin-left: -10px
}
.avatars img:first-child { margin-left: 0 }
```

**Mockup de browser:**
```css
border-radius: 16px
border: 8px solid white
box-shadow: 0 20px 40px rgba(90, 65, 57, 0.12)
overflow: hidden
```

Barra do browser:
```
fundo branco, 3 dots coloridos (vermelho/amarelo/verde), URL pill cinza
```

Floating card animado (bounce):
```css
position: absolute; bottom: -16px; left: -24px
background: white
border-radius: 14px
padding: 14px 18px
box-shadow: 0 8px 24px rgba(90, 65, 57, 0.12)
display: flex; align-items: center; gap: 12px
animation: bounce 4s ease-in-out infinite
```

---

## R3 — Como Funciona

Fundo: `var(--store-surface-low)`.
Grid: `repeat(3, 1fr)` desktop / `1fr` mobile.

**Step card:**
```css
background: var(--store-surface)
border-radius: 20px
padding: 40px 28px
border: 1px solid var(--store-outline)
position: relative
text-align: center
transition: transform 0.2s, box-shadow 0.2s
```
Hover: `transform: translateY(-6px)`.

**Número do passo:**
```css
position: absolute; top: -20px; left: 28px
width: 44px; height: 44px
background: var(--store-primary)
color: white
border-radius: 50%
border: 4px solid var(--store-surface-low)
font-size: 1.25rem; font-weight: 700
```

**Ícone:**
```css
font-size: 3rem (v-icon size="48")
color: var(--store-primary)
margin-bottom: 20px
```

Animação: classe `.fade-in-up` com `transition-delay` escalonado via CSS custom property `--delay`.

---

## R4 — Vantagens

Fundo: `var(--store-surface)`.
Grid: `1fr 1fr` desktop / `1fr` mobile (imagem acima).

**Imagem:**
```css
border-radius: 20px
overflow: hidden
box-shadow: 0 20px 40px rgba(90, 65, 57, 0.1)
```

**Floating card de notificação:**
```css
position: absolute; top: 24px; right: -16px
background: white
border-radius: 12px
padding: 12px 16px
box-shadow: 0 8px 24px rgba(90, 65, 57, 0.1)
display: flex; align-items: center; gap: 10px
font-size: 0.875rem; font-weight: 600
```
Ícone: `mdi-check-circle` cor `#27C93F`.

**Lista de features:**
```css
.feature-item {
  display: flex; gap: 16px; align-items: flex-start
}
.feature-icon {
  width: 36px; height: 36px
  background: var(--store-tertiary)
  color: var(--store-primary)
  border-radius: 50%
  flex-shrink: 0
}
```

---

## R5 — Exemplo da Vitrine

Fundo: `var(--store-surface-low)`.

**Mockups:**
```css
.mockup-wrapper {
  display: flex; gap: 32px; align-items: flex-end; justify-content: center
}
/* mobile: flex-direction: column; align-items: center */

.mockup-phone {
  width: 200px
  border-radius: 28px
  border: 6px solid #1c1c1a
  box-shadow: 0 20px 40px rgba(0,0,0,0.15)
  overflow: hidden
}

.mockup-desktop {
  width: 480px
  border-radius: 12px
  border: 8px solid white
  box-shadow: 0 20px 40px rgba(90, 65, 57, 0.12)
  overflow: hidden
}
/* mobile: width: 100%; max-width: 320px */
```

Imagens placeholder: Unsplash (mesma foto de bolo do site base).

---

## R6 — Preços

Fundo: `var(--store-surface)`.
Grid: `1fr 1fr` desktop / `1fr` mobile.

**Card de plano:**
```css
border-radius: 20px
padding: 36px 28px
border: 2px solid var(--store-outline)
background: var(--store-surface)
```

**Card anual (destaque):**
```css
border-color: var(--store-primary)
background: var(--store-surface-low)
position: relative /* para o badge */
```

**Badge "Mais popular":**
```css
position: absolute; top: -14px; left: 50%; transform: translateX(-50%)
background: var(--store-primary)
color: white
border-radius: 9999px
padding: 4px 16px
font-size: 0.75rem; font-weight: 700
```

**Preço:**
```css
.price-value { font-size: 2.5rem; font-weight: 800; color: var(--store-primary) }
.price-period { font-size: 1rem; color: var(--store-on-surface-variant) }
.price-monthly { font-size: 0.85rem; color: var(--store-on-surface-variant) }
```

**Item da lista:**
```
mdi-check-circle-outline (cor: store-primary, size: 18) + texto
```

**Botão CTA do card:**
```css
/* mensal: outlined */
border: 2px solid var(--store-primary)
color: var(--store-primary)
background: transparent

/* anual: filled */
background: var(--store-primary)
color: white
```
Ambos: `border-radius: 9999px; padding: 14px; width: 100%; font-weight: 700`.

---

## R7 — CTA Final

Fundo:
```css
background: linear-gradient(135deg, var(--store-surface-low) 0%, var(--store-tertiary) 100%)
```

**Formulário inline (desktop):**
```css
display: flex
background: white
border-radius: 9999px
padding: 6px
box-shadow: 0 4px 20px rgba(90, 65, 57, 0.1)
border: 1px solid var(--store-outline)
```

**Prefixo:**
```css
color: var(--store-on-surface-variant)
font-size: 0.9rem
padding: 0 8px 0 20px
white-space: nowrap
```

**Input:**
```css
flex: 1; border: none; outline: none
font-family: inherit; font-size: 1rem
background: transparent
```

**Mobile:** formulário em coluna (input + botão empilhados).

**Validação:**
```ts
const slugError = computed(() => {
  if (!slugInput.value) return ''
  return /^[a-z0-9-]+$/.test(slugInput.value) ? '' : 'Apenas letras minúsculas, números e hífens'
})
```

**Submit:**
```ts
function submitSlug(): void {
  if (slugError.value || !slugInput.value) return
  router.push(`/cadastro?slug=${slugInput.value}`)
}
```

---

## R8 — Footer

Fundo: `var(--store-surface)`.
Border-top: `1px solid var(--store-outline)`.

Layout desktop: `display: flex; justify-content: space-between`.
Mobile: `flex-direction: column; gap: 32px`.

---

## Animações de scroll

Composable inline no script setup (sem arquivo separado — página única):

```ts
function useScrollAnimation(): void {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
  })
}
```

Classes CSS:
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
[style*="--delay"] {
  transition-delay: calc(var(--delay, 0) * 0.15s);
}
```

---

## Scroll da navbar

```ts
const navScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    navScrolled.value = window.scrollY > 50
  })
})
```

---

## Navegação mobile (drawer)

```ts
const drawerOpen = ref(false)
```

`v-navigation-drawer` com `v-model="drawerOpen"` e `temporary`. Itens: links de âncora + botões de ação.

---

## Arquivo a modificar

| Arquivo | Ação |
|---------|------|
| `frontend/src/views/HomeView.vue` | Substituir completamente |
| `frontend/src/router/index.ts` | Sem alteração — rota `/` já aponta para `HomeView` |
| `frontend/src/stores/platform/usePlatformStore.ts` | Sem alteração |
| `frontend/src/services/public/publicPlatformService.ts` | Sem alteração |

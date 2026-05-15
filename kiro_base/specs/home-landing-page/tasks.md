# Tasks — Home / Landing Page

## Task 1 — Estrutura base e Navbar

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Substituir o conteúdo atual do `HomeView.vue` pela estrutura base da landing page.
2. Implementar a Navbar:
   - Logo (`mdi-cake-variant` + "Forizi Confeitaria")
   - Links de âncora desktop: "Como Funciona", "Vantagens", "Preços", "Exemplo"
   - Botões desktop: "Entrar" (outlined → `/login`) + "Criar minha loja" (primary → `/cadastro`)
   - Hamburger mobile (`mdi-menu`) que abre `v-navigation-drawer` temporário com os mesmos itens
   - Comportamento de scroll: `navScrolled` ref + `window.addEventListener('scroll')` no `onMounted` → classe `.navbar--scrolled` adiciona sombra
   - `position: fixed`, `z-index: 100`, `backdrop-filter: blur`
3. Adicionar `padding-top` no primeiro elemento de conteúdo para compensar a navbar fixa.
4. Implementar o composable de animação de scroll inline (`useScrollAnimation`) com `IntersectionObserver`.

**Critério de aceite:**
- Navbar fixa e funcional em mobile e desktop.
- Drawer mobile abre e fecha corretamente.
- Links de âncora funcionam (scroll suave via `scroll-behavior: smooth` no CSS global ou `html`).
- Sombra aparece ao rolar.

---

## Task 2 — Seção Hero

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar a seção hero com layout 2 colunas no desktop, 1 coluna no mobile.
2. Badge "Feito especialmente para confeiteiras".
3. Headline com gradiente na palavra "delícias".
4. Subtítulo, CTA primário (→ `/cadastro`), sub-CTA com "15 dias grátis".
5. Social proof: 3 avatares empilhados (imagens Unsplash) + texto "+500 confeiteiras já usam".
6. Mockup de browser:
   - Barra com 3 dots coloridos + URL pill
   - Imagem de bolo (Unsplash)
   - Floating card com animação `bounce`: "Novo Pedido! R$ 145,90 PIX" + ícone `mdi-cash`
7. Blob de fundo decorativo (gradiente radial).
8. Aplicar classe `animate-on-scroll` no mockup.

**Critério de aceite:**
- Layout 2 colunas no desktop, empilhado no mobile.
- Gradiente no texto funciona.
- Floating card anima continuamente.
- CTA navega para `/cadastro`.

---

## Task 3 — Seção Como Funciona

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar seção com `id="como-funciona"`.
2. Título com destaque na palavra "bolo".
3. Grid de 3 cards com `--delay: 1/2/3` para animação escalonada:
   - Card 1: `mdi-storefront-outline` — "Monte sua vitrine"
   - Card 2: `mdi-share-variant-outline` — "Envie seu Link"
   - Card 3: `mdi-cash-multiple` — "Receba Pedidos"
4. Cada card com número absoluto no topo-esquerdo.
5. Aplicar classe `animate-on-scroll` em cada card.
6. Grid: 3 colunas desktop / 1 coluna mobile.

**Critério de aceite:**
- Cards animam ao entrar no viewport com delay escalonado.
- Grid responsivo correto.
- Hover eleva o card.

---

## Task 4 — Seção Vantagens

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar seção com `id="beneficios"`.
2. Layout 2 colunas desktop (imagem esquerda, conteúdo direita) / 1 coluna mobile (imagem acima).
3. Imagem com `border-radius` e sombra + floating card de notificação posicionado absolutamente:
   - Ícone `mdi-check-circle` verde + "Venda de Bolo de Pote Confirmada!"
4. Título com gradiente em "negócio".
5. 3 itens de feature com ícone `mdi-check-circle-outline` (cor `--store-primary`) + título + descrição.
6. Aplicar `animate-on-scroll` na imagem (fade-in-left) e no conteúdo (fade-in-right).

**Critério de aceite:**
- Layout responsivo correto.
- Floating card visível e bem posicionado.
- Animações de entrada funcionam.

---

## Task 5 — Seção Exemplo da Vitrine

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar seção com `id="vitrine"`.
2. Título e subtítulo.
3. Dois mockups lado a lado (desktop) / empilhados (mobile):
   - Mockup celular: borda escura arredondada, imagem de vitrine (Unsplash)
   - Mockup desktop/notebook: borda branca com sombra, imagem de vitrine (Unsplash)
4. Legenda: "Vitrine responsiva — funciona em qualquer dispositivo".
5. Aplicar `animate-on-scroll` nos mockups.

**Critério de aceite:**
- Mockups visualmente distintos (celular vs notebook).
- Layout responsivo: lado a lado no desktop, empilhado no mobile.

---

## Task 6 — Seção Preços

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar seção com `id="precos"`. Adicionar "Preços" nos links da navbar (Task 1).
2. Título e subtítulo.
3. Grid 2 colunas desktop / 1 coluna mobile.
4. Card Mensal:
   - Preço: R$ 14,90/mês
   - 4 itens com `mdi-check-circle-outline`
   - Botão outlined "Começar grátis" → `/cadastro`
5. Card Anual (destaque):
   - Badge "Mais popular" posicionado absolutamente no topo
   - Preço: R$ 149,90/ano + "~R$ 12,49/mês"
   - Badge de economia: "Economize R$ 28,90"
   - Mesmos 4 itens
   - Botão filled "Começar grátis" → `/cadastro`
6. Nota abaixo: "Pagamento via Mercado Pago. Cancele quando quiser."
7. Aplicar `animate-on-scroll` nos cards.

**Critério de aceite:**
- Card anual visualmente destacado (borda colorida, badge).
- Ambos os CTAs navegam para `/cadastro`.
- Layout responsivo correto.

---

## Task 7 — Seção CTA Final

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar seção com `id="cadastro"`.
2. Fundo com gradiente suave.
3. Título e subtítulo.
4. Formulário com:
   - `slugInput` ref
   - `slugError` computed (validação `/^[a-z0-9-]+$/`)
   - Prefixo `forizi.com.br/` + input + botão "Criar minha loja"
   - Erro inline abaixo do campo se formato inválido
   - `submitSlug()`: navega para `/cadastro?slug=valor` se válido
5. Desktop: formulário inline (pill com input + botão dentro).
6. Mobile: input e botão empilhados.
7. Nota de termos abaixo.

**Critério de aceite:**
- Validação funciona e exibe erro inline.
- Submit navega para `/cadastro?slug=valor`.
- Layout responsivo correto.

---

## Task 8 — Footer

**Arquivo:** `frontend/src/views/HomeView.vue`

**O que fazer:**
1. Implementar footer com logo + tagline.
2. Dois grupos de links: "Plataforma" e "Ajuda" (links sem destino real por enquanto — `href="#"`).
3. Copyright "© 2026 Forizi. Todos os direitos reservados."
4. Mobile: colunas empilhadas.

**Critério de aceite:**
- Footer visualmente consistente com o restante da página.
- Responsivo.

---

## Task 9 — Atualizar router para remover dependência do platformStore

**Arquivo:** `frontend/src/router/index.ts`

**O que fazer:**
1. A rota `/` continua apontando para `HomeView` — sem alteração.
2. Verificar se o `usePlatformStore` ainda é importado em algum lugar que precise ser limpo. Se `HomeView` não usa mais o store, o import pode ser removido da view.

**Critério de aceite:**
- Nenhum erro de console relacionado ao platformStore na rota `/`.
- `HomeView` não importa `usePlatformStore`.

---

## Ordem de execução

```
Task 1 (base + navbar)
  → Task 2 (hero)
  → Task 3 (como funciona)
  → Task 4 (vantagens)
  → Task 5 (vitrine)
  → Task 6 (preços)
  → Task 7 (CTA final)
  → Task 8 (footer)
  → Task 9 (limpeza)
```

Execução sequencial — cada task adiciona uma seção ao mesmo arquivo.

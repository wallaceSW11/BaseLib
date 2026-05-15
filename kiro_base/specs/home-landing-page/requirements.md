# Requisitos — Home / Landing Page

## Contexto

A rota `/` deixa de ser lista de lojas e passa a ser a **página de vendas da plataforma Forizi Confeitaria**. Público-alvo: a boleira (dona Maria) que ainda não conhece o produto. Objetivo: ela chega, entende, vê o preço, e clica em "Criar minha loja".

Linguagem: sem termos técnicos. Focado no benefício real (vender mais, sem confusão no WhatsApp).

Referência de conteúdo e estrutura: `site_base/index.html` + `site_base/styles.css`.

Stack: Vue 3 + Vuetify 3 + MDI icons + Plus Jakarta Sans + variáveis CSS de `@/styles/store.css`.

---

## R1 — Navbar

- Logo: `mdi-cake-variant` + "Forizi Confeitaria"
- Links desktop: "Como Funciona", "Vantagens", "Preços", "Exemplo"
- Ações desktop: "Entrar" (outlined, `/login`) + "Criar minha loja" (primary, `/cadastro`)
- Mobile: ocultar links e ações, exibir hamburger que abre drawer com os mesmos itens
- Scroll: adicionar sombra ao rolar a página
- Navbar fixa no topo

## R2 — Hero

- Badge: "Feito especialmente para confeiteiras"
- Headline: "A vitrine perfeita para as suas delícias." (palavra "delícias" com gradiente)
- Subtítulo: "Chega de anotar pedidos no papel ou perder vendas no WhatsApp. Crie sua loja online em minutos, envie seu link e receba pagamentos via PIX automaticamente."
- CTA: "Começar Gratuitamente" com ícone de seta → `/cadastro`
- Sub-CTA: "15 dias grátis · Sem cartão de crédito"
- Social proof: avatares empilhados + "+500 confeiteiras já usam"
- Visual direito (desktop): mockup de browser com imagem da vitrine + floating card animado "Novo Pedido! R$ 145,90 PIX"
- Mobile: mockup abaixo do conteúdo

## R3 — Como Funciona

- Título: "Simples como bater um bolo"
- Subtítulo: "Sem complicação. Você foca em cozinhar, a Forizi cuida das vendas."
- 3 cards com número, ícone MDI, título e descrição:
  1. `mdi-storefront-outline` — "Monte sua vitrine"
  2. `mdi-share-variant-outline` — "Envie seu Link"
  3. `mdi-cash-multiple` — "Receba Pedidos"
- Animação fade-in-up ao entrar no viewport (IntersectionObserver)

## R4 — Vantagens

- Imagem à esquerda + floating card de notificação
- Conteúdo à direita: título + 3 itens com ícone `mdi-check-circle-outline`:
  1. Fim da confusão no WhatsApp
  2. Pagamento Automático via PIX
  3. Controle de Entregas
- Mobile: imagem acima, conteúdo abaixo

## R5 — Exemplo da Vitrine

- Título: "Veja como fica a sua loja"
- Subtítulo: "Seus clientes acessam pelo celular ou computador, escolhem os produtos e pagam na hora."
- Dois mockups: celular (StoreView mobile) + notebook (StoreView desktop)
- Imagens: Unsplash por enquanto, substituir por prints reais depois
- Legenda: "Vitrine responsiva — funciona em qualquer dispositivo"

## R6 — Preços

- Título: "Planos simples, sem surpresas"
- Subtítulo: "Comece grátis por 15 dias. Sem cartão de crédito."
- 2 cards:

  **Mensal**
  - R$ 14,90/mês
  - Itens: Vitrine online completa, Pedidos ilimitados, Pagamento via PIX, Suporte por e-mail
  - CTA: "Começar grátis" → `/cadastro`

  **Anual** (badge "Mais popular")
  - R$ 149,90/ano (~R$ 12,49/mês)
  - Badge de economia: "Economize R$ 28,90"
  - Mesmos itens
  - CTA: "Começar grátis" → `/cadastro`

- Nota: "Pagamento via Mercado Pago. Cancele quando quiser."
- Ambos os CTAs vão para `/cadastro` — seleção de plano acontece no onboarding (fora do escopo)

## R7 — CTA Final

- Fundo com gradiente suave (tons terrosos)
- Título: "Preparada para lotar sua agenda de encomendas?"
- Formulário inline: campo com prefixo `forizi.com.br/` + botão "Criar minha loja"
- Ao submeter: navega para `/cadastro?slug=valor-digitado`
- Validação: apenas letras minúsculas, números e hífens (`/^[a-z0-9-]+$/`)
- Erro inline se formato inválido
- Nota de termos abaixo

## R8 — Footer

- Logo + tagline
- Links: Plataforma (Recursos, Preços, Exemplos) + Ajuda (Central de Ajuda, Contato, Tutoriais)
- Copyright 2026
- Mobile: colunas empilhadas

---

## Requisitos técnicos

- Componente único: `frontend/src/views/HomeView.vue` (substituir o atual)
- Sem store, sem chamada à API — página estática
- Animações de scroll: composable `useScrollAnimation` ou diretiva Vue com IntersectionObserver
- Responsivo: mobile-first, breakpoint 960px (igual ao restante do projeto)
- Fontes: Plus Jakarta Sans (já carregada via Vuetify plugin)
- Cores: usar variáveis `--store-*` de `@/styles/store.css` para manter identidade
- Imagens externas (Unsplash) por enquanto — serão substituídas por assets locais
- Nenhuma dependência nova — apenas o que já existe no projeto

## Fora de escopo

- Integração com backend (preços são estáticos)
- Seleção de plano no cadastro
- Página de termos de uso (link apenas)
- Troca de imagens por assets reais

# Requisitos — Layout Responsivo Painel da Boleira

## Contexto

O painel admin (`/:slug/admin/*`) foi construído para desktop com sidebar fixa de 260px. No mobile o layout quebra completamente: a sidebar ocupa a tela toda e o conteúdo fica inacessível.

Breakpoint de referência: `isMobile` da lib (`useBreakpoint`) retorna `true` para `smAndDown` (< 960px).

**Princípio:** desktop não muda. Mobile recebe navegação por drawer + bottom nav simplificado.

---

## R1 — BakeryAdminSidebar: responsivo

**Atual:** `v-navigation-drawer permanent` — sempre visível, sempre ocupa 260px.

**Esperado no mobile (< 960px):**
- Sidebar vira drawer temporário (`temporary`) controlado por prop `modelValue` (v-model do pai)
- Fecha ao navegar para qualquer rota
- Abre via botão hamburger na topbar

**Esperado no desktop (≥ 960px):**
- Sidebar permanente, sem alteração do comportamento atual

**Implementação:**
- Receber prop `modelValue: boolean` + emitir `update:modelValue`
- Usar `isMobile` da lib para alternar entre `permanent` e `temporary` no `v-navigation-drawer`
- Ao clicar em qualquer item de menu: se mobile, fechar o drawer

---

## R2 — BakeryAdminLayout: topbar mobile + controle do drawer

**Atual:** `v-main` com `padding-left: 260px` fixo via CSS scoped.

**Esperado no mobile:**
- Topbar fixa no topo com: hamburger (`mdi-menu`) + logo "Forizi Confeitaria" + ícone de tema
- `padding-left: 0` no mobile
- `padding-top` suficiente para não sobrepor a topbar

**Esperado no desktop:**
- Sem topbar adicional (sidebar já tem o header)
- `padding-left: 260px` mantido

**Implementação:**
- `drawerOpen` ref controlado no layout
- Topbar renderizada apenas com `v-if="isMobile"`
- CSS via classes condicionais (sem duplicar lógica)

---

## R3 — OrderListView: adaptação mobile

**Atual:** tabela com muitas colunas, toolbar com vários campos lado a lado, `height: calc(100dvh - 260px)` hardcoded.

**Esperado no mobile:**
- Toolbar: busca em linha cheia + botão de filtro (sem campos de data visíveis — entram no modal de filtro)
- Tabela: mostrar apenas colunas essenciais (Pedido, Cliente, Status, Ações) — ocultar Valor, Data, Tipo, Pagamento
- Altura da tabela: `calc(100dvh - Xpx)` ajustado para mobile (topbar diferente)
- Botão de atualizar mantido

**Critério de aceite:**
- Mobile: tabela legível sem scroll horizontal
- Desktop: sem alteração

---

## R4 — ProductListView: adaptação mobile

**Atual:** tabela com 8 colunas, toolbar com busca + toggle de status + botão novo.

**Esperado no mobile:**
- Toolbar: botão "Novo" + busca em linha cheia (toggle de status vai para menu ou filtro)
- Tabela: mostrar apenas colunas essenciais (Imagem, Nome, Preço, Status, Ações) — ocultar estoque detalhado
- Altura ajustada para mobile

**Critério de aceite:**
- Mobile: tabela legível sem scroll horizontal
- Desktop: sem alteração

---

## R5 — Views de formulário/detalhe: padding mobile

Views que usam `v-container fluid class="pa-8"`:
- `OrderDetailView.vue`
- `ProductFormView.vue`

**Esperado no mobile:** reduzir padding para `pa-4` ou usar classes responsivas do Vuetify (`pa-4 pa-md-8`).

---

## Arquivos envolvidos

```
frontend/src/views/bakery/BakeryAdminLayout.vue       ← R2
frontend/src/components/bakery/BakeryAdminSidebar.vue ← R1
frontend/src/views/bakery/OrderListView.vue           ← R3
frontend/src/views/bakery/ProductListView.vue         ← R4
frontend/src/views/bakery/OrderDetailView.vue         ← R5
frontend/src/views/bakery/ProductFormView.vue         ← R5
```

## Fora de escopo

- Alteração de lógica de negócio (pedidos, produtos, estoque)
- Novas features no painel
- Views de configuração (Perfil, Pagamento, Entrega) — já usam `v-container` com `v-row/v-col` responsivos nativamente

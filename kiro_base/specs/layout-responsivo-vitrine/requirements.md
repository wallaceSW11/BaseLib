# Layout Responsivo — Visão do Cliente (Vitrine)

## Contexto

A vitrine (`/:slug/*`) foi construída mobile-first e funciona bem em telas pequenas. O objetivo desta spec é adaptar o layout para desktop **sem alterar nada do comportamento mobile**, reaproveitando ao máximo o código existente.

Breakpoint de referência: `isMobile` da lib (`useBreakpoint`) retorna `true` para `smAndDown` (< 960px). Tudo abaixo de 960px = mobile (sem alteração). Tudo acima = desktop (novo comportamento).

---

## Requisitos

### R1 — StoreLayout: sidebar de navegação no desktop

**Atual:** topbar fixa (52px) + bottom nav fixa (64px) em todas as telas.

**Esperado no desktop (> 960px):**
- A topbar permanece, mas ganha largura máxima centralizada junto com o conteúdo.
- O bottom nav **desaparece**.
- Uma sidebar lateral fixa aparece à esquerda com os mesmos itens de navegação (Início, Carrinho, Pedidos, Perfil) + o item "Mais" vira ações inline (tema, outras lojas).
- O conteúdo principal fica centralizado com `max-width: 1200px` e margem automática.
- A sidebar tem largura fixa de 240px.

**Mobile (≤ 960px):** sem alteração — topbar + bottom nav como hoje.

**Critérios de aceite:**
- `isMobile` da lib controla qual navegação é exibida.
- Nenhuma prop ou lógica de negócio é duplicada.
- A sidebar desktop exibe o badge de quantidade do carrinho igual ao bottom nav mobile.
- O item ativo é destacado da mesma forma nos dois contextos.

---

### R2 — StoreLayout: topbar responsiva

**Atual:** topbar ocupa 100% da largura com padding de 16px.

**Esperado no desktop:**
- A topbar se alinha com o conteúdo centralizado (respeita o `max-width` e a sidebar).
- O nome da loja e o botão de compartilhar continuam presentes.

**Mobile:** sem alteração.

---

### R3 — StoreView: grid de produtos responsivo

**Atual:** `grid-template-columns: 1fr 1fr` fixo (sempre 2 colunas).

**Esperado:**
- Mobile (≤ 960px): 2 colunas (sem alteração).
- Desktop (> 960px): 3 ou 4 colunas, dependendo do espaço disponível. Usar `repeat(auto-fill, minmax(200px, 1fr))`.

**Critérios de aceite:**
- Apenas a regra CSS do grid muda — nenhuma lógica Vue é alterada.
- Cards mantêm proporção e visual idênticos.

---

### R4 — Views internas da vitrine: largura máxima no desktop

As views abaixo têm conteúdo que deve ficar centralizado e com largura máxima no desktop, sem parecer "esticado":

- `CartView.vue` — já tem `max-width: 480px` no `.cart-view`, mas precisa ser revisado para desktop (pode ir até 640px).
- `ProductDetailView.vue` — conteúdo deve ter `max-width: 720px` centralizado.
- `CustomerOrdersView.vue` — lista de pedidos com `max-width: 720px` centralizado.
- Demais views da vitrine (`CheckoutView`, `PaymentView`, `OrderTrackingView`, `CustomerProfileView`, `CustomerLoginView`, `CustomerRegisterView`) — aplicar `max-width: 640px` centralizado onde ainda não existe.

**Critérios de aceite:**
- Nenhuma view fica com conteúdo "esticado" em telas largas.
- O centramento é feito via CSS (`margin: 0 auto`) sem lógica Vue.
- Mobile não é afetado (os `max-width` já funcionam em mobile por serem menores que a tela).

---

### R5 — HomeView: redesign da página de lista de lojas

**Atual:** lista simples de cards com topbar mínima. Funcional mas sem identidade visual.

**Esperado:**
- **Hero section:** logo/marca Forizi com tagline curta, fundo com cor da identidade do projeto (tons terrosos — `#a53600` / `#f6f3ef`).
- **Barra de busca:** campo de texto para filtrar confeitarias por nome ou cidade, acima da lista.
- **Grid de cards:** no desktop, 2–3 colunas. No mobile, 1 coluna (lista como hoje).
- **Card enriquecido:** além do que já existe (logo, nome, cidade, badges), adicionar uma linha de descrição curta se disponível.
- **CTA de cadastro:** manter o bloco existente, mas com visual mais destacado.
- **Topbar:** manter o link para `/login`, adicionar link para `/cadastro` como botão secundário.

**Critérios de aceite:**
- A busca filtra localmente (sem nova chamada à API).
- O `usePlatformStore` não é alterado — apenas a view consome o estado existente.
- Mobile e desktop compartilham o mesmo componente, com layout adaptado via CSS/breakpoint.
- O campo `description` no `PublicBakery` pode não existir ainda — tratar como opcional.

---

### R6 — Variáveis CSS da vitrine disponíveis globalmente

**Atual:** as variáveis `--store-*` (ex: `--store-primary`, `--store-surface`) são definidas em algum arquivo global ou no `StoreLayout`.

**Verificar:** se as variáveis estão disponíveis fora do `StoreLayout` (ex: na `HomeView`). Se não estiverem, extrair para um arquivo CSS global ou para o `App.vue`.

**Critérios de aceite:**
- `HomeView` pode usar as mesmas variáveis de cor sem duplicar definições.
- Nenhuma cor é hardcoded nas views.

---

## Arquivos envolvidos

```
frontend/src/views/store/StoreLayout.vue          ← R1, R2
frontend/src/views/store/StoreView.vue            ← R3
frontend/src/views/store/CartView.vue             ← R4
frontend/src/views/store/ProductDetailView.vue    ← R4
frontend/src/views/store/CustomerOrdersView.vue   ← R4
frontend/src/views/store/CheckoutView.vue         ← R4
frontend/src/views/store/PaymentView.vue          ← R4
frontend/src/views/store/OrderTrackingView.vue    ← R4
frontend/src/views/store/CustomerProfileView.vue  ← R4
frontend/src/views/store/CustomerLoginView.vue    ← R4
frontend/src/views/store/CustomerRegisterView.vue ← R4
frontend/src/views/HomeView.vue                   ← R5
frontend/src/assets/ ou App.vue                   ← R6
```

## Fora de escopo

- Painel da boleira (`/:slug/admin/*`) — spec separada.
- Qualquer alteração de backend.
- Criação de novos endpoints ou stores.
- Alteração de comportamento funcional (fluxo de pedido, pagamento, etc.).

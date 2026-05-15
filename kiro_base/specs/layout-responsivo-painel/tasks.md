# Tasks — Layout Responsivo Painel da Boleira

## Task 1 — BakeryAdminSidebar: suporte a drawer temporário no mobile

**Arquivo:** `frontend/src/components/bakery/BakeryAdminSidebar.vue`

**O que fazer:**
1. Importar `useBreakpoint` da lib e desestruturar `isMobile`
2. Adicionar `defineProps<{ modelValue?: boolean }>()` e `defineEmits<{ 'update:modelValue': [value: boolean] }>()`
3. No `v-navigation-drawer`:
   - `:model-value="isMobile ? modelValue : true"`
   - `:permanent="!isMobile"`
   - `:temporary="isMobile"`
   - `@update:model-value="emit('update:modelValue', $event)"`
4. Na função `navigate(path)`: após `router.push(path)`, adicionar `if (isMobile.value) emit('update:modelValue', false)`
5. Fazer o mesmo para cliques nos itens filhos (grupo Cadastros)

**Critério de aceite:**
- Desktop: sidebar permanente, sem alteração visual
- Mobile: sidebar fecha ao navegar, abre via prop externa

---

## Task 2 — BakeryAdminLayout: topbar mobile + controle do drawer

**Arquivo:** `frontend/src/views/bakery/BakeryAdminLayout.vue`

**O que fazer:**
1. Importar `useBreakpoint` e `ThemeToggle` da lib
2. Adicionar `drawerOpen = ref(false)` e `isMobile` do `useBreakpoint()`
3. Adicionar `mainClass` computed: `isMobile ? 'bakery-main--mobile' : 'bakery-main'`
4. No template:
   - Adicionar topbar mobile com `v-if="isMobile"`: hamburger + título "Forizi Confeitaria" + `ThemeToggle`
   - Passar `v-model="drawerOpen"` para `BakeryAdminSidebar`
   - Usar `:class="mainClass"` no `v-main`
5. CSS:
   - `.bakery-main`: `padding-left: 260px` (mantido)
   - `.bakery-main--mobile`: `padding-left: 0; padding-top: 56px`
   - `.bakery-topbar-mobile`: `position: fixed; top: 0; left: 0; right: 0; height: 56px; z-index: 1005; background: rgb(var(--v-theme-surface)); border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); display: flex; align-items: center; padding: 0 8px; gap: 8px`
   - `.bakery-topbar-mobile__title`: `flex: 1; font-size: 1rem; font-weight: 700`

**Critério de aceite:**
- Mobile: topbar visível com hamburger funcional, conteúdo não sobreposto
- Desktop: sem alteração

---

## Task 3 — OrderListView: colunas e toolbar responsivos

**Arquivo:** `frontend/src/views/bakery/OrderListView.vue`

**O que fazer:**
1. Importar `useBreakpoint` da lib
2. Transformar `headers` de array estático para `computed` baseado em `isMobile`:
   - Mobile: apenas `data-table-expand`, `id`, `customerName`, `status`, `actions`
   - Desktop: manter todos os headers atuais
3. Toolbar mobile:
   - Ocultar campos de data (`dateFrom`, `dateTo`) com `v-if="!isMobile"`
   - Campo de busca ocupa `flex: 1` no mobile
   - Botão "Filtro" mantém apenas ícone no mobile (sem texto)
4. Ajustar altura da tabela com media query:
   ```css
   @media (max-width: 959px) {
     .orders-table :deep(.v-table__wrapper) {
       height: calc(100dvh - 200px);
     }
   }
   ```

**Critério de aceite:**
- Mobile: tabela sem scroll horizontal, toolbar compacta
- Desktop: sem alteração

---

## Task 4 — ProductListView: colunas e toolbar responsivos

**Arquivo:** `frontend/src/views/bakery/ProductListView.vue`

**O que fazer:**
1. Importar `useBreakpoint` da lib
2. Transformar `headers` de array estático para `computed` baseado em `isMobile`:
   - Mobile: apenas `imageUrl`, `name`, `price`, `active`, `actions`
   - Desktop: manter todos os headers atuais
3. Toolbar mobile:
   - `v-btn-toggle` de status oculto com `v-if="!isMobile"`
   - Campo de busca ocupa `flex: 1` no mobile
4. Ajustar altura da tabela com media query igual ao OrderListView

**Critério de aceite:**
- Mobile: tabela sem scroll horizontal, toolbar compacta
- Desktop: sem alteração

---

## Task 5 — OrderDetailView e ProductFormView: padding responsivo

**Arquivos:**
- `frontend/src/views/bakery/OrderDetailView.vue`
- `frontend/src/views/bakery/ProductFormView.vue`

**O que fazer:**
- Substituir `class="pa-8"` por `class="pa-4 pa-md-8"` no `v-container` de cada arquivo

**Critério de aceite:**
- Mobile: padding reduzido (16px)
- Desktop: padding mantido (32px)

---

## Ordem de execução

```
Task 1 (sidebar) → Task 2 (layout) → Tasks 3+4 (views, paralelas) → Task 5 (padding)
```

Task 1 deve ser feita antes de Task 2 pois o layout passa `v-model` para a sidebar.

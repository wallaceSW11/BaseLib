# Design — Layout Responsivo Painel da Boleira

## Breakpoint

`isMobile` da lib (`useBreakpoint`) — `smAndDown` (< 960px).

```ts
import { useBreakpoint } from '@wallacesw11/base-lib'
const { isMobile } = useBreakpoint()
```

---

## R1 — BakeryAdminSidebar

### Mudanças no template

```vue
<v-navigation-drawer
  :model-value="isMobile ? modelValue : true"
  :permanent="!isMobile"
  :temporary="isMobile"
  width="260"
  class="bakery-sidebar"
  @update:model-value="emit('update:modelValue', $event)"
>
```

Ao navegar (qualquer item de menu), fechar o drawer se mobile:

```ts
function navigate(path: string): void {
  router.push(path)
  if (isMobile.value) emit('update:modelValue', false)
}
```

### Props e emits

```ts
const props = defineProps<{ modelValue?: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
```

---

## R2 — BakeryAdminLayout

### Template

```vue
<template>
  <div>
    <!-- Topbar mobile -->
    <div v-if="isMobile" class="bakery-topbar-mobile">
      <v-btn icon variant="text" @click="drawerOpen = !drawerOpen">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <span class="bakery-topbar-mobile__title">Forizi Confeitaria</span>
      <ThemeToggle />
    </div>

    <BakeryAdminSidebar v-model="drawerOpen" />

    <v-main :class="mainClass">
      <router-view />
    </v-main>
  </div>
</template>
```

### Script

```ts
import { ref, computed } from 'vue'
import { useBreakpoint, ThemeToggle } from '@wallacesw11/base-lib'

const { isMobile } = useBreakpoint()
const drawerOpen = ref(false)

const mainClass = computed(() => isMobile.value ? 'bakery-main--mobile' : 'bakery-main')
```

### CSS

```css
.bakery-main {
  padding-left: 260px;
}

.bakery-main--mobile {
  padding-left: 0;
  padding-top: 56px; /* altura da topbar mobile */
}

.bakery-topbar-mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: rgb(var(--v-theme-surface));
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  z-index: 1005; /* acima do drawer */
  gap: 8px;
}

.bakery-topbar-mobile__title {
  flex: 1;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

---

## R3 — OrderListView

### Colunas responsivas

Usar computed para headers baseado em `isMobile`:

```ts
const { isMobile } = useBreakpoint()

const headers = computed(() => {
  if (isMobile.value) {
    return [
      { title: '', key: 'data-table-expand', width: '48px' },
      { title: 'Pedido', key: 'id' },
      { title: 'Cliente', key: 'customerName' },
      { title: 'Status', key: 'status' },
      { title: 'Ações', key: 'actions', sortable: false, width: '60px' }
    ]
  }
  return [ /* headers completos atuais */ ]
})
```

### Toolbar mobile

```vue
<div class="orders-toolbar" :class="{ 'orders-toolbar--mobile': isMobile }">
  <v-text-field v-model="search" ... :class="isMobile ? 'flex-1' : 'orders-toolbar__search'" />
  <v-btn v-if="!isMobile" ... /> <!-- campos de data só no desktop -->
  <v-btn icon ... @click="orderStore.loadOrders()" /> <!-- refresh sempre -->
  <v-btn color="primary" variant="outlined" prepend-icon="mdi-filter-variant" @click="filterModalOpen = true">
    {{ isMobile ? '' : 'Filtro' }}
  </v-btn>
</div>
```

CSS mobile:
```css
.orders-toolbar--mobile {
  flex-wrap: wrap;
}
.orders-toolbar--mobile .flex-1 {
  flex: 1;
  min-width: 0;
}
```

### Altura da tabela

```css
.orders-table :deep(.v-table__wrapper) {
  overflow-y: auto;
  height: calc(100dvh - 260px); /* desktop */
}

@media (max-width: 959px) {
  .orders-table :deep(.v-table__wrapper) {
    height: calc(100dvh - 200px); /* mobile: topbar menor */
  }
}
```

---

## R4 — ProductListView

### Colunas responsivas

```ts
const headers = computed(() => {
  if (isMobile.value) {
    return [
      { title: 'Imagem', key: 'imageUrl', sortable: false, width: '60px' },
      { title: 'Nome', key: 'name' },
      { title: 'Preço', key: 'price', width: '100px' },
      { title: 'Status', key: 'active', sortable: false, width: '90px' },
      { title: 'Ações', key: 'actions', sortable: false, width: '80px' }
    ]
  }
  return [ /* headers completos atuais */ ]
})
```

### Toolbar mobile

```vue
<div class="products-toolbar" :class="{ 'products-toolbar--mobile': isMobile }">
  <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateModal">Novo</v-btn>
  <v-spacer v-if="!isMobile" />
  <v-text-field v-model="searchQuery" ... :class="isMobile ? 'flex-1' : 'products-toolbar__search'" />
  <v-btn-toggle v-if="!isMobile" v-model="statusFilter" ... /> <!-- só desktop -->
</div>
```

---

## R5 — Views de formulário/detalhe

Substituir `class="pa-8"` por `class="pa-4 pa-md-8"` nas views:
- `OrderDetailView.vue`
- `ProductFormView.vue`

Vuetify suporta breakpoint suffix nativamente: `pa-md-8` aplica `padding: 32px` apenas em `md` e acima.

---

## Arquivos a modificar

| Arquivo | Mudança |
|---------|---------|
| `BakeryAdminLayout.vue` | Topbar mobile, `drawerOpen`, `mainClass` computed, CSS responsivo |
| `BakeryAdminSidebar.vue` | Props `modelValue`, `isMobile`, `permanent`/`temporary`, fechar ao navegar |
| `OrderListView.vue` | `headers` computed, toolbar responsiva, altura da tabela |
| `ProductListView.vue` | `headers` computed, toolbar responsiva, altura da tabela |
| `OrderDetailView.vue` | `pa-4 pa-md-8` |
| `ProductFormView.vue` | `pa-4 pa-md-8` |

# @wallacesw11/base-lib

Reusable Vue 3 + TypeScript + Vuetify 3 component library.

Componentes e utilitários reutilizáveis para projetos Vue 3 com Vuetify.

## Installation

```bash
pnpm add @wallacesw11/base-lib
```

### Peer dependencies

Ensure your project has these installed:

```bash
pnpm add vue vuetify pinia axios maska
```

## Quick Setup

```ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import { setupLib, requiredVuetifyComponents } from '@wallacesw11/base-lib';
import '@wallacesw11/base-lib/style.css';

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({
  components: requiredVuetifyComponents,
});

app.use(pinia); // Must come before setupLib
app.use(vuetify);
setupLib(app); // Registers all components + global utilities
app.mount('#app');
```

### App.vue — Required global components

For notifications, confirm dialogs, and loading overlay to work, include these in your `App.vue`:

```vue
<template>
  <v-app>
    <router-view />

    <!-- Global utilities -->
    <FloatingNotify />
    <LoadingOverlay />
    <ConfirmDialog />
  </v-app>
</template>
```

## Components

### Inputs

```vue
<template>
  <MoneyField v-model="price" label="Preço" />
  <NumberField v-model="quantity" label="Quantidade" :decimal-places="0" />
  <EmailField v-model="email" label="E-mail" required />
  <PhoneField v-model="phone" label="Telefone" />
  <ZipCodeField v-model="cep" label="CEP" @zip-code-found="onAddress" />
  <FullAddress v-model="address" />
</template>
```

### Buttons

```vue
<template>
  <IconToolTip icon="mdi-pencil" tooltip="Editar" @click="edit" />
</template>
```

### Modals

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ModalBase } from '@wallacesw11/base-lib';
import type { ModalAction } from '@wallacesw11/base-lib';

const open = ref(false);

const actions: ModalAction[] = [
  { text: 'Salvar', color: 'primary', handler: () => { save(); open.value = false; } },
  { text: 'Cancelar', color: 'secondary', handler: () => open.value = false },
];
</script>

<template>
  <ModalBase v-model="open" title="Editar Produto" :actions="actions">
    <p>Conteúdo do modal</p>
  </ModalBase>
</template>
```

### Notifications

```vue
<script setup lang="ts">
import { notify } from '@wallacesw11/base-lib';

notify.success('Salvo', 'Produto salvo com sucesso');
notify.error('Erro', 'Falha ao salvar produto');
notify.warning('Atenção', 'Estoque baixo');
notify.info('Info', 'Produto atualizado');
</script>
```

### Confirm Dialog

```vue
<script setup lang="ts">
import { confirm } from '@wallacesw11/base-lib';

async function handleDelete() {
  const ok = await confirm.show('Excluir', 'Esta ação não pode ser desfeita.');
  if (ok) deleteItem();
}
</script>
```

### Loading Overlay

```vue
<script setup lang="ts">
import { loading } from '@wallacesw11/base-lib';

loading.show('Salvando...');
await doSomething();
loading.hide();
</script>
```

## Composables

```ts
import { useBreakpoint, useGlobals, useLoading } from '@wallacesw11/base-lib';

// Responsive breakpoints
const { isMobile, isMobileOrTablet } = useBreakpoint();

// Access global utilities inside setup
const { notify, loading, confirm } = useGlobals();

// Local loading state
const { isActive, message, show, hide } = useLoading();
```

## API (HTTP Client)

```ts
import api, { configureApi } from '@wallacesw11/base-lib/utils';

configureApi({ baseURL: 'https://api.example.com', timeout: 15000 });

const response = await api.get('/items');
```

## Package Entry Points

```ts
// Main — all components + composables + utilities
import { MoneyField, useBreakpoint, notify } from '@wallacesw11/base-lib';

// Components only (tree-shakeable)
import { MoneyField } from '@wallacesw11/base-lib/components';

// Composables only
import { useBreakpoint } from '@wallacesw11/base-lib/composables';

// Utilities only
import { notify, confirm, loading } from '@wallacesw11/base-lib/utils';

// Plugin (for manual registration)
import { globalsPlugin } from '@wallacesw11/base-lib/plugins';
```

## Development

```bash
pnpm dev             # watch mode build
pnpm build           # build + type declarations
pnpm lint            # eslint --fix
pnpm test            # vitest run
pnpm check           # lint + test
pnpm dev:playground  # visual test environment
```

## License

MIT

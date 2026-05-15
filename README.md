# @wallacesw11/base-lib

Reusable Vue 3 + TypeScript + Vuetify 3 component library.

## Installation

```bash
pnpm add @wallacesw11/base-lib
```

Peer dependencies (install in your project):

```bash
pnpm add vue vuetify pinia vue-i18n axios
```

## Setup

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

app.use(pinia);
app.use(vuetify);
setupLib(app);
app.mount('#app');
```

## Components

### Buttons

```vue
<template>
  <PrimaryButton text="Save" prepend-icon="mdi-content-save" @click="save" />
  <SecondaryButton text="Cancel" @click="cancel" />
  <TertiaryButton text="Delete" color="error" />
  <QuartenaryButton text="More" />
  <IconToolTip icon="mdi-pencil" tooltip="Edit" @click="edit" />
</template>
```

### Inputs

```vue
<template>
  <MoneyField v-model="price" label="Price" />
  <EmailField v-model="email" label="Email" required />
  <PhoneField v-model="phone" label="Phone" />
  <CepField v-model="zipCode" label="CEP" @address-found="onAddress" />
  <FullAddress v-model="address" />
  <NumberField v-model="quantity" label="Quantity" :decimal-places="0" />
</template>
```

### Modals

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ModalBase } from '@wallacesw11/base-lib';
import type { ModalAction } from '@wallacesw11/base-lib/components';

const open = ref(false);

const actions: ModalAction[] = [
  { text: 'Save', color: 'primary', handler: () => { save(); open.value = false; } },
  { text: 'Cancel', handler: () => open.value = false },
];
</script>

<template>
  <ModalBase v-model="open" title="Edit Product" :actions="actions">
    <!-- content -->
  </ModalBase>
</template>
```

### Notifications

```vue
<script setup lang="ts">
import { notify } from '@wallacesw11/base-lib';

notify.success('Saved', 'Product saved successfully');
notify.error('Error', 'Failed to save product');
notify.warning('Warning', 'Stock is low');
notify.info('Info', 'Product updated');
</script>
```

### Confirm Dialog

```vue
<script setup lang="ts">
import { confirm } from '@wallacesw11/base-lib';

async function handleDelete() {
  const ok = await confirm.show('Delete', 'This cannot be undone.');
  if (ok) deleteItem();
}
</script>
```

### Loading Overlay

```vue
<script setup lang="ts">
import { loading } from '@wallacesw11/base-lib';

loading.show('Saving...');
await doSomething();
loading.hide();
</script>
```

### Theming

```vue
<script setup lang="ts">
import { ThemeToggle, LanguageSelector } from '@wallacesw11/base-lib';

// ThemeToggle — switches between light/dark mode
// LanguageSelector — toggles locale (requires vue-i18n)
</script>
```

## Composables

```ts
import { useBreakpoint } from '@wallacesw11/base-lib';

const { isMobile, isMobileOrTablet } = useBreakpoint();
```

```ts
import { useGlobals } from '@wallacesw11/base-lib';

const { notify, loading, confirm } = useGlobals();
```

## Development

```bash
pnpm dev           # watch mode
pnpm build         # build + type declarations
pnpm lint          # eslint
pnpm test          # vitest
pnpm dev:playground  # visual test environment
```

## License

MIT

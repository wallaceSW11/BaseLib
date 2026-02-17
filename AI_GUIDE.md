# BaseLib - AI Assistant Guide

Quick reference for AI assistants helping developers use @wallacesw11/base-lib.

## Installation

```bash
pnpm add github:wallacesw11/BaseLib#main
```

## Critical Setup Order

```typescript
// main.ts - ORDER MATTERS!
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { createI18n } from 'vue-i18n'
import { setupLib, defaultMessages, defaultLocale, requiredVuetifyComponents } from '@wallacesw11/base-lib'
import '@wallacesw11/base-lib/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(createVuetify({ theme: { defaultTheme: 'light' }, components: { ...requiredVuetifyComponents } }))
app.use(createI18n({ legacy: false, locale: defaultLocale, messages: defaultMessages }))
setupLib(app) // MUST BE LAST

app.mount('#app')
```

```vue
<!-- App.vue - Required components -->
<template>
  <v-app>
    <router-view />
    <FloatingNotify ref="notifyRef" />
    <LoadingOverlay ref="loadingRef" />
    <ConfirmDialog ref="confirmRef" />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { FloatingNotify, LoadingOverlay, ConfirmDialog } from '@wallacesw11/base-lib'
import { useNotifyStore, useLoadingStore, useConfirmStore } from '@wallacesw11/base-lib/utils'

const notifyRef = ref()
const loadingRef = ref()
const confirmRef = ref()

onMounted(() => {
  useNotifyStore().setNotifyRef(notifyRef.value)
  useLoadingStore().setLoadingRef(loadingRef.value)
  useConfirmStore().setConfirmRef(confirmRef.value)
})
</script>
```

## Quick Reference

### Notifications

```typescript
import { notify } from '@wallacesw11/base-lib'

notify.success('Title', 'Message')
notify.error('Title', 'Message')
notify.warning('Title', 'Message')
notify.info('Title', 'Message')
```

### Confirm Dialog

```typescript
import { confirm } from '@wallacesw11/base-lib'

// Default (Yes/No)
const result = await confirm.show('Title', 'Message')
if (result) {
  // User clicked Yes
} else {
  // User clicked No
}

// Custom buttons
const deleted = await confirm.show(
  'Delete Item',
  'This cannot be undone.',
  {
    confirmText: 'Delete',
    cancelText: 'Cancel',
    confirmColor: 'error'
  }
)

// OK dialog
await confirm.show('Info', 'Done!', {
  confirmText: 'OK',
  cancelText: 'Close'
})
```

**Options**: `persistent`, `confirmText`, `cancelText`, `confirmColor`, `cancelColor`

**Features**: Custom overlay, responsive (16px margin), button wrapping, smooth animations

### Loading

```typescript
import { loading } from '@wallacesw11/base-lib'

loading.show('Loading...')
await someAsyncOperation()
loading.hide()
```

### Buttons

```vue
<script setup lang="ts">
import { PrimaryButton, SecondaryButton, TertiaryButton, QuartenaryButton } from '@wallacesw11/base-lib'
</script>

<template>
  <PrimaryButton text="Save" prepend-icon="mdi-content-save" @click="save" />
  <SecondaryButton text="Cancel" @click="cancel" />
  <TertiaryButton text="Info" />
  <QuartenaryButton text="Warning" />
</template>
```

**Available props**: `text`, `prependIcon`, `appendIcon`, `disabled`, `loading`, `block`, `size`, `color`, `variant`

### Modal

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ModalBase } from '@wallacesw11/base-lib'
import type { ModalAction } from '@wallacesw11/base-lib/components'

const isOpen = ref(false)

const actions: ModalAction[] = [
  { 
    text: 'Save', 
    color: 'primary', 
    handler: () => {
      save()
      isOpen.value = false // Must close manually
    }
  },
  { 
    text: 'Cancel', 
    handler: () => isOpen.value = false 
  }
]
</script>

<template>
  <ModalBase 
    v-model="isOpen" 
    title="Modal Title" 
    :actions="actions"
    :max-width="600"
  >
    <!-- Content here -->
  </ModalBase>
</template>
```

**Important**: Modal does NOT auto-close. Set `isOpen.value = false` in handlers.

### Input Fields

#### MoneyField

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { MoneyField } from '@wallacesw11/base-lib'

const amount = ref(1250.50)
</script>

<template>
  <MoneyField 
    v-model="amount" 
    label="Amount"
    currency="BRL"
    locale="pt-BR"
  />
</template>
```

**Props**: `modelValue`, `label`, `rules`, `disabled`, `hint`, `persistentHint`, `currency` (BRL/USD/EUR/GBP), `locale`

**Features**: Auto-formatting (R$ 1.250,50), mask stays visible, supports negative values

#### EmailField

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { EmailField } from '@wallacesw11/base-lib'

const email = ref('')
</script>

<template>
  <EmailField 
    v-model="email" 
    label="Email"
    required
    @valid="(isValid) => console.log(isValid)"
  />
</template>
```

**Props**: `modelValue`, `label`, `rules`, `disabled`, `hint`, `persistentHint`, `required`, `validateOnBlur`

**Events**: `@valid` - emits boolean

**Features**: Validates email format, supports + sign (user+tag@example.com), visual feedback

#### NumberField

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NumberField } from '@wallacesw11/base-lib'

const quantity = ref(100)
const price = ref(99.99)
</script>

<template>
  <!-- Integer -->
  <NumberField 
    v-model="quantity" 
    label="Quantity"
    :decimal-places="0"
  />
  
  <!-- Decimal -->
  <NumberField 
    v-model="price" 
    label="Price"
    :decimal-places="2"
  />
</template>
```

**Props**: `modelValue`, `label`, `rules`, `disabled`, `hint`, `persistentHint`, `decimalPlaces` (default: 0), `locale`, `allowNegative`

**Features**: No spinner arrows, thousand separators, configurable decimals, mask stays visible

### Theme

```vue
<script setup lang="ts">
import { ThemeToggle } from '@wallacesw11/base-lib'
import { useThemeStore } from '@wallacesw11/base-lib/stores'

const themeStore = useThemeStore()

// Programmatic
themeStore.toggleTheme()
themeStore.setTheme('dark')
</script>

<template>
  <ThemeToggle />
</template>
```

### Language Selector

```vue
<script setup lang="ts">
import { LanguageSelector } from '@wallacesw11/base-lib'
</script>

<template>
  <LanguageSelector />
</template>
```

**Supported**: pt-BR (default), en-US

### Breakpoints

```vue
<script setup lang="ts">
import { useBreakpoint } from '@wallacesw11/base-lib'

const { isMobile, isMobileOrTablet } = useBreakpoint()
// isMobile.value -> true on xs (< 600px)
// isMobileOrTablet.value -> true on xs/sm (< 960px)
</script>

<template>
  <ModalBase :fullscreen="isMobileOrTablet" />
</template>
```

### API Client

```typescript
import { api, configureApi } from '@wallacesw11/base-lib'

// Configure (optional)
configureApi({
  baseURL: 'https://api.example.com',
  authTokenKey: 'auth_token',
  onUnauthorized: () => router.push('/login')
})

// Use
const users = await api.get('/users')
await api.post('/users', { name: 'John' })
await api.put('/users/1', { name: 'Jane' })
await api.delete('/users/1')
```

**Auth**: Reads token from `localStorage.getItem('auth_token')` automatically

## All Available Imports

```typescript
// Components
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuartenaryButton,
  BaseButton,
  IconToolTip,
  ModalBase,
  ConfirmDialog,
  FloatingNotify,
  LoadingOverlay,
  ThemeToggle,
  LanguageSelector,
  MoneyField,
  EmailField,
  NumberField
} from '@wallacesw11/base-lib'

// Utils
import { 
  notify, 
  loading, 
  confirm, 
  api, 
  configureApi,
  requiredVuetifyComponents
} from '@wallacesw11/base-lib'

// Stores
import { 
  useThemeStore, 
  useNotifyStore, 
  useLoadingStore, 
  useConfirmStore 
} from '@wallacesw11/base-lib/stores'

// Composables
import { 
  useBreakpoint, 
  useGlobals, 
  useLocale, 
  useThemeSync 
} from '@wallacesw11/base-lib/composables'

// Locales
import { 
  defaultMessages, 
  defaultLocale, 
  defaultAvailableLocales 
} from '@wallacesw11/base-lib/locales'

// Types
import type { ModalAction } from '@wallacesw11/base-lib/components'
import type { 
  NotifyType, 
  LoadingComponentRef, 
  ConfirmComponentRef, 
  ApiConfig 
} from '@wallacesw11/base-lib/utils'
```

## Common Patterns

### Form with validation and submission

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { MoneyField, EmailField, NumberField } from '@wallacesw11/base-lib'
import { notify, loading } from '@wallacesw11/base-lib'

const form = ref({
  email: '',
  amount: 0,
  quantity: 0
})

const isEmailValid = ref(false)

async function submit() {
  if (!isEmailValid.value) {
    notify.error('Invalid', 'Check email')
    return
  }
  
  loading.show('Saving...')
  try {
    await api.post('/submit', form.value)
    notify.success('Success', 'Saved!')
  } catch (error) {
    notify.error('Error', 'Failed to save')
  } finally {
    loading.hide()
  }
}
</script>

<template>
  <v-form @submit.prevent="submit">
    <EmailField v-model="form.email" required @valid="v => isEmailValid = v" />
    <MoneyField v-model="form.amount" label="Amount" />
    <NumberField v-model="form.quantity" label="Quantity" :decimal-places="0" />
    <PrimaryButton text="Submit" type="submit" />
  </v-form>
</template>
```

### Delete confirmation

```vue
<script setup lang="ts">
import { confirm, notify, loading, api } from '@wallacesw11/base-lib'

async function deleteItem(id: number) {
  const confirmed = await confirm.show(
    'Delete Item',
    'This action cannot be undone. Continue?',
    {
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmColor: 'error',
      cancelColor: 'grey'
    }
  )
  
  if (!confirmed) return
  
  loading.show('Deleting...')
  try {
    await api.delete(`/items/${id}`)
    notify.success('Deleted', 'Item removed')
  } catch (error) {
    notify.error('Error', 'Failed to delete')
  } finally {
    loading.hide()
  }
}
</script>
```

### Multi-step modal

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ModalBase } from '@wallacesw11/base-lib'
import type { ModalAction } from '@wallacesw11/base-lib/components'

const isOpen = ref(false)
const step = ref(1)

const actions: ModalAction[] = [
  { 
    text: 'Next', 
    color: 'primary',
    handler: () => {
      if (step.value < 3) {
        step.value++
      } else {
        save()
        isOpen.value = false
      }
    }
  },
  { 
    text: 'Back',
    handler: () => step.value > 1 ? step.value-- : null,
    variant: 'text'
  }
]
</script>

<template>
  <ModalBase v-model="isOpen" :title="`Step ${step}`" :actions="actions">
    <div v-if="step === 1">Step 1 content</div>
    <div v-if="step === 2">Step 2 content</div>
    <div v-if="step === 3">Step 3 content</div>
  </ModalBase>
</template>
```

## Vuetify Setup (Bundle Otimizado)

Não use `import * as components from "vuetify/components"` — isso puxa tudo e infla o bundle.

A lib exporta `requiredVuetifyComponents` com todos os componentes Vuetify que ela usa internamente. No projeto consumidor, registre apenas o necessário:

```typescript
// vuetify.ts
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { requiredVuetifyComponents } from "@wallacesw11/base-lib";

// só os componentes que o SEU projeto usa diretamente
import { VDataTable, VChip } from "vuetify/components";

export default createVuetify({
  components: {
    ...requiredVuetifyComponents, // garante que os componentes da lib funcionem
    VDataTable,                   // seus próprios componentes
    VChip,
  },
  directives,
  theme: {
    defaultTheme: "light",
  },
});
```

Para auto-import dos componentes do seu projeto, use o `vite-plugin-vuetify`:

```typescript
// vite.config.ts
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // resolve componentes do projeto automaticamente
  ],
});
```

> O `autoImport: true` cuida dos componentes usados no projeto. O `...requiredVuetifyComponents` garante os que vêm de dentro da lib. Os dois funcionam juntos sem conflito.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `Failed to resolve component: v-card-title` | Register Vuetify BEFORE setupLib() |
| Componentes da lib quebrados (textos no lugar de botões) | Use `...requiredVuetifyComponents` no createVuetify — veja seção "Vuetify Setup" |
| Bundle muito grande | Não use `import * as components from "vuetify/components"` — use `requiredVuetifyComponents` + `autoImport: true` |
| Notifications not showing | Add FloatingNotify to App.vue and register ref |
| Theme not loading | Create public/theme.json |
| API auth missing | Store token: `localStorage.setItem('auth_token', token)` |
| Modal not closing | Set `isOpen.value = false` in handler |
| Input mask disappearing | Use MoneyField/NumberField instead of v-text-field |

## Tips for AI Assistants

1. **Always check setup order**: Vuetify → i18n → setupLib
2. **Modal closing**: Never assume auto-close, always set v-model to false
3. **Input fields**: Use MoneyField/EmailField/NumberField for formatted inputs
4. **Responsive**: Use `useBreakpoint()` for mobile detection
5. **Loading states**: Wrap async operations with loading.show/hide
6. **Validation**: EmailField emits @valid event, use it for form validation
7. **Currency**: MoneyField supports BRL, USD, EUR, GBP
8. **Decimals**: NumberField decimalPlaces prop (0 = integer)

## Update Library

```bash
pnpm update @wallacesw11/base-lib
# or force
pnpm add github:wallacesw11/BaseLib#main --force
```

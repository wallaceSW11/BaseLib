# @wallacesw11/base-lib

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/badge/Source-GitHub-blue.svg)](https://github.com/wallaceSW11/BaseLib)

Vue 3 + Vuetify 3 component library with standardized UI patterns: notifications, confirmations, modals, theme switching, and internationalization.

```bash
pnpm add github:wallacesw11/BaseLib#main
```

## 🆕 Recent Changes

**v1.1.0** - Modal improvements:
- ✅ `attach="body"` is now default in ModalBase (no configuration needed)
- ✅ Manual modal close control - handlers decide when to close
- ✅ ConfirmDialog auto-closes on Yes/No clicks
- ✅ Better support for multi-step workflows (e.g., "Save & Continue" vs "Save & Close")

## 🚨 Common Issues & Quick Fixes

| Problem | Solution |
|---------|----------|
| `Failed to resolve component: v-card-title` | Register Vuetify **BEFORE** `setupLib()` in `main.ts` |
| Notifications not showing | Add `<FloatingNotify ref="notifyRef" />` to `App.vue` and register ref |
| Theme not loading | Create `public/theme.json` and call `loadTheme()` |
| API auth token missing | Store in localStorage: `localStorage.setItem('auth_token', token)` |

## ✨ What's Included

- **🔔 Notifications** - Toast messages (success, error, warning, info)
- **❓ Confirmations** - Yes/No dialog with async/await
- **🪟 Modal Base** - Customizable modal with actions
- **🎨 Theme Toggle** - Light/dark mode with persistence
- **🌍 i18n** - Multi-language support (pt-BR, en-US)
- **🎯 Buttons** - PrimaryButton, SecondaryButton, TertiaryButton, QuartenaryButton
- **⏳ Loading Overlay** - Full-screen loading state
- **🔧 API Client** - Axios with auth and interceptors

## 📦 Installation

```bash
pnpm add github:wallacesw11/BaseLib#main
```

**Peer Dependencies**:
```bash
pnpm add vue@^3.5.0 vuetify@^3.0.0 pinia@^3.0.0 vue-i18n@^11.0.0 axios@^1.0.0
```

## 🔧 Setup

### 1. Register in main.ts

**⚠️ CRITICAL: Vuetify MUST be registered BEFORE BaseLib!**

```typescript
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { setupLib, defaultMessages, defaultLocale } from "@wallacesw11/base-lib";
import "@wallacesw11/base-lib/style.css";
import App from "./App.vue";

const app = createApp(App);

// 1. Pinia
app.use(createPinia());

// 2. Vuetify (BEFORE BaseLib!)
const vuetify = createVuetify({ theme: { defaultTheme: "light" } });
app.use(vuetify);

// 3. i18n
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en-US",
  messages: defaultMessages,
});
app.use(i18n);

// 4. BaseLib (LAST!)
setupLib(app);

app.mount("#app");
```

### 2. Add Required Components to App.vue

```vue
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

## 📚 Usage

### Notifications

```typescript
import { notify } from "@wallacesw11/base-lib";

notify.success("Success!", "Operation completed");
notify.error("Error!", "Something went wrong");
notify.warning("Warning", "Be careful");
notify.info("Info", "Just so you know");
```

### Confirmation Dialog

```typescript
import { confirm } from "@wallacesw11/base-lib";

const confirmed = await confirm.show("Delete Item", "Are you sure?");
if (confirmed) {
  // User clicked "Yes" - modal closes automatically
} else {
  // User clicked "No" - modal closes automatically
}
```

**Note**: ConfirmDialog automatically closes when user clicks Yes or No.

### Loading Overlay

```typescript
import { loading } from "@wallacesw11/base-lib";

loading.show("Processing...");
await someAsyncOperation();
loading.hide();
```

### Buttons

```vue
<script setup lang="ts">
import { PrimaryButton, SecondaryButton, TertiaryButton, QuartenaryButton } from "@wallacesw11/base-lib";
</script>

<template>
  <PrimaryButton text="Save" prepend-icon="mdi-content-save" @click="save" />
  <SecondaryButton text="Cancel" @click="cancel" />
  <TertiaryButton text="Info" />
  <QuartenaryButton text="Warning" />
</template>
```

**Props**: `text`, `prependIcon`, `appendIcon`, `disabled`, `loading`, `block`, `size`, `color`, `variant`

### Modal Base

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ModalBase, useBreakpoint } from '@wallacesw11/base-lib'
import type { ModalAction } from '@wallacesw11/base-lib/components'

const isOpen = ref(false)
const { isMobileOrTablet } = useBreakpoint()

const actions: ModalAction[] = [
  { 
    text: 'Save & Continue', 
    color: 'primary', 
    handler: async () => {
      await save()
      clearFields() // Modal stays open
    }
  },
  { 
    text: 'Save & Close', 
    color: 'primary', 
    handler: async () => {
      await save()
      isOpen.value = false // Close modal
    }
  },
  { 
    text: 'Cancel', 
    color: 'grey', 
    handler: () => isOpen.value = false 
  }
]
</script>

<template>
  <ModalBase 
    v-model="isOpen" 
    title="Title" 
    message="Message" 
    :actions="actions"
    :max-width="600"
    :fullscreen="isMobileOrTablet"
  />
</template>
```

**Props**:
- `modelValue` (boolean) - Controls modal visibility (v-model)
- `title` (string) - Modal title
- `titleIcon` (string) - Icon to display next to title
- `message` (string) - Modal message content
- `maxWidth` (string | number) - Maximum width (default: 500)
- `persistent` (boolean) - Prevents closing on outside click (default: true)
- `actions` (ModalAction[]) - Array of action buttons
- `contentClass` (string) - Custom CSS classes for dialog content
- `fullscreen` (boolean) - Makes modal fullscreen (default: false)

**ModalAction Interface**:
```typescript
{
  text: string
  icon?: string
  color?: string
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  handler?: () => void | Promise<void>
}
```

**Important**: Modal does NOT close automatically when buttons are clicked. You must explicitly close it in the handler by setting `isOpen.value = false` if needed. This allows flexible workflows like "save and continue" vs "save and close".

### Theme Switching

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

### Breakpoint Detection

Detect screen size for responsive behavior using Vuetify's breakpoint system:

```vue
<script setup lang="ts">
import { useBreakpoint } from '@wallacesw11/base-lib'

const { isMobile, isMobileOrTablet } = useBreakpoint()

// isMobile.value -> true on xs screens (< 600px)
// isMobileOrTablet.value -> true on xs and sm screens (< 960px)
</script>

<template>
  <div>
    <p v-if="isMobile">Mobile view</p>
    <p v-else-if="isMobileOrTablet">Tablet view</p>
    <p v-else>Desktop view</p>
  </div>
</template>
```

**Composable Returns**:
- `isMobile` - Returns `true` for extra small screens (xs, < 600px)
- `isMobileOrTablet` - Returns `true` for small and down (sm and xs, < 960px)

### Internationalization

```vue
<script setup lang="ts">
import { LanguageSelector } from '@wallacesw11/base-lib'
import { defaultAvailableLocales } from '@wallacesw11/base-lib/locales'
</script>

<template>
  <LanguageSelector :available-locales="defaultAvailableLocales" />
</template>
```

**Supported locales**: `pt-BR` (default), `en-US`

### API Client

```typescript
import { api, configureApi } from "@wallacesw11/base-lib";

// Configure (optional)
configureApi({
  baseURL: "https://api.example.com",
  authTokenKey: "auth_token",
  onUnauthorized: () => window.location.href = "/login"
});

// Use
const users = await api.get("/users");
await api.post("/users", { name: "John" });
```

## 🎨 Theme & White-Label

Create `public/theme.json`:

```json
{
  "logo": { "light": "/logo-light.svg", "dark": "/logo-dark.svg" },
  "colors": {
    "light": { "primary": "#1976D2", "secondary": "#424242" },
    "dark": { "primary": "#2196F3", "secondary": "#616161" }
  },
  "customization": { "appName": "My App" }
}
```

Load in App.vue:

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@wallacesw11/base-lib/stores'
import { useThemeSync } from '@wallacesw11/base-lib/composables'

onMounted(async () => {
  const themeStore = useThemeStore()
  const { syncTheme } = useThemeSync()
  await themeStore.loadTheme()
  syncTheme()
})
</script>
```

## 📚 TypeScript Types

```typescript
import type { NotifyType, LoadingComponentRef, ConfirmComponentRef, ApiConfig } from '@wallacesw11/base-lib/utils'
import type { ModalAction } from '@wallacesw11/base-lib/components'
import type { ThemeConfig } from '@wallacesw11/base-lib/stores'
import type { LocaleOption } from '@wallacesw11/base-lib/locales'
```

## 🔄 Update Library

```bash
pnpm update @wallacesw11/base-lib
# or force reinstall
pnpm add github:wallacesw11/BaseLib#main --force
```

## 🤖 For Developers & AI Assistants

**Internal Playground**: Test components during development with `pnpm dev:playground`

**Key Workflow**:
1. Make changes in `src/`
2. Test in playground: `pnpm dev:playground`
3. Run tests: `pnpm test`
4. Build: `pnpm build`
5. Commit and push to GitHub
6. Users update: `pnpm update @wallacesw11/base-lib`

**Key Files**:
- `src/index.ts` - Main exports
- `src/utils/vuetify-check.ts` - Vuetify detection
- `src/plugins/globals.ts` - Global utilities
- `package.json` - Dependencies & exports

**Distribution**: GitHub-based (not npm). Updates via git push.

## 📄 License

MIT © [wallaceSW11](https://github.com/wallaceSW11)

---

**Links**: [Repository](https://github.com/wallaceSW11/BaseLib) | [Issues](https://github.com/wallaceSW11/BaseLib/issues) | [Troubleshooting](./TROUBLESHOOTING.md)

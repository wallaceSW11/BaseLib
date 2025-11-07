# @wallacesw11/base-lib

[![npm version](https://img.shields.io/npm/v/@wallacesw11/base-lib.svg)](https://www.npmjs.com/package/@wallacesw11/base-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive, production-ready Vue 3 component library with TypeScript, Vuetify, i18n, and state management. Built to centralize common patterns across multiple projects including modals, notifications, loading states, internationalization, theme switching, and white-label support.

## 🎮 Playground

BaseLib includes a **built-in playground** for development and testing! Test all components without needing external projects.

```bash
# Start the playground
pnpm dev:playground

# Build the playground
pnpm build:playground
```

The playground includes live examples of all components and utilities. See [playground/README.md](./playground/README.md) for details.

## 🚀 Features

- **Vue 3 Composition API** - Modern and reactive components
- **TypeScript** - Full type safety and IntelliSense support
- **Vuetify 3** - Material Design components integration
- **i18n** - Internationalization support with vue-i18n
- **Pinia** - State management stores
- **Theme System** - Dynamic theme switching with persistence and white-label support
- **Modular Exports** - Tree-shakeable imports for optimal bundle size
- **Utilities** - Loading overlays, toast notifications, confirmation dialogs, and configured API client
- **Unit Tests** - Comprehensive test coverage with Vitest
- **Development Playground** - Built-in testing environment

## 📦 Installation

### From GitHub (Main Branch)

```bash
npm install wallacesw11/BaseLib#main
# or
pnpm add wallacesw11/BaseLib#main
# or
yarn add wallacesw11/BaseLib#main
```

### Peer Dependencies

Ensure you have the following peer dependencies installed:

```bash
npm install vue@^3.5.0 vue-i18n@^11.0.0 vuetify@^3.0.0 pinia@^3.0.0 axios@^1.0.0
```

## 🔧 Setup

### 1. Configure Path Aliases (Optional but Recommended)

**tsconfig.json**:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**vite.config.ts**:

```typescript
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

### 2. Register in main.ts

**⚠️ IMPORTANT: Vuetify must be registered BEFORE BaseLib!**

```typescript
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { setupLib, defaultMessages, defaultLocale } from "@wallacesw11/base-lib";
import App from "./App.vue";

const app = createApp(App);

// Setup Pinia (required for stores)
app.use(createPinia());

// Setup Vuetify (MUST be before BaseLib)
const vuetify = createVuetify({
  // Your Vuetify configuration
  theme: {
    defaultTheme: "light",
  },
});
app.use(vuetify);

// Setup i18n (required for internationalization)
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en-US",
  messages: defaultMessages,
});
app.use(i18n);

// Setup the library (registers components and plugins)
setupLib(app);

app.mount("#app");
```

### 3. Add Required Components to Your App

For notifications, loading, and confirmations to work, add these components to your root `App.vue`:

```vue
<template>
  <v-app>
    <!-- Your app content -->
    <router-view />
    
    <!-- Required global components -->
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

### 4. Import Styles

```typescript
// In your main.ts or main CSS file
import "@wallacesw11/base-lib/dist/index.css";
```

## 📚 Usage

### Importing Components

```vue
<script setup lang="ts">
import { PrimaryButton, SecondaryButton, ThemeToggle } from "@wallacesw11/base-lib";
// or from specific path
import { PrimaryButton } from "@wallacesw11/base-lib/components";
</script>

<template>
  <PrimaryButton text="Click me" @click="handleClick" />
  <ThemeToggle />
</template>
```

### Using Utilities

**New Fluent API (Recommended)**:

```typescript
import { notify, loading, confirm } from "@wallacesw11/base-lib";

// Notifications
notify.success("Success!", "Operation completed successfully");
notify.error("Error!", "Something went wrong");
notify.info("Info", "This is an information message");
notify.warning("Warning", "Please be careful");

// Loading overlay
loading.show("Processing your request...");
// ... perform async operation
loading.hide();

// Confirmation dialog
const confirmed = await confirm.show(
  "Confirm Action",
  "Are you sure you want to proceed?"
);

if (confirmed) {
  // User clicked "Yes"
} else {
  // User clicked "No"
}

// API calls with pre-configured axios instance
import { api } from "@wallacesw11/base-lib";

const response = await api.get("/users");
const newUser = await api.post("/users", { name: "John" });
```

### Configuring the API Client

The library provides a pre-configured Axios instance with automatic loading states and error notifications. You can customize its behavior:

```typescript
import { configureApi } from "@wallacesw11/base-lib";

configureApi({
  baseURL: "https://api.example.com",
  timeout: 15000,
  showLoadingOnMutations: true, // Show loading for POST/PUT/DELETE
  showErrorNotifications: true, // Auto-show error notifications
  authTokenKey: "auth_token", // LocalStorage key for auth token
  onUnauthorized: () => {
    // Custom handler for 401 errors
    window.location.href = "/login";
  },
});
```

### Using Composables

```typescript
import { useGlobals, useThemeSync } from "@wallacesw11/base-lib/composables";

const { notify, loading, confirm } = useGlobals();

// Use utilities via composables
notify.success("Success!", "It works!");
loading.show();

// Sync theme with Vuetify
const { syncTheme } = useThemeSync();
syncTheme(); // Syncs current theme with Vuetify
```

### Using Stores

```typescript
import { useThemeStore } from "@wallacesw11/base-lib/stores";

const themeStore = useThemeStore();

// Toggle theme
themeStore.toggleTheme();

// Set specific theme
themeStore.setTheme("light");

// Get current theme
console.log(themeStore.currentTheme);
```

### Internationalization

```typescript
import {
  defaultMessages,
  defaultAvailableLocales,
  defaultLocale,
} from "@wallacesw11/base-lib/locales";

// Use with vue-i18n
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en-US",
  messages: defaultMessages,
});
```

## 🧩 Available Components

### Buttons

All buttons extend from `BaseButton` with consistent API:

#### BaseButton
```vue
<BaseButton 
  text="Click me"
  prepend-icon="mdi-check"
  append-icon="mdi-arrow-right"
  color="primary"
  variant="elevated"
  size="default"
  :disabled="false"
  :loading="false"
  @click="handleClick"
/>
```

**Props**:
- `text?: string` - Button text
- `prependIcon?: string` - Icon before text
- `appendIcon?: string` - Icon after text
- `color?: string` - Vuetify color (primary, secondary, error, etc.)
- `variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'`
- `size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'`
- `disabled?: boolean`
- `loading?: boolean`
- `block?: boolean`

**Events**:
- `@click` - Click event with MouseEvent

#### Pre-styled Buttons

- `PrimaryButton` - Primary color, elevated variant
- `SecondaryButton` - Secondary color, elevated variant
- `TertiaryButton` - Info color, elevated variant
- `QuartenaryButton` - Warning color, elevated variant
- `IconToolTip` - Icon button with tooltip

```vue
<template>
  <PrimaryButton text="Save" prepend-icon="mdi-content-save" @click="save" />
  <SecondaryButton text="Cancel" @click="cancel" />
</template>
```

### Dialogs & Modals

#### ModalBase

Customizable base modal with action buttons.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ModalBase } from '@wallacesw11/base-lib'
import type { ModalAction } from '@wallacesw11/base-lib/components'

const isOpen = ref(false)

const actions: ModalAction[] = [
  {
    text: 'Confirm',
    color: 'primary',
    variant: 'elevated',
    icon: 'mdi-check',
    handler: () => {
      console.log('Confirmed!')
    }
  },
  {
    text: 'Cancel',
    color: 'grey',
    variant: 'text',
    handler: () => {
      isOpen.value = false
    }
  }
]
</script>

<template>
  <ModalBase
    v-model="isOpen"
    title="Confirmation"
    message="Are you sure?"
    :actions="actions"
  />
</template>
```

#### ConfirmDialog

Simple yes/no confirmation dialog.

```typescript
const confirmed = await confirm.show("Delete Item", "This cannot be undone");
if (confirmed) {
  // Delete the item
}
```

### UI Components

#### ThemeToggle

```vue
<template>
  <ThemeToggle />
</template>
```

Automatically toggles between light and dark mode with icon change.

#### LanguageSelector

```vue
<script setup lang="ts">
import { LanguageSelector } from '@wallacesw11/base-lib'
import { defaultAvailableLocales } from '@wallacesw11/base-lib/locales'
</script>

<template>
  <LanguageSelector :available-locales="defaultAvailableLocales" />
</template>
```

Shows a dropdown with country flags for language selection.

#### LoadingOverlay

Full-screen loading overlay with spinner and message.

```vue
<template>
  <LoadingOverlay ref="loadingRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LoadingOverlay } from '@wallacesw11/base-lib'
import { useLoadingStore } from '@wallacesw11/base-lib/utils'

const loadingRef = ref()

onMounted(() => {
  useLoadingStore().setLoadingRef(loadingRef.value)
})
</script>
```

#### FloatingNotify

Toast notification that appears in the top-right corner.

```vue
<template>
  <FloatingNotify ref="notifyRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { FloatingNotify } from '@wallacesw11/base-lib'
import { useNotifyStore } from '@wallacesw11/base-lib/utils'

const notifyRef = ref()

onMounted(() => {
  useNotifyStore().setNotifyRef(notifyRef.value)
})
</script>
```

## 🛠️ Utilities & TypeScript Interfaces

### Notify

**Methods**:
- `notify.success(title: string, message?: string): void`
- `notify.error(title: string, message?: string): void`
- `notify.warning(title: string, message?: string): void`
- `notify.info(title: string, message?: string): void`

**Store**: `useNotifyStore()`

**Types**:
```typescript
import type { NotifyType, NotifyComponentRef } from '@wallacesw11/base-lib/utils'

type NotifyType = 'success' | 'error' | 'warning' | 'info'
```

### Loading

**Methods**:
- `loading.show(message?: string): void`
- `loading.hide(): void`

**Store**: `useLoadingStore()`

**Types**:
```typescript
import type { LoadingComponentRef } from '@wallacesw11/base-lib/utils'
```

### Confirm

**Methods**:
- `confirm.show(title: string, message: string): Promise<boolean>`

**Store**: `useConfirmStore()`

**Types**:
```typescript
import type { ConfirmComponentRef } from '@wallacesw11/base-lib/utils'
```

### API Client

Pre-configured Axios instance with interceptors for:
- Automatic Bearer token injection from localStorage
- Loading states on mutations (POST, PUT, DELETE, PATCH)
- Error notification handling
- Configurable behavior

**Usage**:
```typescript
import { api, configureApi } from '@wallacesw11/base-lib'

// Configure (optional)
configureApi({
  baseURL: 'https://api.example.com',
  timeout: 30000,
  showLoadingOnMutations: true,
  showErrorNotifications: true,
  authTokenKey: 'auth_token',
  onUnauthorized: () => {
    // Custom 401 handler
  }
})

// Use
const { data } = await api.get('/users')
```

**Types**:
```typescript
import type { ApiConfig } from '@wallacesw11/base-lib/utils'

interface ApiConfig {
  baseURL?: string
  timeout?: number
  showLoadingOnMutations?: boolean
  showErrorNotifications?: boolean
  authTokenKey?: string
  onUnauthorized?: () => void
}
```

### Constants

```typescript
import { 
  NOTIFY_DURATION,      // 3000ms - Auto-hide duration for notifications
  LOADING_DELAY,        // 300ms - Delay before showing loading spinner
  API_TIMEOUT,          // 30000ms - Default API timeout
  LOADING_CONTENT_DELAY // 300ms - Delay before showing loading content
} from '@wallacesw11/base-lib/utils'
```

## 🎨 Theming & White-Label Support

The library includes a powerful theme system with white-label capabilities.

### Theme Configuration

Create a `public/theme.json` file in your project:

```json
{
  "name": "My Custom Theme",
  "version": "1.0.0",
  "logo": {
    "light": "/logo-light.svg",
    "dark": "/logo-dark.svg",
    "favicon": "/favicon.ico"
  },
  "colors": {
    "light": {
      "primary": "#1976D2",
      "secondary": "#424242",
      "accent": "#82B1FF",
      "error": "#FF5252",
      "info": "#2196F3",
      "success": "#4CAF50",
      "warning": "#FB8C00"
    },
    "dark": {
      "primary": "#2196F3",
      "secondary": "#616161",
      "accent": "#FF4081",
      "error": "#FF5252",
      "info": "#2196F3",
      "success": "#4CAF50",
      "warning": "#FFC107"
    }
  },
  "fonts": {
    "primary": "Roboto, sans-serif",
    "monospace": "Roboto Mono, monospace"
  },
  "customization": {
    "appName": "My Application",
    "appDescription": "Custom white-label application",
    "copyrightText": "© 2025 My Company"
  }
}
```

### Using the Theme Store

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@wallacesw11/base-lib/stores'
import { useThemeSync } from '@wallacesw11/base-lib/composables'

const themeStore = useThemeStore()
const { syncTheme } = useThemeSync()

onMounted(async () => {
  // Load theme from public/theme.json
  await themeStore.loadTheme()
  
  // Sync with Vuetify
  syncTheme()
})

// Toggle between light and dark
const toggleTheme = () => {
  themeStore.toggleTheme()
}

// Set specific theme
const setLightTheme = () => {
  themeStore.setTheme('light')
}

// Update colors dynamically
const updateColors = () => {
  themeStore.updateThemeColors({
    primary: '#FF0000',
    secondary: '#00FF00'
  })
}
</script>

<template>
  <div>
    <img :src="themeStore.currentLogo" :alt="themeStore.appName" />
    <h1>{{ themeStore.appName }}</h1>
    <p>Current mode: {{ themeStore.currentMode }}</p>
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>
```

### Theme Store API

**State**:
- `themeConfig: ThemeConfig | null` - Current theme configuration
- `isDark: boolean` - Whether dark mode is active
- `isLoading: boolean` - Loading state while fetching theme

**Getters**:
- `currentMode: 'light' | 'dark'` - Current theme mode
- `currentLogo: string` - Logo URL for current mode
- `currentColors: Record<string, string>` - Colors for current mode
- `appName: string` - Application name from config

**Actions**:
- `loadTheme(): Promise<void>` - Load theme from `/theme.json`
- `toggleTheme(): void` - Toggle between light/dark
- `setTheme(mode: 'light' | 'dark'): void` - Set specific theme
- `updateThemeColors(colors: Record<string, string>): void` - Update colors

**Types**:
```typescript
import type { ThemeConfig } from '@wallacesw11/base-lib/stores'

interface ThemeConfig {
  name: string
  version: string
  logo: {
    light: string
    dark: string
    favicon: string
  }
  colors: {
    light: Record<string, string>
    dark: Record<string, string>
  }
  fonts: {
    primary: string
    monospace: string
  }
  customization: {
    appName: string
    appDescription: string
    copyrightText: string
  }
}
```

### Theme Persistence

Theme preference is automatically saved to `localStorage` with key `app-theme`.

### Theme Events

The theme system emits a custom event when the theme changes:

```typescript
window.addEventListener('theme-changed', (event: CustomEvent) => {
  console.log('New theme mode:', event.detail.mode)
  console.log('New colors:', event.detail.colors)
})
```

## 🌍 Internationalization (i18n)

### Default Locales

The library includes built-in support for:
- `pt-BR` - Portuguese (Brazil) - Default
- `en-US` - English (United States)

### Setup

```typescript
import { createI18n } from 'vue-i18n'
import { defaultMessages, defaultLocale, defaultAvailableLocales } from '@wallacesw11/base-lib/locales'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale, // 'pt-BR'
  fallbackLocale: 'en-US',
  messages: defaultMessages,
})

app.use(i18n)
```

### Using the Locale Composable

```vue
<script setup lang="ts">
import { useLocale } from '@wallacesw11/base-lib/composables'
import { defaultAvailableLocales } from '@wallacesw11/base-lib/locales'

const { locale, locales, setLocale, currentFlag, currentCurrency } = useLocale(
  defaultAvailableLocales
)

// Change language
setLocale('en-US')
</script>

<template>
  <div>
    <p>Current locale: {{ locale }}</p>
    <p>Flag: {{ currentFlag }}</p>
    <p>Currency: {{ currentCurrency }}</p>
    
    <select v-model="locale" @change="setLocale($event.target.value)">
      <option v-for="loc in locales" :key="loc.code" :value="loc.code">
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>
```

### Adding Custom Locales

```typescript
import type { LocaleOption } from '@wallacesw11/base-lib/locales'

const customMessages = {
  'pt-BR': {
    common: {
      hello: 'Olá',
      goodbye: 'Tchau'
    }
  },
  'en-US': {
    common: {
      hello: 'Hello',
      goodbye: 'Goodbye'
    }
  },
  'es-ES': {
    common: {
      hello: 'Hola',
      goodbye: 'Adiós'
    }
  }
}

const customLocales: LocaleOption[] = [
  { code: 'pt-BR', name: 'Português', countryCode: 'BR' },
  { code: 'en-US', name: 'English', countryCode: 'US' },
  { code: 'es-ES', name: 'Español', countryCode: 'ES' }
]

const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en-US',
  messages: customMessages,
})
```

### Built-in Translation Keys

```typescript
// Common translations available in all locales
{
  common: {
    loading: string
    save: string
    cancel: string
    confirm: string
    delete: string
    edit: string
    close: string
    back: string
    next: string
    yes: string
    no: string
  }
}
```

### Language Selector Component

```vue
<script setup lang="ts">
import { LanguageSelector } from '@wallacesw11/base-lib'
import { defaultAvailableLocales } from '@wallacesw11/base-lib/locales'
</script>

<template>
  <LanguageSelector :available-locales="defaultAvailableLocales" />
</template>
```

The component shows country flags and automatically updates the app locale.

## 📖 API Reference

### setupLib(app: App)

Main setup function that registers all components and plugins.

```typescript
import { setupLib } from "@wallacesw11/base-lib";

setupLib(app);
```

### registerLibComponents(app: App)

Register only components (without plugins).

```typescript
import { registerLibComponents } from "@wallacesw11/base-lib";

registerLibComponents(app);
```

### registerLibPlugins(app: App)

Register only plugins (without components).

```typescript
import { registerLibPlugins } from "@wallacesw11/base-lib";

registerLibPlugins(app);
```

## 🔄 Updating

Since the library is installed from GitHub's main branch, you can update it by running:

```bash
npm update @wallacesw11/base-lib
# or
pnpm update @wallacesw11/base-lib
# or
yarn upgrade @wallacesw11/base-lib
```

Or reinstall to get the latest version:

```bash
npm install wallacesw11/BaseLib#main --force
```

## 🧪 Testing

The library includes comprehensive unit tests using Vitest.

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run with UI
pnpm vitest --ui
```

### Test Coverage

Tests cover:
- ✅ Notify utilities (success, error, warning, info)
- ✅ Loading utilities (show, hide)
- ✅ Confirm utilities (show dialog, return boolean)
- ✅ Button components (render, props, events)

## 🐛 Troubleshooting

### Notifications/Loading/Confirm not working

**Problem**: Calling `notify.success()`, `loading.show()`, or `confirm.show()` doesn't display anything.

**Solution**: Make sure you've added the required components to your `App.vue` and registered the refs:

```vue
<template>
  <FloatingNotify ref="notifyRef" />
  <LoadingOverlay ref="loadingRef" />
  <ConfirmDialog ref="confirmRef" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

### Theme not loading

**Problem**: Theme colors and logo don't appear.

**Solution**: 
1. Ensure you have a `public/theme.json` file in your project
2. Call `themeStore.loadTheme()` in your App.vue
3. Make sure Pinia is installed before loading the theme

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@wallacesw11/base-lib/stores'
import { useThemeSync } from '@wallacesw11/base-lib/composables'

const themeStore = useThemeStore()
const { syncTheme } = useThemeSync()

onMounted(async () => {
  await themeStore.loadTheme()
  syncTheme()
})
</script>
```

### TypeScript errors with imports

**Problem**: TypeScript can't find module declarations.

**Solution**: Make sure you're importing from the correct paths:

```typescript
// ✅ Correct
import { notify } from '@wallacesw11/base-lib'
import { PrimaryButton } from '@wallacesw11/base-lib/components'
import { useThemeStore } from '@wallacesw11/base-lib/stores'

// ❌ Wrong
import { notify } from '@wallacesw11/base-lib/dist/utils/notify'
```

### Icons not showing

**Problem**: Material Design Icons (mdi) don't appear.

**Solution**: Install and import @mdi/font:

```bash
npm install @mdi/font
```

```typescript
// main.ts
import '@mdi/font/css/materialdesignicons.css'
```

### API requests not including auth token

**Problem**: Bearer token is not being sent with requests.

**Solution**: Store your token in localStorage with the configured key (default: `auth_token`):

```typescript
// After login
localStorage.setItem('auth_token', 'your-jwt-token')

// Or configure a custom key
import { configureApi } from '@wallacesw11/base-lib'

configureApi({
  authTokenKey: 'my_custom_token_key'
})
```

### Loading overlay not hiding after API call

**Problem**: Loading state persists after request completes.

**Solution**: The API client automatically manages loading states. If you need to manually control it:

```typescript
import { configureApi } from '@wallacesw11/base-lib'

// Disable automatic loading for all requests
configureApi({
  showLoadingOnMutations: false
})

// Then manually control when needed
import { loading } from '@wallacesw11/base-lib'

loading.show('Custom message')
await someAsyncOperation()
loading.hide()
```

## 🚀 Development

### Setting up the development environment

```bash
# Clone the repository
git clone https://github.com/wallaceSW11/BaseLib.git
cd BaseLib

# Install dependencies
pnpm install

# Start the playground for live development
pnpm dev:playground

# Build the library
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

### Project Structure

```
BaseLib/
├── src/                    # Library source code
│   ├── components/         # Vue components
│   ├── composables/        # Vue composables
│   ├── locales/           # i18n translations
│   ├── plugins/           # Vue plugins
│   ├── stores/            # Pinia stores
│   ├── utils/             # Utilities (notify, loading, api, etc.)
│   └── index.ts           # Main entry point
├── playground/            # Development playground
│   ├── src/
│   │   ├── views/         # Example views
│   │   └── App.vue        # Playground app
│   └── public/
│       └── theme.json     # Example theme config
├── tests/                 # Unit tests
└── dist/                  # Built library (generated)
```

### Using the Playground

The playground is a full Vue 3 application where you can:
- Test all components in real-time
- Preview theme changes instantly
- Test utilities (notify, loading, confirm)
- Experiment with different configurations
- View component examples

To add new examples to the playground, edit `playground/src/views/ComponentsView.vue`.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please use the [GitHub Issues](https://github.com/wallaceSW11/BaseLib/issues) page.

```bash
npm install wallacesw11/BaseLib#main
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [wallaceSW11](https://github.com/wallaceSW11)

## 🔗 Links

- [GitHub Repository](https://github.com/wallaceSW11/BaseLib)
- [Issues](https://github.com/wallaceSW11/BaseLib/issues)

## 💡 Best Practices

1. **Tree Shaking**: Import only what you need for optimal bundle size
   ```typescript
   import { PrimaryButton } from "@wallacesw11/base-lib/components";
   ```

2. **Type Safety**: Use TypeScript for better IntelliSense and error checking

3. **Theme Consistency**: Use the built-in theme system for consistent UI

4. **Lazy Loading**: Consider lazy loading components when appropriate
   ```typescript
   const PrimaryButton = defineAsyncComponent(() =>
     import("@wallacesw11/base-lib/components").then(m => m.PrimaryButton)
   );
   ```

## 🐛 Troubleshooting

### Module not found

Make sure you have installed all peer dependencies and the library is properly installed.

### Type errors

Ensure your `tsconfig.json` is properly configured and TypeScript version is compatible (^5.0.0).

### Theme not persisting

The theme system uses localStorage. Make sure your browser allows localStorage access.

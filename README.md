# @wallacesw11/base-lib

[![npm version](https://img.shields.io/npm/v/@wallacesw11/base-lib.svg)](https://www.npmjs.com/package/@wallacesw11/base-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Reusable Vue 3 components and utilities library with TypeScript, Vuetify, i18n, and Pinia support.

## 🎮 Playground

A BaseLib inclui um **Playground interno** para desenvolvimento e testes! Você pode testar todos os componentes sem precisar de projetos externos.

```bash
# Iniciar o playground
pnpm dev:playground
```

Veja mais detalhes em [playground/README.md](./playground/README.md)

## 🚀 Features

- **Vue 3 Composition API** - Modern and reactive components
- **TypeScript** - Full type safety and IntelliSense
- **Vuetify 3** - Material Design components integration
- **i18n** - Internationalization support with vue-i18n
- **Pinia** - State management stores
- **Theme System** - Dynamic theme switching with persistence
- **Modular Exports** - Tree-shakeable imports
- **Utilities** - Loading, notifications, confirmations, and API helpers

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

Make sure you have the following peer dependencies installed:

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

```typescript
import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupLib } from "@wallacesw11/base-lib";
import App from "./App.vue";

const app = createApp(App);

// Setup Pinia (required for stores)
app.use(createPinia());

// Setup the library (registers components and plugins)
setupLib(app);

app.mount("#app");
```

### 3. Import Styles (if needed)

```typescript
// In your main.ts or main CSS file
import "@wallacesw11/base-lib/dist/index.css";
```

## 📚 Usage

### Importing Components

```vue
<script setup lang="ts">
import { PrimaryButton, SecondaryButton } from "@wallacesw11/base-lib";
// or from specific path
import { PrimaryButton } from "@wallacesw11/base-lib/components";
</script>

<template>
  <PrimaryButton @click="handleClick">Click me</PrimaryButton>
</template>
```

### Using Utilities

```typescript
import { notify, loading, confirm, api } from "@wallacesw11/base-lib";

// Show notification
notify.success("Operation completed!");
notify.error("Something went wrong");
notify.info("Information message");
notify.warning("Warning message");

// Show loading overlay
loading.show();
setTimeout(() => loading.hide(), 2000);

// Show confirmation dialog
const confirmed = await confirm.show({
  title: "Confirm Action",
  message: "Are you sure you want to proceed?",
});

// API calls with axios instance
const response = await api.get("/users");
```

### Using Composables

```vue
<script setup lang="ts">
import { useGlobals, useThemeSync } from "@wallacesw11/base-lib/composables";

const { notify, loading, confirm } = useGlobals();

// Sync theme with external source
const { syncTheme } = useThemeSync();
await syncTheme("https://example.com/theme.json");
</script>
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
- `PrimaryButton` - Primary action button
- `SecondaryButton` - Secondary action button
- `TertiaryButton` - Tertiary action button
- `QuartenaryButton` - Quaternary action button
- `IconToolTip` - Icon button with tooltip

### UI Components
- `ThemeToggle` - Theme switcher component
- `LanguageSelector` - Language selector with flags
- `LoadingOverlay` - Full-screen loading overlay
- `ModalBase` - Base modal component
- `ConfirmDialog` - Confirmation dialog
- `FloatingNotify` - Floating notification

## 🛠️ Utilities

- **notify** - Notification system (success, error, info, warning)
- **loading** - Loading overlay control (show, hide)
- **confirm** - Confirmation dialog system
- **api** - Pre-configured Axios instance

## 🎨 Theming

The library includes a built-in theme system with:
- Light/Dark mode support
- Theme persistence in localStorage
- Dynamic theme switching
- Vuetify integration

## 🌍 Locales

Default locales included:
- `pt-BR` - Portuguese (Brazil)
- `en-US` - English (United States)

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

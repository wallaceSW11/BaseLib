# Architecture

## Folder structure

```
src/
  components/       ─ Reusable Vue components
    buttons/        ─ Button variants (BaseButton, PrimaryButton, etc.)
    inputs/         ─ Form inputs (CepField, EmailField, MoneyField, etc.)
    layout/         ─ App shell components (LoadingOverlay)
    modals/         ─ Modal dialogs (ModalBase)
    messages/       ─ Notification/confirm (FloatingNotify, ConfirmDialog, CustomConfirmDialog)
    index.ts        ─ Barrel — exports every component

  composables/      ─ Vue composables
    useBreakpoint   ─ Responsive breakpoints
    useGlobals      ─ Access $notify/$loading/$confirm from setup
    useLoading      ─ Reactive loading state (isActive, message, show, hide)

  stores/           ─ Pinia stores (setup function style)
    theme           ─ Dark/light mode + localStorage

  utils/            ─ Pure utility functions, no Vue dependency
    notify.ts       ─ Global notification singleton
    loading.ts      ─ Global loading singleton (wraps useLoading)
    confirm.ts      ─ Global confirm dialog singleton
    api.ts          ─ Axios wrapper
    types.ts        ─ Shared types and constants
    vuetify-check.ts

  plugins/          ─ Vue plugins
    globals.ts      ─ Registers $notify, $loading, $confirm on app

  index.ts          ─ Main entry point
```

## Component pattern

### Props down, Events up

```
parent template:
  <LoadingOverlay :is-loading="state.isActive" :message="state.message" />

parent script:
  const state = useLoading()
  state.show('Saving...')   // sets isActive = true
  state.hide()              // sets isActive = false
```

- **Props** control component state (isLoading, message, delay)
- **Events** communicate back to parent (update:modelValue, click, etc.)
- **No defineExpose** for imperative control — use composables or props

### LoadingOverlay flow

1. Consumer calls `loading.show('msg')` or uses `useLoading()` composable
2. Reactive state (`isActive`) is bound via `:is-loading` prop
3. Component renders overlay immediately (fade transition)
4. Content (spinner + text) appears after 300ms delay (delayed transition)
5. On `hide()`, overlay fades out + timeout is cleaned up

### Theme system

- `useThemeStore` only tracks `isDark` + localStorage persistence
- No custom theme config, no logo, no favicon, no /theme.json
- Vuetify's built-in `useTheme()` handles all color application
- Consumers configure colors via Vuetify options:
  ```ts
  vuetify({ theme: { themes: { light: { colors: { primary: '#00008B' } } } } })
  ```

### Global utilities

- `notify.show()`, `loading.show()`, `confirm()` are singletons
- Available via `$notify`, `$loading`, `$confirm` in templates
- Or via `useGlobals()` composable in script setup
- Internally use composables, not component refs

## Labels

- All UI labels are hardcoded in pt-BR
- No i18n system, no vue-i18n dependency
- Every component accepts props to override labels

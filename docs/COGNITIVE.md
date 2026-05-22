# Cognitive System — Design Decisions

## What was removed and why

| Removed | Why |
|---------|-----|
| `vue-i18n` (peer dep) | Every label already overridable via props. Dead weight for consumers. |
| `src/locales/` (en-US, pt-BR) | Labels hardcoded in pt-BR. No need for translation files in a component lib. |
| `useLocale` composable | No i18n → no locale switching needed. |
| `LanguageSelector` component | No i18n → no language picker needed. |
| `ThemeToggle` component | Opinionated UI. Consumers can toggle with `vuetify.theme.global.name.value = 'dark'`. |
| `useThemeSync` composable | Vuetify handles theme natively. Custom sync was redundant. |
| `ThemeConfig` interface + theme.json | Domain-specific (app name, logo, favicon, copyright). Not a lib concern. |
| `LoadingComponentRef` type | Replaced by `useLoading()` composable — no more template ref + Pinia store hack. |
| `defineExpose({ show, hide })` in LoadingOverlay | Replaced by `:is-loading` prop (Props down, Events up). |
| `CepField` (renamed to `ZipCodeField`) | Renamed for english naming consistency. Refactored: `any` → typed rules, `searching` → `isSearching`, `!!hint` → `hasHint` computed, if/else → early return, added AbortController, exported interface with english field names. |
| Testes colados em `__tests__/` | Padrão da indústria pra component libraries. Testes ficam junto do arquivo que testam, não em pasta raiz. Primeiro teste: `useLoading` (lógica pura). |
| `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `QuartenaryButton` | 68 lines of prop-forwarding boilerplate. Consumers use `<v-btn>` directly. |
| `BaseButton` | Thin wrapper around `<v-btn>` adding only `class="text-none"`. Not enough value to justify being in the library. Consumers configure text-transform globally or per-btn. |

### 8. defineExpose still valid for Promise-based dialogs

`ConfirmDialog` / `CustomConfirmDialog` use `defineExpose` because the confirm flow is inherently imperative:
1. Consumer calls `confirmDialog(title, message, options)`
2. Returns `Promise<boolean>`
3. Promise resolves when user clicks a button

This is the standard for confirm/prompt dialogs in Vue ecosystem. The method is named in camelCase (`confirmDialog`) and the component ref type is `ConfirmComponentRef`.

### 9. CustomConfirmDialog uses Vuetify `v-card` internally

Refactored from a fully custom HTML/CSS dialog to use Vuetify's `v-card`, `v-card-title`, `v-card-text`, `v-card-actions`. This eliminates ~120 lines of custom CSS (padding, typography, shadows, flexbox) in favor of Vuetify utility classes.

CSS that remains: overlay positioning (`position: fixed` + inset) and Vue transition classes. These have no Vuetify equivalent.

### 10. confirm.ts refactored to Composition API (Pinia)

`useConfirmStore` was migrated from Options API (`defineStore` with `state`/`actions` object) to Composition API style (`defineStore` with setup function), matching the project convention.

### 11. Exposed method renamed: `ConfirmDialog` → `confirmDialog`

The `defineExpose` method on both `CustomConfirmDialog` and `ConfirmDialog` was renamed from PascalCase `ConfirmDialog` to camelCase `confirmDialog` to follow JavaScript naming conventions for functions. The `ConfirmComponentRef` interface in `types.ts` was updated accordingly.

## Key decisions

### 1. Code in english, UI labels in pt-BR

Code, types, tests, docs, and commits are all in english. Only UI labels/messages (shown to end users) are hardcoded in pt-BR as fallback defaults — every component accepts props to override them. i18n was removed entirely since consumers control labels via props.

### 2. Composables over defineExpose

LoadingOverlay used to expose `show()`/`hide()` via `defineExpose`, and a Pinia store held a template ref to call them. This was an imperative anti-pattern. Now:
- `useLoading()` composable creates reactive state
- LoadingOverlay receives state via `:is-loading` prop
- Global `loading` utility is a singleton of the composable

Same pattern applies to notify and confirm.

### 3. Vuetify handles themes

Custom theme management (loading /theme.json, syncing colors, swapping favicons, dispatching custom events) was fighting Vuetify's built-in theme system. Now the store only tracks `isDark` — Vuetify does the rest.

### 4. No button wrappers — use `v-btn` directly

Every major Vue library ships a single button with props. Wrapping `v-btn` just to preset `color` + `variant` adds zero value. Even `BaseButton` added only `class="text-none"` — not enough to justify a component in the library.

Consumers use `v-btn` directly, configuring text-transform globally if needed:

```vue
<v-btn color="primary" variant="elevated">Save</v-btn>
<v-btn color="secondary" variant="outlined">Cancel</v-btn>
```

`IconToolTip` is kept because it solves a real ergonomic problem — wrapping Vuetify's `v-tooltip > v-btn` nesting pattern. That's actual value.

### 5. One-liner if without braces

```ts
// CORRECT
if (!loading) return;
if (!el.value) throw new Error('not found');

// WRONG — unnecessary braces
if (!loading) {
  return;
}
```

Only use braces when the `if` body has multiple statements.

### 5. Early return, never if/else

```ts
// CORRECT
watch(() => props.isLoading, (val) => {
  if (val) {
    startTimer();
    return;
  }
  stopTimer();
});

// WRONG
watch(() => props.isLoading, (val) => {
  if (val) {
    startTimer();
  } else {
    stopTimer();
  }
});
```

### 6. dist/ is gitignored

Build artifacts are not committed. `prepublishOnly` builds fresh on `npm publish`.

### 7. 100% coverage — no exceptions

All `src/` files must reach 100% coverage (statements, branch, functions, lines). If a branch is unreachable, remove it — code morto não deve existir.

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
| `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `QuartenaryButton` | 68 lines of prop-forwarding boilerplate. Consumers use `<v-btn>` directly. |
| `BaseButton` | Thin wrapper around `<v-btn>` adding only `class="text-none"`. Not enough value to justify being in the library. Consumers configure text-transform globally or per-btn. |

## Key decisions

### 1. Labels in pt-BR, no i18n

Every component accepts props to override text. i18n was only used as a fallback default — the fallback itself was dead code. Hardcoding pt-BR removes a peer dep and a crash vector (components that didn't guard `useI18n()` with try/catch would crash).

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

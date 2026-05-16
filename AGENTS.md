# @wallacesw11/base-lib

Reusable Vue 3 + TypeScript + Vuetify 3 component library.

## Commands

- **Build**: `pnpm build` — generates `dist/` with types and ES modules
- **Dev**: `pnpm dev` — build in watch mode
- **Lint**: `pnpm lint` — eslint with auto fix
- **Test**: `pnpm test` — vitest run
- **Test watch**: `pnpm test:watch` — iterative mode
- **Playground**: `pnpm dev:playground` — visual test environment

## Verification after changes

Always run in this order:
0. Load `code-review` skill and run through the checklist
1. `pnpm lint` — zero warnings
2. `pnpm build` — clean build, no type errors

## Documentation

Before reading source files, check `docs/` for architecture and decisions:
- `docs/ARCHITECTURE.md` — Folder structure, component patterns, data flow
- `docs/COGNITIVE.md` — Design decisions, what was removed and why

### Auto-learning rule

After every significant change (refactor, new component, removed dep), update the docs to reflect the new reality. Keep ARCHITECTURE.md and COGNITIVE.md in sync with the codebase.

## Structure

```
src/
  components/       ← Reusable Vue components
    buttons/        ← Button variants (BaseButton, PrimaryButton, etc.)
    inputs/         ← Form inputs (CepField, EmailField, MoneyField, etc.)
    layout/         ← App shell components (LoadingOverlay)
    modals/         ← Modal dialogs (ModalBase)
    messages/       ← Notification/confirm (FloatingNotify, ConfirmDialog, CustomConfirmDialog)
    index.ts        ← Barrel — exports every component

  composables/      ← Vue composables (useBreakpoint, useGlobals, useLoading)

  stores/           ← Pinia stores (setup function style)
    theme           ← Dark/light mode + localStorage only

  utils/            ← Pure utility functions, no Vue dependency
    notify.ts       ← Global notify singleton
    loading.ts      ← Global loading singleton
    confirm.ts      ← Global confirm singleton
    api.ts          ← Axios wrapper
    types.ts        ← Shared types and constants

  plugins/          ← Vue plugins (globalsPlugin)
  index.ts          ← Main entry point
```

## Stack

- Vue 3.5+ (Composition API, `<script setup>`)
- TypeScript 5.9+ (strict mode)
- Vuetify 3 (peer dependency)
- Pinia 3 (peer dependency, setup stores)
- Vite 7 (build/bundler)
- Vitest 4 (tests)
- ESLint 9 (flat config)

## Conventions

- **Components**: PascalCase (`ModalBase.vue`, `MoneyField.vue`)
- **Composables**: `use` prefix (`useBreakpoint.ts`)
- **Stores**: `use` prefix, composition API style
- **Interfaces**: exported for consumers (`ModalAction`, `Address`)
- **Props**: sensible defaults with `withDefaults`
- **CSS**: Vuetify utilities first, scoped CSS only when necessary (see `docs/ARCHITECTURE.md` for reference table)
- **Peer deps**: Never in bundle — external in `vite.config.ts`
- **Labels**: pt-BR hardcoded, no i18n. Every component accepts props to override.

## Code style (required)

- async/await always — never .then().catch()
- Zero logic in template — computed/methods
- Early return — no `if/else`, always early return instead
- Self-documenting names — zero comments
- `const`/`let` — never `var`
- Type everything — never `any`
- Booleans with is/has/can prefix (`isValid`, `hasError`, `canSave`)
- Single quotes (`'`) always, never double quotes (`"`)
- Semicolons (`;`) required at the end of every statement
- Blank line before and after `if`/`for`/`while` blocks
- One-line if without braces when single statement
- Never `!important` in CSS

## Library rules

- Generic components, no domain-specific business logic
- Every new component: export via barrel file + unit test
- Peer dependencies external in build
- Types exported alongside components
- Labels in pt-BR, overrideable via props
- No `defineExpose` for imperative control — use composables + props
- Consumers control colors via Vuetify theme config, not custom stores

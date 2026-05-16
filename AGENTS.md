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

## Structure

```
src/
  components/       ← Reusable Vue components (buttons, inputs, modals, messages)
  composables/      ← Vue composables (useBreakpoint, useGlobals, etc.)
  stores/           ← Pinia stores (setup function style)
  utils/            ← Pure utility functions (notify, confirm, api, types)
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
- **CSS**: Vuetify utilities first, scoped CSS only when necessary
- **Peer deps**: Never in bundle — external in `vite.config.ts`

## Code style (required)

- async/await always — never .then().catch()
- Zero logic in template — computed/methods
- Early return — no nested if/else
- Self-documenting names — zero comments
- `const`/`let` — never `var`
- Type everything — never `any`
- Booleans with is/has/can prefix (`isValid`, `hasError`, `canSave`)
- Single quotes (`'`) always, never double quotes (`"`)
- Semicolons (`;`) required at the end of every statement
- Blank line before and after `if`/`for`/`while` blocks
- Never `!important` in CSS

## Library rules

- Generic components, no domain-specific business logic
- Every new component: export via barrel file + unit test
- Peer dependencies external in build
- Types exported alongside components
- `pnpm lint && pnpm build && pnpm test` before considering done

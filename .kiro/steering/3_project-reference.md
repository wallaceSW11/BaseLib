---
inclusion: manual
---

# Project Reference — @wallacesw11/base-lib

## O que é

Biblioteca Vue 3 de componentes e utilitários reutilizáveis com TypeScript e Vuetify.
Publicada como pacote npm. Consumida por outros projetos via `setupLib(app)`.

## Stack

- Vue 3.5+ (Composition API, `<script setup>`)
- TypeScript 5.9+
- Vuetify 3.11+ (peer dependency)
- Pinia 3+ (peer dependency)
- vue-i18n 11+ (peer dependency)
- Vite 7+ (build)
- maska 3+ (máscaras de input)

## Estrutura

```
src/
├── components/
│   ├── buttons/       # BaseButton, PrimaryButton, SecondaryButton, TertiaryButton, QuartenaryButton, IconToolTip
│   ├── inputs/        # MoneyField, EmailField, NumberField, PhoneField, CepField, FullAddress
│   ├── messages/      # ConfirmDialog, CustomConfirmDialog, FloatingNotify
│   ├── modals/        # ModalBase
│   ├── LanguageSelector.vue
│   ├── LoadingOverlay.vue
│   └── ThemeToggle.vue
├── composables/       # useBreakpoint, useGlobals, useLocale, useThemeSync
├── locales/           # en-US.ts, pt-BR.ts
├── plugins/           # globals plugin
├── stores/            # theme store
└── utils/             # api, confirm, loading, notify, types, vuetify-check

playground/            # app Vue para testar os componentes localmente
```

## Entry point

```ts
import { setupLib } from '@wallacesw11/base-lib';
app.use(setupLib); // registra componentes + plugins
```

Exports individuais disponíveis via subpaths:
`/components`, `/composables`, `/utils`, `/stores`, `/locales`, `/plugins`

## Convenções

| Tipo        | Padrão         | Exemplo              |
|-------------|----------------|----------------------|
| Componentes | PascalCase.vue | `PhoneField.vue`     |
| Composables | camelCase.ts   | `useBreakpoint.ts`   |
| Utils       | camelCase.ts   | `notify.ts`          |
| Stores      | camelCase.ts   | `theme.ts`           |
| Locales     | kebab-case.ts  | `pt-BR.ts`           |

## Scripts

```bash
pnpm dev              # build watch (lib)
pnpm dev:playground   # playground dev server
pnpm build            # build produção
pnpm test             # vitest run
pnpm lint             # eslint
```

## Notas

- Vuetify, Pinia e vue-i18n são peerDependencies — não bundleados
- `ensureVuetify` valida se Vuetify está instalado no app consumidor
- Playground em `playground/` serve para desenvolvimento e visualização dos componentes

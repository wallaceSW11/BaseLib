# 🎮 BaseLib Playground

Ambiente de desenvolvimento e testes interno para a BaseLib.

## 🎯 Propósito

O Playground permite testar e desenvolver componentes da BaseLib sem precisar de projetos externos. Você pode:

- ✅ Testar componentes em tempo real
- ✅ Ver mudanças instantaneamente (Hot Reload)
- ✅ Importar diretamente da pasta `src/` sem builds
- ✅ Desenvolver novos componentes com feedback visual imediato

## 🚀 Como Usar

### Iniciar o Playground

```bash
# Na raiz da BaseLib
pnpm dev:playground
```

O playground irá abrir automaticamente em `http://localhost:3000`

### Estrutura

```
playground/
├── public/           # Arquivos estáticos
│   └── theme.json   # Configuração de tema
├── src/
│   ├── views/       # Páginas de teste
│   ├── plugins/     # Configuração Vuetify e i18n
│   ├── styles/      # Estilos do playground
│   ├── App.vue      # App principal
│   ├── main.ts      # Entry point
│   └── router.ts    # Rotas
├── index.html       # HTML base
└── vite.config.ts   # Configuração Vite
```

## 📝 Adicionando Testes

1. Edite `src/views/ComponentsView.vue`
2. Importe o componente que quer testar de `@/components`
3. Adicione uma nova seção com exemplos de uso
4. Salve e veja as mudanças instantaneamente!

## 🔧 Importações

No playground, você importa diretamente da pasta `src/`:

```typescript
// Componentes
import { PrimaryButton, ModalBase } from '@/components'

// Utilitários
import { notify, confirm, loading } from '@/utils'

// Composables
import { useThemeSync, useGlobals } from '@/composables'

// Stores
import { useThemeStore } from '@/stores'
```

O alias `@/` aponta para a pasta `src/` da BaseLib.

## 🎨 Customização

Edite `public/theme.json` para testar diferentes configurações de tema.

## 📦 Build (Opcional)

Para gerar um build do playground:

```bash
pnpm build:playground
```

O build será criado em `playground/dist/`

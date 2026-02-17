# 📦 Guia de Otimização de Bundle

## 🎯 Como Reduzir o Tamanho do Bundle

Este guia mostra como usar a `@wallacesw11/base-lib` de forma otimizada para minimizar o tamanho do bundle final do seu projeto.

## 🔍 Entendendo o Bundle

A biblioteca está configurada com **code splitting automático**, o que significa que:
- ✅ Cada componente é um chunk separado
- ✅ Apenas os componentes que você importa são incluídos no bundle
- ✅ Tree-shaking automático remove código não utilizado

## 📊 Comparação de Abordagens

### ❌ Abordagem Pesada (NÃO RECOMENDADO)
```typescript
// main.ts
import { setupLib } from '@wallacesw11/base-lib'

setupLib(app) // Registra TODOS os componentes globalmente
```
**Resultado**: ~650 KB de componentes (todos incluídos)

### ✅ Abordagem Otimizada (RECOMENDADO)
```typescript
// main.ts
import { registerLibPlugins } from '@wallacesw11/base-lib'

registerLibPlugins(app) // Apenas utilitários globais ($notify, $loading, $confirm)
```

```vue
<!-- Nos componentes que precisam -->
<script setup lang="ts">
import { PrimaryButton, SecondaryButton } from '@wallacesw11/base-lib'
</script>

<template>
  <PrimaryButton text="Save" />
  <SecondaryButton text="Cancel" />
</template>
```
**Resultado**: ~50-100 KB (apenas os componentes usados)

## 🚀 Estratégias de Otimização

### 1. Importação Seletiva de Componentes

**Ao invés de registrar tudo globalmente:**
```typescript
// ❌ Pesado
setupLib(app)
```

**Importe apenas o que precisa:**
```typescript
// ✅ Otimizado
import { PrimaryButton, ModalBase, FloatingNotify } from '@wallacesw11/base-lib'

// Registre apenas os componentes que você usa em TODOS os lugares
app.component('PrimaryButton', PrimaryButton)
app.component('FloatingNotify', FloatingNotify)
```

### 2. Importação Local vs Global

**Componentes usados em muitos lugares** → Registre globalmente:
```typescript
// main.ts
app.component('PrimaryButton', PrimaryButton)
app.component('SecondaryButton', SecondaryButton)
```

**Componentes usados em poucos lugares** → Importe localmente:
```vue
<script setup lang="ts">
// Apenas neste componente
import { ModalBase } from '@wallacesw11/base-lib'
</script>
```

### 3. Lazy Loading de Componentes Pesados

Para componentes grandes usados raramente:
```typescript
// router.ts
const routes = [
  {
    path: '/admin',
    component: () => import('./views/AdminView.vue'), // Lazy load da view
  }
]
```

```vue
<!-- AdminView.vue -->
<script setup lang="ts">
// Componentes pesados só carregam quando a rota é acessada
import { CustomConfirmDialog, ModalBase } from '@wallacesw11/base-lib'
</script>
```

### 4. Importação Seletiva de Locales

**Ao invés de importar todos os locales:**
```typescript
// ❌ Pesado
import { defaultMessages } from '@wallacesw11/base-lib/locales'
```

**Importe apenas o locale que você usa:**
```typescript
// ✅ Otimizado
import { ptBR } from '@wallacesw11/base-lib/locales'

const i18n = createI18n({
  locale: 'pt-BR',
  messages: {
    'pt-BR': ptBR
  }
})
```

### 5. Configuração do Vite para Tree-Shaking

Certifique-se de que seu `vite.config.ts` está otimizado:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa vendor chunks grandes
          'vue-vendor': ['vue', 'pinia', 'vue-i18n'],
          'vuetify': ['vuetify'],
        }
      }
    }
  }
})
```

## 📋 Checklist de Otimização

- [ ] Usar `registerLibPlugins()` ao invés de `setupLib()`
- [ ] Importar componentes individualmente
- [ ] Registrar globalmente apenas componentes muito usados
- [ ] Usar lazy loading para rotas/componentes pesados
- [ ] Importar apenas os locales necessários
- [ ] Configurar code splitting no Vite
- [ ] Analisar bundle com `vite-bundle-visualizer`

## 🔧 Analisando Seu Bundle

Instale o visualizador de bundle:
```bash
pnpm add -D rollup-plugin-visualizer
```

Configure no `vite.config.ts`:
```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    visualizer({ open: true }) // Abre relatório após build
  ]
})
```

Execute o build:
```bash
pnpm build
```

Isso vai gerar um arquivo `stats.html` mostrando exatamente o que está no seu bundle.

## 📊 Tamanhos Esperados

Com otimizações corretas:

| Componentes Usados | Bundle Esperado |
|-------------------|-----------------|
| 1-2 componentes   | ~30-50 KB       |
| 3-5 componentes   | ~50-100 KB      |
| 6-10 componentes  | ~100-200 KB     |
| Todos (setupLib)  | ~650 KB         |

**Nota**: Esses valores NÃO incluem o Vuetify, que é gerenciado separadamente pelo seu projeto.

## 🎯 Exemplo Completo Otimizado

```typescript
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { registerLibPlugins, PrimaryButton, SecondaryButton, FloatingNotify, LoadingOverlay, ConfirmDialog } from '@wallacesw11/base-lib'
import { ptBR } from '@wallacesw11/base-lib/locales'
import '@wallacesw11/base-lib/style.css'

const app = createApp(App)

// Pinia
app.use(createPinia())

// Vuetify
app.use(createVuetify())

// i18n (apenas pt-BR)
app.use(createI18n({
  locale: 'pt-BR',
  messages: { 'pt-BR': ptBR }
}))

// BaseLib - apenas plugins globais
registerLibPlugins(app)

// Registra apenas componentes muito usados
app.component('PrimaryButton', PrimaryButton)
app.component('SecondaryButton', SecondaryButton)
app.component('FloatingNotify', FloatingNotify)
app.component('LoadingOverlay', LoadingOverlay)
app.component('ConfirmDialog', ConfirmDialog)

app.mount('#app')
```

## 🆘 Problemas Comuns

### "Componente não encontrado"
Se você remover `setupLib()` e não registrar os componentes:
```
Failed to resolve component: PrimaryButton
```

**Solução**: Registre o componente globalmente ou importe localmente.

### Bundle ainda grande
1. Verifique se está usando `setupLib()` (remove isso)
2. Use o visualizer para ver o que está no bundle
3. Certifique-se de que está importando apenas o necessário

## 📚 Recursos Adicionais

- [Vite Code Splitting](https://vitejs.dev/guide/build.html#chunking-strategy)
- [Vue Tree Shaking](https://vuejs.org/guide/best-practices/performance.html#tree-shaking)
- [Vuetify Tree Shaking](https://vuetifyjs.com/en/features/treeshaking/)

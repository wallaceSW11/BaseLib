# 🔧 Troubleshooting: v-select dentro de ModalBase

## ⚠️ Problema Conhecido

Se você está usando `v-select` (ou outros componentes com overlay como `v-menu`, `v-autocomplete`) dentro do `ModalBase` e o **dropdown não aparece**, aqui estão as soluções:

---

## ✅ Solução 1: Usar prop `attach` no ModalBase (Recomendado)

Force o modal a se anexar ao `body`:

```vue
<template>
  <ModalBase 
    v-model="showModal" 
    attach="body"
    title="Selecione uma opção"
  >
    <v-select
      v-model="selected"
      :items="items"
      label="Escolha"
    />
  </ModalBase>
</template>
```

**Por que funciona?** Isso garante que o modal e seus overlays sejam renderizados no mesmo contexto DOM.

---

## ✅ Solução 2: Adicionar `attach` no próprio v-select

```vue
<v-select
  v-model="selected"
  :items="items"
  label="Escolha"
  attach
/>
```

Ou especificamente ao body:

```vue
<v-select
  v-model="selected"
  :items="items"
  label="Escolha"
  attach="body"
/>
```

---

## ✅ Solução 3: Usar `menu-props`

Configure o menu interno do v-select:

```vue
<v-select
  v-model="selected"
  :items="items"
  label="Escolha"
  :menu-props="{ attach: true }"
/>
```

---

## 🔍 Debug: Verificar múltiplas instâncias do Vuetify

Execute no console do navegador ou no `mounted()` do seu componente:

```typescript
import { debugVuetifyInstances } from '@wallacesw11/base-lib'

// No mounted ou em qualquer lugar
debugVuetifyInstances()
```

Isso mostrará:
- Quantos `.v-overlay-container` existem (deve ser 1)
- Quantos overlays estão ativos
- Se há múltiplas instâncias do Vuetify

---

## 🧪 Checklist de Diagnóstico

Execute esta checklist se o problema persistir:

### 1. Verificar ordem de registro no `main.ts`

```typescript
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { setupLib } from '@wallacesw11/base-lib'

const app = createApp(App)

// ✅ CORRETO: Vuetify ANTES da BaseLib
app.use(createVuetify())
setupLib(app)

app.mount('#app')
```

### 2. Verificar importação de estilos

Certifique-se de importar os estilos do Vuetify no seu projeto:

```typescript
// main.ts ou main.css
import 'vuetify/styles'
import '@wallacesw11/base-lib/dist/base-lib.css'
```

### 3. Verificar se há v-app no root

```vue
<!-- App.vue -->
<template>
  <v-app>
    <router-view />
    
    <!-- Componentes globais -->
    <FloatingNotify ref="notifyRef" />
    <LoadingOverlay ref="loadingRef" />
    <ConfirmDialog ref="confirmRef" />
  </v-app>
</template>
```

### 4. Limpar cache completamente

```bash
# Limpar cache do pnpm
pnpm store prune

# Remover node_modules e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Limpar build
rm -rf dist .vite
```

### 5. Verificar versões compatíveis

```json
{
  "dependencies": {
    "vue": "^3.5.0",
    "vuetify": "^3.7.0",
    "@wallacesw11/base-lib": "wallacesw11/BaseLib#main"
  }
}
```

---

## 🎯 Exemplo Completo Funcionando

**main.ts:**
```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@wallacesw11/base-lib/dist/base-lib.css'
import { setupLib, defaultMessages, defaultLocale } from '@wallacesw11/base-lib'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

const vuetify = createVuetify({
  theme: { defaultTheme: 'light' }
})
app.use(vuetify)

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  messages: defaultMessages,
})
app.use(i18n)

setupLib(app)

app.mount('#app')
```

**Componente usando ModalBase:**
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ModalBase } from '@wallacesw11/base-lib'

const showModal = ref(false)
const selected = ref('')
const items = ['Opção 1', 'Opção 2', 'Opção 3']
</script>

<template>
  <v-btn @click="showModal = true">Abrir Modal</v-btn>

  <ModalBase 
    v-model="showModal"
    attach="body"
    title="Selecione uma opção"
    :persistent="false"
  >
    <v-select
      v-model="selected"
      :items="items"
      label="Escolha uma opção"
      variant="outlined"
    />
    
    <div class="mt-4">
      Selecionado: {{ selected }}
    </div>
  </ModalBase>
</template>
```

---

## 📞 Ainda não funciona?

Se após seguir todos os passos acima o problema persistir:

1. Execute `debugVuetifyInstances()` no console
2. Verifique no DevTools se há erros no console
3. Inspecione no Elements se o `.v-overlay-container` existe
4. Abra uma issue no repositório com:
   - Output do `debugVuetifyInstances()`
   - Versões do Vue e Vuetify
   - Screenshot do problema

---

## 🔬 Causa Técnica

O problema ocorre porque componentes com overlay (v-select, v-menu, v-autocomplete, etc.) injetam seu conteúdo em `.v-overlay-container`. Se houver múltiplas instâncias do Vuetify ou se o contexto DOM estiver incorreto, o overlay pode ser renderizado em um container diferente ou inexistente, tornando-o invisível.

A prop `attach` força o componente a anexar seu overlay a um elemento específico (como `body`), garantindo que ele seja renderizado no contexto correto.

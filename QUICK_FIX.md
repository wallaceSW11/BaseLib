# 🚀 Guia Rápido de Atualização

## Para resolver o problema do v-select no ModalBase:

### 1️⃣ Atualize a biblioteca no seu projeto

```bash
# Limpar cache
pnpm store prune

# Reinstalar a lib com as correções
pnpm add wallacesw11/BaseLib#main --force

# Limpar node_modules se necessário
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 2️⃣ Use a prop `attach` no ModalBase

**ANTES (não funciona):**
```vue
<ModalBase v-model="showModal" title="Selecionar">
  <v-select v-model="selected" :items="items" />
</ModalBase>
```

**DEPOIS (funciona!):**
```vue
<ModalBase v-model="showModal" title="Selecionar" attach="body">
  <v-select v-model="selected" :items="items" />
</ModalBase>
```

### 3️⃣ (Opcional) Debug se ainda não funcionar

```typescript
import { debugVuetifyInstances } from '@wallacesw11/base-lib'

// No mounted() ou console
onMounted(() => {
  debugVuetifyInstances()
})
```

---

## ✅ O que foi adicionado na lib:

1. ✅ Prop `attach` no ModalBase para controlar onde o dialog é renderizado
2. ✅ Prop `contentClass` para customização CSS
3. ✅ Helper `debugVuetifyInstances()` para diagnóstico
4. ✅ Verificação automática de Vuetify no `setupLib()`
5. ✅ Documentação completa em TROUBLESHOOTING.md

---

## 📝 Exemplo Completo

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ModalBase } from '@wallacesw11/base-lib'

const showModal = ref(false)
const selected = ref('')
const items = [
  { title: 'Opção 1', value: 'opt1' },
  { title: 'Opção 2', value: 'opt2' },
  { title: 'Opção 3', value: 'opt3' },
]

const actions = [
  {
    text: 'Cancelar',
    color: 'grey',
    handler: () => { showModal.value = false }
  },
  {
    text: 'Confirmar',
    color: 'primary',
    variant: 'elevated',
    handler: () => {
      console.log('Selecionado:', selected.value)
      showModal.value = false
    }
  }
]
</script>

<template>
  <div>
    <v-btn @click="showModal = true">
      Abrir Modal com Select
    </v-btn>

    <ModalBase 
      v-model="showModal"
      attach="body"
      title="Selecione uma opção"
      :actions="actions"
      :persistent="false"
    >
      <v-select
        v-model="selected"
        :items="items"
        label="Escolha uma opção"
        variant="outlined"
        item-title="title"
        item-value="value"
      />
      
      <div v-if="selected" class="mt-4 text-grey">
        Valor selecionado: <strong>{{ selected }}</strong>
      </div>
    </ModalBase>
  </div>
</template>
```

---

## 🎯 Isso deve resolver!

Se ainda tiver problemas:
1. Verifique se `app.use(vuetify)` é chamado ANTES de `setupLib(app)`
2. Execute `debugVuetifyInstances()` no console
3. Veja TROUBLESHOOTING.md para mais opções

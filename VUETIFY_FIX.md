# 🔧 Fix: Vuetify Double Instance Issue

## 🐛 Problema Resolvido

Foi identificado e corrigido um bug crítico onde componentes do Vuetify (especialmente `v-select` dentro de `v-dialog`) não renderizavam corretamente quando a biblioteca era instalada via GitHub em outros projetos.

### Sintomas

- ✅ Funcionava localmente no playground
- ❌ `v-select` não exibia dropdown quando usado via lib instalada
- ❌ Dados estavam presentes, mas overlay/menu não aparecia
- ❌ Problema específico com componentes que usam overlay (`v-select`, `v-menu`, etc.)

### Causa Raiz

**Duas instâncias do Vuetify sendo criadas:**

1. Uma instância dentro da biblioteca (via `vite-plugin-vuetify`)
2. Outra instância no projeto host

Quando o `v-select` tentava abrir o menu, procurava o container `.v-overlay-container` na instância errada, causando a não-renderização visual.

## ✅ Correções Implementadas

### 1. Removido `vite-plugin-vuetify` do build da lib

**Antes (`vite.config.ts`):**
```typescript
plugins: [
  vue(),
  vuetify({
    autoImport: true,  // ❌ Criava instância separada
  }),
],
```

**Depois (`vite.config.ts`):**
```typescript
plugins: [
  vue(),
  // vite-plugin-vuetify removido do build da lib
  // O Vuetify deve ser fornecido pelo projeto host
],
```

### 2. Adicionada verificação de instância do Vuetify

Criado `src/utils/vuetify-check.ts` que verifica se o Vuetify está registrado:

```typescript
export function ensureVuetify(app: App): void {
  const vuetifyInstance = (app as any)._context?.provides?.vuetify;

  if (!vuetifyInstance) {
    console.warn(
      "[BaseLib] ⚠️ Vuetify não detectado!\n" +
        "Certifique-se de chamar app.use(vuetify) ANTES de app.use(BaseLib)."
    );
  }
}

export function debugVuetifyInstances(): void {
  // Verifica múltiplos overlay containers, v-apps, overlays ativos, etc.
  // Use no console ou mounted() para diagnosticar problemas
}
```

### 3. Adicionadas props `attach` e `contentClass` ao ModalBase

```typescript
interface Props {
  // ... outras props
  /** 
   * Elemento onde o dialog será anexado.
   * Use 'body' para forçar anexação ao body (resolve problemas de overlay)
   */
  attach?: string | boolean | Element
  /**
   * Classes CSS customizadas para o conteúdo do dialog
   */
  contentClass?: string
}
```

**Uso:**
```vue
<ModalBase v-model="show" attach="body">
  <v-select :items="items" v-model="selected" />
</ModalBase>
```

### 4. Integrada verificação no `setupLib`

O `src/index.ts` agora verifica automaticamente:

```typescript
export function setupLib(app: App) {
  // Verifica se o Vuetify está registrado antes de configurar a lib
  ensureVuetify(app);

  registerLibComponents(app);
  registerLibPlugins(app);
}
```

### 5. Atualizada documentação

- ✅ README com seção de troubleshooting
- ✅ Arquivo TROUBLESHOOTING.md dedicado com soluções completas
- ✅ Exemplos de uso com attach
- ✅ Debug helpers documentados

## 🧪 Como Testar

### Teste de Confirmação

Para verificar se o problema está resolvido:

1. **Build da biblioteca:**
   ```bash
   pnpm run build
   ```

2. **Instalar em outro projeto:**
   ```bash
   pnpm add wallacesw11/BaseLib#main --force
   ```

3. **Usar ModalBase com attach:**
   ```vue
   <ModalBase v-model="showModal" attach="body">
     <v-select
       v-model="selected"
       :items="items"
       label="Selecione"
     />
   </ModalBase>
   ```

4. **Verificar:**
   - ✅ Dropdown deve aparecer normalmente
   - ✅ Console não deve mostrar warnings sobre Vuetify
   - ✅ Overlays funcionam corretamente

### Teste de Debug

Execute no console do navegador ou no `mounted()`:

```typescript
import { debugVuetifyInstances } from '@wallacesw11/base-lib'

debugVuetifyInstances()
```

Isso mostrará:
- Quantos `.v-overlay-container` existem (deve ser **1**)
- Quantos overlays ativos
- Se há múltiplas instâncias do Vuetify

**Interpretação:**
- ✅ 1 overlay container = OK
- ⚠️ 0 overlay containers = Vuetify não inicializado
- ❌ 2+ overlay containers = Múltiplas instâncias (problema grave!)

### Teste de Diagnóstico Rápido

Se ainda houver problemas, adicione temporariamente:

```html
<v-select attach="body" ... />
```

- Se funcionar com `attach="body"` → confirma problema de contexto (use attach no ModalBase)
- Se funcionar sem `attach` → problema resolvido ✅

## 📋 Checklist de Verificação

- [x] `createVuetify()` removido de dentro da pasta `src/`
- [x] `import "vuetify/styles"` removido de `src/`
- [x] `vite-plugin-vuetify` removido do build da lib
- [x] `vuetify` em `peerDependencies` (não em `dependencies`)
- [x] `rollupOptions.external` inclui `vuetify`
- [x] Verificação de instância implementada
- [x] Documentação atualizada com ordem correta de registro
- [x] Playground continua funcionando (tem seu próprio config)

## 🎯 Impacto

### Antes
- ❌ Componentes com overlay não funcionavam quando lib instalada
- ❌ Duas instâncias do Vuetify em execução
- ❌ Bundle da lib incluía código do Vuetify

### Depois
- ✅ Uma única instância do Vuetify (fornecida pelo host)
- ✅ Todos os componentes funcionam corretamente
- ✅ Bundle menor (Vuetify não incluído)
- ✅ Melhor performance e compatibilidade

## 📝 Notas Técnicas

### Por que o playground continua funcionando?

O playground tem seu próprio `playground/vite.config.ts` que **ainda usa** `vite-plugin-vuetify`:

```typescript
// playground/vite.config.ts
plugins: [
  vue(),
  vuetify({
    autoImport: true,  // ✅ OK para desenvolvimento local
  }),
],
```

Isso é intencional - o plugin facilita o desenvolvimento, mas não deve fazer parte do build da biblioteca distribuída.

### Configurações Corretas

**Build da Lib (`vite.config.ts`):**
- ❌ Não usar `vite-plugin-vuetify`
- ✅ Vuetify em `external`
- ✅ Vuetify em `peerDependencies`

**Playground (`playground/vite.config.ts`):**
- ✅ Pode usar `vite-plugin-vuetify`
- ✅ Facilita desenvolvimento
- ✅ Não afeta build da lib

**Projeto Host:**
- ✅ Deve instalar e registrar Vuetify
- ✅ Deve chamar `app.use(vuetify)` antes de `setupLib(app)`
- ✅ Importar estilos do Vuetify

## 🔗 Referências

- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [vite-plugin-vuetify](https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin)
- [Vue 3 Plugin System](https://vuejs.org/guide/reusability/plugins.html)

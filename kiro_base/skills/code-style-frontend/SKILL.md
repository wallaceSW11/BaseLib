---
name: code-style-frontend
description: Regras e exemplos de code style para frontend Vue 3 + TypeScript + Vuetify 3. Use ao criar ou editar qualquer arquivo em frontend/.
---

# Code Style Frontend

Regras de código para Vue 3 + TypeScript. Sem exceções.

## Proibido

- NUNCA .then().catch() — sempre async/await
- NUNCA lógica no template — computed/methods apenas
- NUNCA var — sempre const/let
- NUNCA any desnecessário — tipar tudo
- NUNCA chamar service do component — passar pela store
- NUNCA pular camadas: Component → Store → Service → API
- NUNCA !important no CSS
- NUNCA hardcodar cores — variáveis do Vuetify
- NUNCA console.log no código entregue
- NUNCA prefixo is/has em booleanos: `loading`, não `isLoading`

## Condicionais

Prioridade: Ternário > Early Return > If/Else
❌ switch/case, if/else aninhado

```ts
// ✅ Ternário (2 caminhos simples)
const label = computed(() => editMode.value ? 'Editar Produto' : 'Novo Produto')

// ✅ Early return
function validate(product: Product): boolean {
  if (!product.name) return false
  if (product.price <= 0) return false
  return true
}

// ❌ If/else aninhado
if (a) {
  if (b) {
    // ...
  }
}
```

## If de uma linha (sem chaves)

```ts
// ✅ Uma linha, sem chaves
if (!product) return
if (!product.active) throw new Error('Produto inativo')

// ✅ Múltiplos early returns (pulo entre)
if (!id) return
if (!name) return

// ❌ Com chaves desnecessárias
if (!product) {
  return
}
```

## Async

Loading reseta no `finally`. Nunca no try ou catch.

```ts
async function load(): Promise<void> {
  loading.value = true
  try {
    data.value = await service.getAll()
  } catch {
    notify.error('Erro', 'Erro ao carregar dados.')
  } finally {
    loading.value = false
  }
}
```

## Template

Zero lógica. Condicionais e class bindings → computed.

```vue
<!-- ❌ errado -->
<v-btn v-if="items.length > 0 && !loading">Salvar</v-btn>

<!-- ✅ certo -->
<v-btn v-if="canSave">Salvar</v-btn>
```
```ts
const canSave = computed(() => items.value.length > 0 && !loading.value)
```

## Componentes

PascalCase: `<ProductList />` nunca `<product-list />`.
Boolean props sem valor: `<v-btn disabled />`.
Max 200 linhas. Template repetido 2x+ = extrair componente.

## TypeScript

Tipar tudo. Sem any.

```ts
const products = ref<Product[]>([])
async function load(slug: string): Promise<void> {}
```

## Nomenclatura de arquivos

```
Componente:  ProductList.vue
Store:       useProductStore.ts
Service:     productService.ts
Composable:  useFormatCurrency.ts
Model/Type:  Product.ts
```

## Camadas

```
Component → Store → Service → API
```

Service: HTTP apenas. Store: lógica + estado. Component: UI apenas.

```ts
// ❌ errado — component chamando service direto
const products = await productService.getAll(bakeryId)

// ✅ certo
await productStore.load(bakeryId)
```

## Pinia — Composition API style

```ts
export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)

  async function load(bakeryId: number): Promise<void> {
    loading.value = true
    try {
      products.value = await productService.getAll(bakeryId)
    } catch {
      notify.error('Erro', 'Erro ao carregar produtos.')
    } finally {
      loading.value = false
    }
  }

  return { products, loading, load }
})
```

## Pinia — atualização de item na lista

Sempre `String()` em ambos os lados do `findIndex`. Usar `splice` em vez de atribuição por índice.
Updates pontuais **não devem** ativar o `loading` global.

```ts
// ❌ errado
loading.value = true
const index = items.value.findIndex(o => o.id === id)
items.value[index] = updated
loading.value = false

// ✅ certo
const index = items.value.findIndex(o => String(o.id) === String(id))
if (index !== -1) items.value.splice(index, 1, updated)
```

## Vuetify

Utilitários: `pa-*`, `ma-*`, `ga-*`, `d-flex`, `text-*`, `font-weight-*`.
CSS scoped só quando Vuetify não cobre. Nunca `!important`.
Sempre `variant="outlined"` nos campos de input.

## Ordem no script setup

```ts
// 1. imports (vue → services → models → stores → components → utils)
// 2. defineProps / defineEmits
// 3. stores
// 4. refs
// 5. computed
// 6. functions
// 7. lifecycle (onMounted...)
```

## Comentários

Zero comentários. Nomes auto-documentados.

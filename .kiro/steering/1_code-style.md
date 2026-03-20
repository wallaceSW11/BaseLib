---
inclusion: always
priority: highest
---

# Code Style — REGRAS ABSOLUTAS

## R1: Early Return

```ts
// ✅
if (!value) return null;
const result = process(value);
return result;

// ❌
if (value) { if (value.x) { return process(value); } }
```

## R2: Ternário para 2 caminhos

```ts
// ✅
const msg = active ? 'on' : 'off';

// ❌
let msg; if (active) { msg = 'on'; } else { msg = 'off'; }
```

## R3: Async/Await — nunca .then()

```ts
// ✅
const data = await api.get();

// ❌
api.get().then(d => use(d));
```

## R4: Optional Chaining

```ts
// ✅
const v = user?.profile?.name;
const t = item?.value ?? 0;

// ❌
const v = user && user.profile && user.profile.name;
```

## R5: Zero lógica no template

Ternários, filtros, operações → `computed`.

```vue
<!-- ❌ -->
<div>{{ user.name ? user.name.toUpperCase() : 'N/A' }}</div>
<div :class="v > 0 ? 'text-success' : 'text-error'">{{ v }}</div>

<!-- ✅ -->
<div>{{ displayName }}</div>
<div :class="valueClass">{{ v }}</div>

<script setup lang="ts">
const displayName = computed(() => user.value?.name?.toUpperCase() ?? 'N/A');
const valueClass = computed(() => (v.value > 0 ? 'text-success' : 'text-error'));
</script>
```

## R6: PascalCase nos componentes do template

```vue
<!-- ✅ --> <MyComponent />
<!-- ❌ --> <my-component />
```

## R7: Props booleanas sem valor

```vue
<!-- ✅ --> <v-btn disabled />
<!-- ❌ --> <v-btn :disabled="true" />
```

## R8: Imports organizados

```ts
// Vue/libs
import { ref, computed } from 'vue';

// Stores
import { useThemeStore } from '@/stores/theme';

// Components
import MyComp from '@/components/MyComp.vue';

// Utils/types
import type { MyType } from '@/utils/types';
```

## R9: Booleanos sem prefixo `is`

```ts
// ✅
const loading = ref(false);
const visible = ref(true);

// ❌
const isLoading = ref(false);
```

## R10: const/let — nunca var

## R11: Sem comentários no código

Nomes descritivos substituem comentários.

```ts
// ❌
// calcula total
const t = items.reduce((s, i) => s + i.v, 0);

// ✅
const totalValue = items.reduce((sum, item) => sum + item.value, 0);
```

## R12: Composition API — ordem no script

```vue
<script setup lang="ts">
// 1. Imports
// 2. Props & Emits
// 3. Stores
// 4. Refs
// 5. Computed
// 6. Functions
// 7. Lifecycle
</script>
```

## R13: TypeScript — sempre tipar

```ts
// ✅
const items = ref<Item[]>([]);
async function load(id: number): Promise<void> {}

// ❌
const items = ref([]);
async function load(id) {}
```

## R14: Vuetify Grid — sem lógica em cols

```vue
<!-- ✅ -->
<v-col cols="12" md="6" />

<!-- ❌ -->
<v-col :cols="isMobile ? 12 : 6" />
```

## R15: Sem !important no CSS

## R16: Pinia — Composition API style

```ts
// ✅
export const useMyStore = defineStore('my', () => {
  const items = ref<Item[]>([]);
  return { items };
});

// ❌ Options API style
```

## R17: Vuetify utilities antes de CSS scoped

Usar `pa-*`, `ma-*`, `d-flex`, `align-center`, `text-*` etc.
CSS scoped apenas para: valores customizados, animações, overrides de Vuetify.

## R18: :class binding via computed se tiver 2+ condições

```vue
<!-- ❌ -->
<div :class="{ active: a && b, empty: !c }" />

<!-- ✅ -->
<div :class="cardClass" />
<script setup>
const cardClass = computed(() => ({ active: a.value && b.value, empty: !c.value }));
</script>
```

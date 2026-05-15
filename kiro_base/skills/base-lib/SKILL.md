---
name: base-lib
description: Documentação da lib @wallacesw11/base-lib usada no projeto Confeitaria. Use ao criar componentes, telas ou formulários no frontend.
---

# @wallacesw11/base-lib

Componentes e utilitários da lib. Sempre consultar antes de criar componente novo.

## Instalação

```bash
pnpm add github:wallacesw11/BaseLib#main
```

## notify

```typescript
import { notify } from '@wallacesw11/base-lib'
notify.success('Título', 'Mensagem')
notify.error('Título', 'Mensagem')
notify.warning('Título', 'Mensagem')
notify.info('Título', 'Mensagem')
```

## confirm

```typescript
import { confirm } from '@wallacesw11/base-lib'

const ok = await confirm.show('Título', 'Mensagem')

const deletado = await confirm.show('Excluir', 'Não pode ser desfeito.', {
  confirmText: 'Excluir',
  cancelText: 'Cancelar',
  confirmColor: 'error'
})
```

## loading

```typescript
import { loading } from '@wallacesw11/base-lib'
loading.show('Carregando...')
await operacaoAssincrona()
loading.hide()
```

## Botões

```vue
import { PrimaryButton, SecondaryButton, TertiaryButton, QuartenaryButton } from '@wallacesw11/base-lib'

<PrimaryButton text="Salvar" prepend-icon="mdi-content-save" @click="salvar" />
<SecondaryButton text="Cancelar" @click="cancelar" />
```

Props: `text`, `prependIcon`, `appendIcon`, `disabled`, `loading`, `block`, `size`, `color`, `variant`

## IconToolTip

```vue
import { IconToolTip } from '@wallacesw11/base-lib'

<IconToolTip icon="mdi-pencil" tooltip="Editar" @click="editar" />
<IconToolTip icon="mdi-delete" tooltip="Excluir" color="error" @click="remover" />
<IconToolTip icon="mdi-plus" tooltip="Adicionar" as-button @click="adicionar" />
```

Props: `icon` (obrigatório), `tooltip`, `color` (padrão: `'primary'`), `asButton` (padrão: `false`)

## ModalBase

```vue
import { ModalBase } from '@wallacesw11/base-lib'
import type { ModalAction } from '@wallacesw11/base-lib/components'

const aberto = ref(false)
const acoes: ModalAction[] = [
  { text: 'Salvar', color: 'primary', handler: () => { salvar(); aberto.value = false } },
  { text: 'Cancelar', handler: () => aberto.value = false }
]

<ModalBase v-model="aberto" title="Título" :actions="acoes" :max-width="600">
  <!-- conteúdo -->
</ModalBase>
```

IMPORTANTE: o modal NÃO fecha automaticamente. Sempre setar `v-model = false` no handler.

## MoneyField

```vue
import { MoneyField } from '@wallacesw11/base-lib'
<MoneyField v-model="valor" label="Valor" currency="BRL" locale="pt-BR" />
```

## EmailField

```vue
import { EmailField } from '@wallacesw11/base-lib'
<EmailField v-model="email" label="E-mail" required @valid="(v) => emailValido = v" />
```

## NumberField

```vue
import { NumberField } from '@wallacesw11/base-lib'
<NumberField v-model="quantidade" label="Quantidade" :decimal-places="0" />
<NumberField v-model="preco" label="Preço" :decimal-places="2" />
```

## PhoneField

```vue
import { PhoneField } from '@wallacesw11/base-lib'
<PhoneField v-model="telefone" label="WhatsApp" variant="outlined" :rules="[r.required]" />
```

- `v-model` retorna apenas dígitos (sem máscara)
- Máscara automática: `(XX) XXXX-XXXX` (fixo) ou `(XX) XXXXX-XXXX` (celular)

## CepField

```vue
import { CepField } from '@wallacesw11/base-lib'
import type { ViaCepResponse } from '@wallacesw11/base-lib'

<CepField
  v-model="cep"
  label="CEP"
  variant="outlined"
  :rules="[r.required]"
  @address-found="onEncontrado"
  @address-not-found="() => {}"
/>
```

- Sempre `variant="outlined"`
- `v-model` retorna apenas dígitos
- Dispara `@address-found` quando CEP completo (8 dígitos)

## FullAddress

```vue
import { FullAddress } from '@wallacesw11/base-lib'
import type { Address } from '@wallacesw11/base-lib'

const endereco = ref<Address>({
  zipCode: '', street: '', number: '', complement: '',
  neighborhood: '', city: '', state: ''
})

<FullAddress v-model="endereco" variant="outlined" />
```

- Sempre `variant="outlined"`
- Com locale `pt-BR`: labels em português automaticamente
- `disabledFields`: bloqueia campos preenchidos pelo CEP

## useBreakpoint

```typescript
import { useBreakpoint } from '@wallacesw11/base-lib'
const { isMobile, isMobileOrTablet } = useBreakpoint()
```

## Vuetify — bundle otimizado

```typescript
import { requiredVuetifyComponents } from '@wallacesw11/base-lib'

createVuetify({
  components: {
    ...requiredVuetifyComponents,
    VDataTable, VChip, // só os do projeto
  }
})
```

## Todos os imports

```typescript
import {
  PrimaryButton, SecondaryButton, TertiaryButton, QuartenaryButton, BaseButton,
  IconToolTip, ModalBase, ConfirmDialog, FloatingNotify, LoadingOverlay,
  ThemeToggle, LanguageSelector,
  MoneyField, EmailField, NumberField, PhoneField, CepField, FullAddress
} from '@wallacesw11/base-lib'

import type { ModalAction } from '@wallacesw11/base-lib/components'
import type { Address, AddressLabels } from '@wallacesw11/base-lib/components'
import type { ViaCepResponse } from '@wallacesw11/base-lib'
```

## Regras do projeto

- Sempre `variant="outlined"` em CepField e FullAddress
- PhoneField e CepField retornam apenas dígitos no `v-model`
- ModalBase NÃO fecha automaticamente — sempre fechar no handler
- FullAddress com locale `pt-BR` já exibe labels em português

## Atualizar a lib

```bash
pnpm add github:wallacesw11/BaseLib#main --force
```

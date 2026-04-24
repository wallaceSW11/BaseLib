<template>
  <v-row>
    <v-col cols="12" md="4">
      <CepField
        v-model="internal.zipCode"
        :disabled="disabled"
        @address-found="onAddressFound"
        @address-not-found="onAddressNotFound"
      />
    </v-col>

    <v-col cols="12" md="8">
      <v-text-field
        v-model="internal.street"
        :label="l.street"
        :disabled="disabled || isFieldDisabled"
        :variant="variant"
      />
    </v-col>

    <v-col cols="12" md="3">
      <v-text-field
        v-model="internal.number"
        :label="l.number"
        :disabled="disabled"
        :variant="variant"
      />
    </v-col>

    <v-col cols="12" md="5">
      <v-text-field
        v-model="internal.complement"
        :label="l.complement"
        :disabled="disabled"
        :variant="variant"
      />
    </v-col>

    <v-col cols="12" md="4">
      <v-text-field
        v-model="internal.neighborhood"
        :label="l.neighborhood"
        :disabled="disabled || isFieldDisabled"
        :variant="variant"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        v-model="internal.city"
        :label="l.city"
        :disabled="disabled || isFieldDisabled"
        :variant="variant"
      />
    </v-col>

    <v-col cols="12" md="6">
      <v-select
        v-model="internal.state"
        :label="l.state"
        :items="brazilianStates"
        item-title="name"
        item-value="uf"
        :disabled="disabled || isFieldDisabled"
        :variant="variant"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { reactive, ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { VRow, VCol, VTextField, VSelect } from 'vuetify/components';
import CepField, { type ViaCepResponse } from './CepField.vue';

export interface Address {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface AddressLabels {
  zipCode?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

interface Props {
  modelValue?: Partial<Address>;
  disabled?: boolean;
  disabledFields?: boolean;
  labels?: AddressLabels;
  variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
  disabled: false,
  disabledFields: false,
  labels: () => ({}),
  variant: 'underlined',
});

const emit = defineEmits<{
  'update:modelValue': [value: Address];
}>();

let t: (key: string) => string;
try {
  ({ t } = useI18n({ useScope: 'global' }));
} catch {
  t = (key: string) => key;
}

const l = computed(() => ({
  zipCode:      props.labels.zipCode      ?? t('address.zipCode'),
  street:       props.labels.street       ?? t('address.street'),
  number:       props.labels.number       ?? t('address.number'),
  complement:   props.labels.complement   ?? t('address.complement'),
  neighborhood: props.labels.neighborhood ?? t('address.neighborhood'),
  city:         props.labels.city         ?? t('address.city'),
  state:        props.labels.state        ?? t('address.state'),
}));

const internal = reactive<Address>({
  zipCode: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  ...props.modelValue,
});

const cepFound = ref(false);
const isFieldDisabled = computed(() => props.disabledFields && cepFound.value);

function onAddressFound(data: ViaCepResponse) {
  internal.street = data.logradouro ?? '';
  internal.neighborhood = data.bairro ?? '';
  internal.city = data.localidade ?? '';
  internal.state = data.uf ?? '';
  cepFound.value = true;
}

function onAddressNotFound() {
  cepFound.value = false;
}

watch(
  () => props.modelValue,
  (val) => Object.assign(internal, val),
  { deep: true }
);

watch(
  internal,
  (val) => emit('update:modelValue', { ...val }),
  { deep: true }
);

const brazilianStates = [
  { uf: 'AC', name: 'AC - Acre' },
  { uf: 'AL', name: 'AL - Alagoas' },
  { uf: 'AP', name: 'AP - Amapá' },
  { uf: 'AM', name: 'AM - Amazonas' },
  { uf: 'BA', name: 'BA - Bahia' },
  { uf: 'CE', name: 'CE - Ceará' },
  { uf: 'DF', name: 'DF - Distrito Federal' },
  { uf: 'ES', name: 'ES - Espírito Santo' },
  { uf: 'GO', name: 'GO - Goiás' },
  { uf: 'MA', name: 'MA - Maranhão' },
  { uf: 'MT', name: 'MT - Mato Grosso' },
  { uf: 'MS', name: 'MS - Mato Grosso do Sul' },
  { uf: 'MG', name: 'MG - Minas Gerais' },
  { uf: 'PA', name: 'PA - Pará' },
  { uf: 'PB', name: 'PB - Paraíba' },
  { uf: 'PR', name: 'PR - Paraná' },
  { uf: 'PE', name: 'PE - Pernambuco' },
  { uf: 'PI', name: 'PI - Piauí' },
  { uf: 'RJ', name: 'RJ - Rio de Janeiro' },
  { uf: 'RN', name: 'RN - Rio Grande do Norte' },
  { uf: 'RS', name: 'RS - Rio Grande do Sul' },
  { uf: 'RO', name: 'RO - Rondônia' },
  { uf: 'RR', name: 'RR - Roraima' },
  { uf: 'SC', name: 'SC - Santa Catarina' },
  { uf: 'SP', name: 'SP - São Paulo' },
  { uf: 'SE', name: 'SE - Sergipe' },
  { uf: 'TO', name: 'TO - Tocantins' },
];
</script>

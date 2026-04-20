<template>
  <v-text-field
    v-maska="maskOptions"
    :model-value="displayValue"
    :label="fieldLabel"
    :rules="rules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="!!hint"
    :variant="variant"
    :loading="searching"
    inputmode="numeric"
  >
    <template #prepend-inner>
      <v-icon>mdi-map-marker-outline</v-icon>
    </template>
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { vMaska } from 'maska/vue';
import { Mask } from 'maska';

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

interface Props {
  modelValue?: string;
  label?: string;
  rules?: any[];
  disabled?: boolean;
  hint?: string;
  variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: undefined,
  rules: () => [],
  disabled: false,
  hint: '',
  variant: 'underlined',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'address-found': [address: ViaCepResponse];
  'address-not-found': [];
}>();

let t: (key: string) => string;
try {
  ({ t } = useI18n({ useScope: 'global' }));
} catch {
  t = (key: string) => key;
}

const fieldLabel = computed(() => props.label ?? t('address.zipCode'));

const mask = new Mask({ mask: '#####-###', eager: true });
const displayValue = computed(() => mask.masked(props.modelValue ?? ''));

const searching = ref(false);

const maskOptions = {
  mask: '#####-###',
  eager: true,
  onMaska: (detail: { masked: string; unmasked: string; completed: boolean }) => {
    emit('update:modelValue', detail.unmasked);
    if (detail.completed) fetchAddress(detail.unmasked);
  },
};

async function fetchAddress(zipCode: string) {
  searching.value = true;
  try {
    const res = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data: ViaCepResponse = await res.json();
    if (data.erro) emit('address-not-found');
    else emit('address-found', data);
  } catch {
    emit('address-not-found');
  } finally {
    searching.value = false;
  }
}
</script>

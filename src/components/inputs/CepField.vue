<template>
  <v-text-field
    v-maska="maskOptions"
    :model-value="maskedValue"
    :label="label"
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
import { ref, watch } from 'vue';
import { vMaska } from 'maska/vue';

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
  label: 'ZIP Code',
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

const maskedValue = ref('');
const searching = ref(false);

const maskOptions = {
  mask: '#####-###',
  eager: true,
  onMaska: (detail: { masked: string; unmasked: string; completed: boolean }) => {
    emit('update:modelValue', detail.unmasked);
    if (detail.completed) {
      fetchAddress(detail.unmasked);
    }
  },
};

async function fetchAddress(zipCode: string) {
  searching.value = true;
  try {
    const res = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data: ViaCepResponse = await res.json();
    if (data.erro) {
      emit('address-not-found');
    } else {
      emit('address-found', data);
    }
  } catch {
    emit('address-not-found');
  } finally {
    searching.value = false;
  }
}

watch(
  () => props.modelValue,
  (val) => {
    const digits = (val ?? '').replace(/\D/g, '').slice(0, 8);
    if (!digits) { maskedValue.value = ''; return; }
    maskedValue.value = digits.length > 5
      ? `${digits.slice(0, 5)}-${digits.slice(5)}`
      : digits;
  },
  { immediate: true }
);
</script>

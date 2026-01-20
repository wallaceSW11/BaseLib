<template>
  <v-text-field
    :model-value="formattedValue"
    @update:model-value="handleInput"
    :label="label"
    :rules="rules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="persistentHint"
    @focus="handleFocus"
    @click="handleClick"
    @keydown="handleKeydown"
    inputmode="decimal"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

interface Props {
  modelValue?: number | null;
  label?: string;
  rules?: any[];
  disabled?: boolean;
  hint?: string;
  persistentHint?: boolean;
  currency?: string;
  locale?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  label: '',
  rules: () => [],
  disabled: false,
  hint: '',
  persistentHint: false,
  currency: 'BRL',
  locale: 'pt-BR'
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

const formattedValue = ref('R$ 0,00');

function formatMoney(value: number): string {
  const absValue = Math.abs(value);
  const currencySymbol = getCurrencySymbol();
  
  const formatted = absValue.toLocaleString(props.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return value < 0 ? `-${currencySymbol} ${formatted}` : `${currencySymbol} ${formatted}`;
}

function getCurrencySymbol(): string {
  const symbols: Record<string, string> = {
    'BRL': 'R$',
    'USD': '$',
    'EUR': '€',
    'GBP': '£'
  };
  return symbols[props.currency] || props.currency;
}

function parseMoneyInput(input: string): number {
  const isNegative = input.includes('-');
  const numbers = input.replace(/\D/g, '');
  
  if (!numbers) return 0;
  
  const value = parseInt(numbers) / 100;
  const rounded = Number((isNegative ? -value : value).toFixed(2));
  
  return rounded;
}

function handleInput(value: string) {
  const numericValue = parseMoneyInput(value);
  emit('update:modelValue', numericValue);
  
  // Força a atualização da formatação após o emit
  nextTick(() => {
    formattedValue.value = formatMoney(numericValue);
  });
}

function handleFocus(event: FocusEvent) {
  const input = event.target as HTMLInputElement;
  nextTick(() => {
    // Posiciona o cursor no final do campo
    input.setSelectionRange(input.value.length, input.value.length);
  });
}

function handleClick(event: MouseEvent) {
  const input = event.target as HTMLInputElement;
  nextTick(() => {
    // Posiciona o cursor no final do campo
    input.setSelectionRange(input.value.length, input.value.length);
  });
}

function handleKeydown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement;
  const currentValue = formattedValue.value;
  
  // Permite teclas de navegação e controle
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
  
  if (allowedKeys.includes(event.key) || event.ctrlKey || event.metaKey) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();
      
      // Extrai apenas os números do valor atual
      const numbers = currentValue.replace(/\D/g, '');
      
      if (numbers.length > 0) {
        // Remove o último dígito
        const newNumbers = numbers.slice(0, -1);
        const newValue = newNumbers ? parseInt(newNumbers) / 100 : 0;
        
        emit('update:modelValue', newValue);
        formattedValue.value = formatMoney(newValue);
        
        // Mantém o cursor no final
        nextTick(() => {
          input.setSelectionRange(input.value.length, input.value.length);
        });
      }
    }
    return;
  }
  
  // Permite apenas números e sinal de menos
  if (!/[\d-]/.test(event.key)) {
    event.preventDefault();
    return;
  }
  
  // Previne o comportamento padrão para processar manualmente
  event.preventDefault();
  
  if (event.key === '-') {
    // Inverte o sinal
    const currentNumeric = parseMoneyInput(currentValue);
    const newValue = -currentNumeric;
    emit('update:modelValue', newValue);
    formattedValue.value = formatMoney(newValue);
  } else {
    // Adiciona o novo dígito
    const numbers = currentValue.replace(/\D/g, '');
    const newNumbers = numbers + event.key;
    const newValue = parseInt(newNumbers) / 100;
    
    emit('update:modelValue', newValue);
    formattedValue.value = formatMoney(newValue);
  }
  
  // Mantém o cursor no final
  nextTick(() => {
    input.setSelectionRange(input.value.length, input.value.length);
  });
}

watch(
  () => props.modelValue,
  (newVal) => {
    const value = newVal ?? 0;
    formattedValue.value = formatMoney(value);
  },
  { immediate: true }
);
</script>

<style scoped>
:deep(input) {
  text-align: right;
}
</style>

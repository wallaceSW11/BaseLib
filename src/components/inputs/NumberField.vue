<template>
  <v-text-field
    :model-value="formattedValue"
    @update:model-value="handleInput"
    :label="label"
    :rules="rules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="persistentHint"
    :variant="variant"
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
  decimalPlaces?: number;
  locale?: string;
  allowNegative?: boolean;
  variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  label: '',
  rules: () => [],
  disabled: false,
  hint: '',
  persistentHint: false,
  decimalPlaces: 0,
  locale: 'pt-BR',
  allowNegative: true,
  variant: 'outlined'
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

const formattedValue = ref('0');

function formatNumber(value: number): string {
  const absValue = Math.abs(value);
  
  const formatted = absValue.toLocaleString(props.locale, {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces
  });
  
  return value < 0 ? '-' + formatted : formatted;
}

function parseNumberInput(input: string): number {
  const isNegative = input.includes('-');
  const numbers = input.replace(/\D/g, '');
  
  if (!numbers) return 0;
  
  let value: number;
  
  if (props.decimalPlaces === 0) {
    value = parseInt(numbers);
  } else {
    const divisor = Math.pow(10, props.decimalPlaces);
    value = parseInt(numbers) / divisor;
  }
  
  const rounded = Number(value.toFixed(props.decimalPlaces));
  
  return isNegative && props.allowNegative ? -rounded : rounded;
}

function handleInput(value: string) {
  const numericValue = parseNumberInput(value);
  emit('update:modelValue', numericValue);
  
  // Força a atualização da formatação após o emit
  nextTick(() => {
    formattedValue.value = formatNumber(numericValue);
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
        let newValue: number;
        
        if (!newNumbers) {
          newValue = 0;
        } else if (props.decimalPlaces === 0) {
          newValue = parseInt(newNumbers);
        } else {
          const divisor = Math.pow(10, props.decimalPlaces);
          newValue = parseInt(newNumbers) / divisor;
        }
        
        // Mantém o sinal negativo se estava presente
        const isNegative = currentValue.startsWith('-');
        if (isNegative && props.allowNegative && newValue !== 0) {
          newValue = -newValue;
        }
        
        emit('update:modelValue', newValue);
        formattedValue.value = formatNumber(newValue);
        
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
  
  if (event.key === '-' && props.allowNegative) {
    // Inverte o sinal
    const currentNumeric = parseNumberInput(currentValue);
    const newValue = -currentNumeric;
    emit('update:modelValue', newValue);
    formattedValue.value = formatNumber(newValue);
  } else if (event.key !== '-') {
    // Adiciona o novo dígito
    const numbers = currentValue.replace(/\D/g, '');
    const newNumbers = numbers + event.key;
    
    let newValue: number;
    
    if (props.decimalPlaces === 0) {
      newValue = parseInt(newNumbers);
    } else {
      const divisor = Math.pow(10, props.decimalPlaces);
      newValue = parseInt(newNumbers) / divisor;
    }
    
    // Mantém o sinal negativo se estava presente
    const isNegative = currentValue.startsWith('-');
    if (isNegative && props.allowNegative) {
      newValue = -newValue;
    }
    
    emit('update:modelValue', newValue);
    formattedValue.value = formatNumber(newValue);
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
    formattedValue.value = formatNumber(value);
  },
  { immediate: true }
);
</script>

<style scoped>
:deep(input) {
  text-align: right;
}

/* Remove as setinhas do input number */
:deep(input[type="number"]::-webkit-inner-spin-button),
:deep(input[type="number"]::-webkit-outer-spin-button) {
  -webkit-appearance: none;
  margin: 0;
}

:deep(input[type="number"]) {
  -moz-appearance: textfield;
}
</style>

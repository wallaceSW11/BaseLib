<template>
  <v-text-field
    :model-value="formattedValue"
    :label="label"
    :rules="rules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="persistentHint"
    :variant="variant"
    inputmode="decimal"
    @update:model-value="handleInput"
    @focus="handleFocus"
    @click="handleClick"
    @keydown="handleKeydown"
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
import { toRef } from 'vue';
import { useNumericInput, NAVIGATION_KEYS } from '@/composables/useNumericInput';
import type { TextFieldVariant } from '@/utils/types';

type ValidationRule = (value: string) => boolean | string;

interface Props {
  modelValue?: number | null
  label?: string
  rules?: ValidationRule[]
  disabled?: boolean
  hint?: string
  persistentHint?: boolean
  decimalPlaces?: number
  locale?: string
  allowNegative?: boolean
  variant?: TextFieldVariant
  max?: number
  min?: number
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
  variant: 'underlined',
  max: 999000000,
  min: undefined,
});

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>();

function formatNumber(value: number): string {
  const absValue = Math.abs(value);

  const formatted = absValue.toLocaleString(props.locale, {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces,
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

const { formattedValue, moveCursorToEnd, handleInput, handleFocus, handleClick } = useNumericInput(
  toRef(props, 'modelValue'),
  (val: number) => emit('update:modelValue', val),
  formatNumber,
  parseNumberInput,
);

function updateValue(newValue: number) {
  if (props.max !== undefined && newValue > props.max) return;

  if (props.min !== undefined && newValue < props.min) return;

  emit('update:modelValue', newValue);
  formattedValue.value = formatNumber(newValue);
  moveCursorToEnd();
}

function parseFromDisplay() {
  return {
    digits: formattedValue.value.replace(/\D/g, ''),
    isNegative: formattedValue.value.startsWith('-'),
  };
}

function computeValue(digits: string): number {
  if (!digits) return 0;

  let value: number;

  if (props.decimalPlaces === 0) {
    value = parseInt(digits);
  } else {
    const divisor = Math.pow(10, props.decimalPlaces);
    value = parseInt(digits) / divisor;
  }

  return Number(value.toFixed(props.decimalPlaces));
}

function handleKeydown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement | null;

  if (!input) return;

  const isNavigationKey = NAVIGATION_KEYS.includes(event.key) || event.ctrlKey || event.metaKey;

  if (isNavigationKey) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();

      const { digits, isNegative } = parseFromDisplay();

      if (digits.length > 0) {
        const newDigits = digits.slice(0, -1);
        let newValue = computeValue(newDigits);

        if (isNegative && props.allowNegative && newValue !== 0) newValue = -newValue;

        updateValue(newValue);
      }
    }

    return;
  }

  if (!/[\d-]/.test(event.key)) {
    event.preventDefault();

    return;
  }

  event.preventDefault();

  if (event.key === '-' && props.allowNegative) {
    const currentNumeric = parseNumberInput(formattedValue.value);
    const newValue = -currentNumeric;

    updateValue(newValue);

    return;
  }

  if (event.key === '-') return;

  const { digits, isNegative } = parseFromDisplay();
  const newDigits = digits + event.key;
  let newValue = computeValue(newDigits);

  if (isNegative && props.allowNegative) newValue = -newValue;

  updateValue(newValue);
}
</script>

<style scoped>
:deep(input) {
  text-align: right;
}

:deep(input[type='number']::-webkit-inner-spin-button),
:deep(input[type='number']::-webkit-outer-spin-button) {
  -webkit-appearance: none;
  margin: 0;
}

:deep(input[type='number']) {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>

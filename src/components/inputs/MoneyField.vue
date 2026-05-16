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
  currency?: string
  locale?: string
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
  currency: 'BRL',
  locale: 'pt-BR',
  variant: 'underlined',
  max: 999000000,
  min: undefined,
});

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>();

function getCurrencySymbol(): string {
  const symbols: Record<string, string> = {
    BRL: 'R$',
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  return symbols[props.currency] || props.currency;
}

function formatMoney(value: number): string {
  const absValue = Math.abs(value);
  const currencySymbol = getCurrencySymbol();

  const formatted = absValue.toLocaleString(props.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return value < 0 ? `-${currencySymbol} ${formatted}` : `${currencySymbol} ${formatted}`;
}

function parseMoneyInput(input: string): number {
  const isNegative = input.includes('-');
  const numbers = input.replace(/\D/g, '');

  if (!numbers) return 0;

  const value = parseInt(numbers) / 100;
  const rounded = Number((isNegative ? -value : value).toFixed(2));

  return rounded;
}

const { formattedValue, moveCursorToEnd, handleInput, handleFocus, handleClick } = useNumericInput(
  toRef(props, 'modelValue'),
  (val: number) => emit('update:modelValue', val),
  formatMoney,
  parseMoneyInput,
);

function updateValue(newValue: number) {
  if (props.max !== undefined && newValue > props.max) return;

  if (props.min !== undefined && newValue < props.min) return;

  emit('update:modelValue', newValue);
  formattedValue.value = formatMoney(newValue);
  moveCursorToEnd();
}

function updateFromDigits(digits: string) {
  const newValue = parseInt(digits) / 100;

  updateValue(newValue);
}

function handleKeydown(event: KeyboardEvent) {
  const isNavigationKey = NAVIGATION_KEYS.includes(event.key) || event.ctrlKey || event.metaKey;

  if (isNavigationKey) {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault();

      const digits = formattedValue.value.replace(/\D/g, '');

      updateFromDigits(digits.slice(0, -1));
    }

    return;
  }

  if (!/[\d-]/.test(event.key)) {
    event.preventDefault();

    return;
  }

  event.preventDefault();

  if (event.key === '-') {
    const currentNumeric = parseMoneyInput(formattedValue.value);
    const newValue = -currentNumeric;

    updateValue(newValue);

    return;
  }

  const digits = formattedValue.value.replace(/\D/g, '');

  updateFromDigits(digits + event.key);
}
</script>

<style scoped>
:deep(input) {
  text-align: right;
}
</style>

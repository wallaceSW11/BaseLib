<template>
  <v-text-field
    v-model="internalValue"
    :label="label"
    :rules="computedRules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="persistentHint"
    :required="required"
    type="email"
    inputmode="email"
    autocomplete="email"
    @blur="handleBlur"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="!$slots.prepend" #prepend-inner>
      <v-icon :color="isValid ? 'success' : undefined">
        mdi-email{{ isValid ? '-check' : '-outline' }}
      </v-icon>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Props {
  modelValue?: string;
  label?: string;
  rules?: any[];
  disabled?: boolean;
  hint?: string;
  persistentHint?: boolean;
  required?: boolean;
  validateOnBlur?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: 'Email',
  rules: () => [],
  disabled: false,
  hint: '',
  persistentHint: false,
  required: false,
  validateOnBlur: true
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'valid': [isValid: boolean];
}>();

const internalValue = ref(props.modelValue);
const isValid = ref(false);

// Regex que aceita o padrão de email com suporte ao sinal de +
const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function validateEmail(value: string): boolean | string {
  if (!value && !props.required) {
    return true;
  }
  
  if (!value && props.required) {
    return 'Email is required';
  }
  
  if (!emailRegex.test(value)) {
    return 'Invalid email format';
  }
  
  return true;
}

const computedRules = computed(() => {
  return [validateEmail, ...props.rules];
});

function handleBlur() {
  const validation = validateEmail(internalValue.value);
  isValid.value = validation === true;
  emit('valid', isValid.value);
}

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
  
  // Valida em tempo real se não for validateOnBlur
  if (!props.validateOnBlur) {
    const validation = validateEmail(newValue);
    isValid.value = validation === true;
    emit('valid', isValid.value);
  }
});

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue || '';
  const validation = validateEmail(internalValue.value);
  isValid.value = validation === true;
});
</script>

<template>
  <v-text-field
    v-model="internalValue"
    :label="label"
    :rules="computedRules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="persistentHint"
    :required="required"
    :variant="variant"
    :maxlength="maxlength"
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
import { ref, computed, watch, getCurrentInstance } from 'vue';

interface Props {
  modelValue?: string;
  label?: string;
  rules?: any[];
  disabled?: boolean;
  hint?: string;
  persistentHint?: boolean;
  required?: boolean;
  validateOnBlur?: boolean;
  requiredMessage?: string;
  invalidMessage?: string;
  variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
  maxlength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: 'Email',
  rules: () => [],
  disabled: false,
  hint: '',
  persistentHint: false,
  required: false,
  validateOnBlur: true,
  requiredMessage: '',
  invalidMessage: '',
  variant: 'underlined',
  maxlength: 100
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'valid': [isValid: boolean];
}>();

const internalValue = ref(props.modelValue);
const isValid = ref(false);

// Regex que aceita o padrão de email com suporte ao sinal de +
const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Tenta pegar o i18n se estiver disponível
const instance = getCurrentInstance();
const i18n = instance?.appContext.config.globalProperties.$i18n;

function getErrorMessage(key: string, fallback: string): string {
  // Se tem mensagem customizada via prop, usa ela
  if (key === 'required' && props.requiredMessage) return props.requiredMessage;
  if (key === 'invalid' && props.invalidMessage) return props.invalidMessage;
  
  // Se tem i18n disponível, tenta usar
  if (i18n) {
    try {
      const translationKey = `validation.${key === 'required' ? 'required' : 'invalidEmail'}`;
      const translated = (i18n as any).global?.t?.(translationKey) || (i18n as any).t?.(translationKey);
      if (translated && typeof translated === 'string' && !translated.startsWith('validation.')) {
        return translated;
      }
    } catch (e) {
      // Ignora erro e usa fallback
    }
  }
  
  // Fallback para inglês
  return fallback;
}

function validateEmail(value: string): boolean | string {
  if (!value && !props.required) {
    return true;
  }
  
  if (!value && props.required) {
    return getErrorMessage('required', 'Email is required');
  }
  
  if (!emailRegex.test(value)) {
    return getErrorMessage('invalid', 'Invalid email format');
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

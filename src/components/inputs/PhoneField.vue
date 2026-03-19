<template>
  <v-text-field
    v-maska="maskOptions"
    :model-value="displayValue"
    :label="label"
    :rules="rules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="!!hint"
    :variant="variant"
    inputmode="tel"
    autocomplete="tel"
  >
    <template #prepend-inner>
      <v-icon>{{ icon }}</v-icon>
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
import { computed } from 'vue';
import { vMaska } from 'maska/vue';
import { Mask } from 'maska';

interface Props {
  modelValue?: string;
  label?: string;
  rules?: any[];
  disabled?: boolean;
  hint?: string;
  icon?: string;
  variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: 'Phone',
  rules: () => [],
  disabled: false,
  hint: '',
  icon: 'mdi-phone-outline',
  variant: 'underlined',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const mask = new Mask({ mask: ['(##) ####-####', '(##) #####-####'], eager: true });

// Applies mask to the incoming modelValue (digits only) for display
const displayValue = computed(() => mask.masked(props.modelValue ?? ''));

const maskOptions = {
  mask: ['(##) ####-####', '(##) #####-####'],
  eager: true,
  onMaska: (detail: { masked: string; unmasked: string; completed: boolean }) => {
    emit('update:modelValue', detail.unmasked);
  },
};
</script>

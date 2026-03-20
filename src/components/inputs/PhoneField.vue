<template>
  <v-text-field
    v-maska="maskOptions"
    :model-value="displayValue"
    :label="label"
    :rules="rules"
    :disabled="disabled"
    :hint="hint"
    :persistent-hint="persistentHint"
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

type MaskaDetail = { masked: string; unmasked: string; completed: boolean };

type Variant = 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';

interface Props {
  modelValue?: string;
  label?: string;
  rules?: any[];
  disabled?: boolean;
  hint?: string;
  icon?: string;
  variant?: Variant;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: 'Phone',
  rules: () => [],
  hint: '',
  icon: 'mdi-phone-outline',
  variant: 'underlined'
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const mask = new Mask({ mask: ['(##) ####-####', '(##) #####-####'], eager: true });

const displayValue = computed(() => mask.masked(props.modelValue ?? ''));

const persistentHint = computed(() => !!props.hint);

const maskOptions = {
  mask: ['(##) ####-####', '(##) #####-####'],
  eager: true,
  onMaska: (detail: MaskaDetail) => {
    emit('update:modelValue', detail.unmasked);
  }
};
</script>

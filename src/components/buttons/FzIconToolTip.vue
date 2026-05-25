<template>
  <v-tooltip :text="tooltipText" location="top" :disabled="!hasTooltip">
    <template #activator="{ props: tooltipProps }">
      <span v-bind="tooltipProps" class="d-inline-flex">
        <v-btn
          :icon="icon"
          :color="color"
          :variant="asButton ? 'text' : 'plain'"
          :density="asButton ? 'default' : 'compact'"
          :disabled="disabled"
          @click="(e: MouseEvent) => $emit('click', e)"
        />
      </span>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  icon: string;
  text?: string;
  tooltip?: string;
  color?: string;
  asButton?: boolean;
  disabled?: boolean;
  disabledTooltip?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: undefined,
  tooltip: undefined,
  color: 'primary',
  asButton: false,
  disabled: false,
  disabledTooltip: undefined,
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const hasTooltip = computed(() => {
  if (props.disabled) return !!props.disabledTooltip;

  return !!(props.tooltip ?? props.text);
});

const tooltipText = computed(() => {
  if (props.disabled) return props.disabledTooltip ?? '';

  return props.tooltip ?? props.text ?? '';
});
</script>

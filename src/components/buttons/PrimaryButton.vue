<template>
  <BaseButton color="primary" variant="elevated" v-bind="$props" @click="$emit('click', $event)">
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton, { type BaseButtonProps } from './BaseButton.vue'

interface Props extends Omit<BaseButtonProps, 'color' | 'variant'> {}

defineProps<Props>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

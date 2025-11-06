<template>
  <v-btn
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :disabled="disabled"
    :loading="loading"
    :color="color"
    :variant="variant"
    :size="size"
    :block="block"
    class="text-none"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </v-btn>
</template>

<script setup lang="ts">
export interface BaseButtonProps {
  prependIcon?: string
  appendIcon?: string
  text?: string
  disabled?: boolean
  loading?: boolean
  color?: string
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  block?: boolean
}

withDefaults(defineProps<BaseButtonProps>(), {
  prependIcon: undefined,
  appendIcon: undefined,
  text: '',
  disabled: false,
  loading: false,
  color: 'primary',
  variant: 'elevated',
  size: 'default',
  block: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

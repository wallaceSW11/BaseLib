<template>
  <v-tooltip :text="tooltip ?? text" location="top" :disabled="!(tooltip ?? text)">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn
        v-bind="tooltipProps"
        :icon="icon"
        :color="color"
        :variant="asButton ? 'text' : 'plain'"
        :density="asButton ? 'default' : 'compact'"
        @click="(e: MouseEvent) => $emit('click', e)"
      />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  text?: string
  tooltip?: string
  color?: string
  asButton?: boolean
}

withDefaults(defineProps<Props>(), {
  text: undefined,
  tooltip: undefined,
  color: 'primary',
  asButton: false,
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

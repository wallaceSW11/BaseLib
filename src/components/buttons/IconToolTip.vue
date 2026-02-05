<template>
  <v-tooltip :text="text" location="top" :disabled="!text">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn
        v-bind="tooltipProps"
        :icon="icon"
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
  asButton?: boolean
}

withDefaults(defineProps<Props>(), {
  text: undefined,
  asButton: false,
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

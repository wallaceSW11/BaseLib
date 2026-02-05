<template>
  <v-tooltip :text="text" location="top" :disabled="!text">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn
        v-bind="tooltipProps"
        :icon="icon"
        :variant="asButton ? 'text' : 'plain'"
        :density="asButton ? 'default' : 'compact'"
        @click="handleClick"
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

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  console.log('IconToolTip clicked!', event)
  emit('click', event)
}
</script>

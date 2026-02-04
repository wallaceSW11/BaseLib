<template>
  <v-tooltip :text="text" location="top" :disabled="!text">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn
        v-if="asButton"
        v-bind="tooltipProps"
        :icon="icon"
        variant="text"
        @click.stop="handleClick"
      />
      <v-icon 
        v-else 
        v-bind="tooltipProps" 
        style="cursor: pointer;"
        @click.stop="handleClick"
      >
        {{ icon }}
      </v-icon>
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
  emit('click', event)
}
</script>

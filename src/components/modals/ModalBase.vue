<template>
  <v-dialog 
    v-model="isOpen" 
    :max-width="maxWidth" 
    :persistent="persistent" 
    attach="body"
    :content-class="contentClass"
    :fullscreen="fullscreen"
    scrollable
    :z-index="2400"
  >
    <v-card>
      <v-card-title v-if="title" class="text-h5 d-flex align-center px-6 pt-6" style="word-break: break-word; white-space: normal;">
        <v-icon v-if="titleIcon" class="mr-2">{{ titleIcon }}</v-icon>
        <span>{{ title }}</span>
      </v-card-title>

      <v-card-text class="px-6 pt-4">
        <slot>
          {{ message }}
        </slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          v-for="(action, index) in actions"
          :key="index"
          :color="action.color || 'primary'"
          :prepend-icon="action.icon"
          :variant="action.variant || 'text'"
          :type="'button'"
          class="text-none"
          @click="handleAction(action)"
        >
          {{ action.text }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface ModalAction {
  text: string
  icon?: string
  color?: string
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  handler?: () => void | Promise<void>
}

interface Props {
  modelValue: boolean
  title?: string
  message?: string
  maxWidth?: string | number
  persistent?: boolean
  actions?: ModalAction[]
  /**
   * Classes CSS customizadas para o conteúdo do dialog
   */
  contentClass?: string
  /**
   * Se true, o dialog ocupará toda a tela
   * @default false
   */
  fullscreen?: boolean
  /**
   * Ícone a ser exibido ao lado do título
   * @default undefined
   */
  titleIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  message: '',
  maxWidth: 500,
  persistent: true,
  actions: () => [],
  contentClass: undefined,
  fullscreen: false,
  titleIcon: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal
})

watch(isOpen, (newVal) => {
  emit('update:modelValue', newVal)
})

const handleAction = async (action: ModalAction) => {
  if (action.handler) {
    await action.handler()
  }
}
</script>

<style>
/* Garante que menus do Vuetify (v-select, v-menu, etc.) fiquem acima dos modais */
.v-overlay-container .v-menu > .v-overlay__content,
.v-overlay-container .v-select__content,
.v-overlay-container .v-autocomplete__content {
  z-index: 2500 !important;
}
</style>

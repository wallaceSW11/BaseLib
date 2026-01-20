<template>
  <CustomConfirmDialog ref="customDialogRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomConfirmDialog from './CustomConfirmDialog.vue'

export interface ConfirmOptions {
  persistent?: boolean
  confirmText?: string
  cancelText?: string
  confirmColor?: string
  cancelColor?: string
}

const customDialogRef = ref<InstanceType<typeof CustomConfirmDialog> | null>(null)

const ConfirmDialog = (
  title: string, 
  message: string, 
  options?: ConfirmOptions
): Promise<boolean> => {
  if (!customDialogRef.value) {
    console.error('ConfirmDialog: customDialogRef is not available')
    return Promise.resolve(false)
  }
  return customDialogRef.value.ConfirmDialog(title, message, options)
}

defineExpose({
  ConfirmDialog,
})
</script>

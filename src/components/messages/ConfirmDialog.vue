<template>
  <CustomConfirmDialog ref="customDialogRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomConfirmDialog from './CustomConfirmDialog.vue';
import type { ConfirmOptions } from '@/utils/types';

const customDialogRef = ref<InstanceType<typeof CustomConfirmDialog> | null>(null);

const confirmDialog = (title: string, message: string, options?: ConfirmOptions): Promise<boolean> => {
  if (!customDialogRef.value) return Promise.resolve(false);

  return customDialogRef.value.confirmDialog(title, message, options);
};

defineExpose({
  confirmDialog,
});
</script>

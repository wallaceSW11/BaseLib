<template>
  <Transition name="slide-fade">
    <v-alert
      v-if="store.isVisible"
      :type="store.type"
      :title="store.title"
      :text="store.message"
      class="floating-notify"
      closable
      elevation="6"
      @click:close="store.hide()"
    />
  </Transition>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useNotifyStore } from '@/utils/notify';

const store = useNotifyStore();

onUnmounted(() => {
  store.cleanup();
});
</script>

<style scoped>
.floating-notify {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 300px;
  max-width: 500px;
  z-index: 9999;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

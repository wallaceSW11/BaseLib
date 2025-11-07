<template>
  <Transition name="fade">
    <div v-if="isVisible" class="loading-overlay">
      <Transition name="fade-delayed">
        <div v-if="showContent" class="loading-content">
          <img v-if="themeStore.currentLogo" :src="themeStore.currentLogo" alt="Logo" class="loading-logo mb-4" />
          <v-progress-circular indeterminate color="primary" :size="30" :width="5" />
          <div class="loading-text mt-3">
            {{ currentMessage }}
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { LOADING_CONTENT_DELAY } from '../utils/types'
import { useThemeStore } from '../stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()

const isVisible = ref(false)
const showContent = ref(false)
const currentMessage = ref(t('common.loading'))
let contentTimeoutId: ReturnType<typeof setTimeout> | null = null

const show = (message?: string) => {
  currentMessage.value = message || t('common.loading')
  isVisible.value = true

  // Show content after configured delay
  contentTimeoutId = setTimeout(() => {
    showContent.value = true
  }, LOADING_CONTENT_DELAY)
}

const hide = () => {
  if (contentTimeoutId) {
    clearTimeout(contentTimeoutId)
    contentTimeoutId = null
  }
  showContent.value = false
  isVisible.value = false
}

defineExpose({
  show,
  hide,
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-logo {
  max-width: 200px;
  max-height: 150px;
  object-fit: contain;
}

.loading-text {
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-delayed-enter-active {
  transition: opacity 0.3s ease 0.1s;
}

.fade-delayed-leave-active {
  transition: opacity 0.2s ease;
}

.fade-delayed-enter-from,
.fade-delayed-leave-to {
  opacity: 0;
}
</style>

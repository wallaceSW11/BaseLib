<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div v-if="isOpen" class="custom-dialog-overlay" @click.self="handleOverlayClick">
        <div class="custom-dialog-container">
          <div class="custom-dialog-card">
            <!-- Título com ícone -->
            <div v-if="currentTitle" class="custom-dialog-header">
              <v-icon class="custom-dialog-icon" color="warning" size="28">
                mdi-help-circle
              </v-icon>
              <h2 class="custom-dialog-title">{{ currentTitle }}</h2>
            </div>

            <!-- Corpo da mensagem -->
            <div v-if="currentMessage" class="custom-dialog-body">
              <p>{{ currentMessage }}</p>
            </div>

            <!-- Botões de ação -->
            <div class="custom-dialog-actions">
              <v-btn
                :color="cancelColor"
                variant="text"
                class="text-none"
                @click="handleNo"
              >
                {{ cancelText }}
              </v-btn>
              <v-btn
                :color="confirmColor"
                variant="elevated"
                class="text-none"
                @click="handleYes"
              >
                {{ confirmText }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isOpen = ref(false)
const currentTitle = ref('')
const currentMessage = ref('')
const persistent = ref(true)
const confirmText = ref('')
const cancelText = ref('')
const confirmColor = ref('primary')
const cancelColor = ref('grey')
let resolvePromise: ((value: boolean) => void) | null = null

const handleYes = () => {
  if (resolvePromise) resolvePromise(true)
  isOpen.value = false
}

const handleNo = () => {
  if (resolvePromise) resolvePromise(false)
  isOpen.value = false
}

const handleOverlayClick = () => {
  if (!persistent.value) {
    handleNo()
  }
}

interface ConfirmOptions {
  persistent?: boolean
  confirmText?: string
  cancelText?: string
  confirmColor?: string
  cancelColor?: string
}

const ConfirmDialog = (
  title: string, 
  message: string, 
  options?: ConfirmOptions
): Promise<boolean> => {
  currentTitle.value = title
  currentMessage.value = message
  persistent.value = options?.persistent ?? true
  confirmText.value = options?.confirmText || t('common.yes')
  cancelText.value = options?.cancelText || t('common.no')
  confirmColor.value = options?.confirmColor || 'primary'
  cancelColor.value = options?.cancelColor || 'grey'
  isOpen.value = true

  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

defineExpose({
  ConfirmDialog,
})
</script>

<style scoped>
/* Overlay de fundo */
.custom-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2400;
  padding: 16px;
}

/* Container do dialog */
.custom-dialog-container {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
}

/* Card do dialog */
.custom-dialog-card {
  background: rgb(var(--v-theme-surface));
  border-radius: 8px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
              0 24px 38px 3px rgba(0, 0, 0, 0.14),
              0 9px 46px 8px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

/* Header com título e ícone */
.custom-dialog-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 24px 16px 24px;
}

.custom-dialog-icon {
  flex-shrink: 0;
}

.custom-dialog-title {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0125em;
  word-break: break-word;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
}

/* Corpo da mensagem */
.custom-dialog-body {
  padding: 0 24px 16px 24px;
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.875rem;
  line-height: 1.5;
}

.custom-dialog-body p {
  margin: 0;
  word-break: break-word;
}

/* Área de botões */
.custom-dialog-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 24px 24px 24px;
  flex-wrap: wrap;
}

/* Animações */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-active .custom-dialog-card,
.dialog-fade-leave-active .custom-dialog-card {
  transition: transform 0.2s ease;
}

.dialog-fade-enter-from .custom-dialog-card {
  transform: scale(0.9);
}

.dialog-fade-leave-to .custom-dialog-card {
  transform: scale(0.9);
}

/* Responsividade para telas muito pequenas */
@media (max-width: 475px) {
  .custom-dialog-overlay {
    padding: 12px;
  }
  
  .custom-dialog-header {
    padding: 20px 20px 12px 20px;
  }
  
  .custom-dialog-body {
    padding: 0 20px 12px 20px;
  }
  
  .custom-dialog-actions {
    padding: 12px 20px 20px 20px;
  }
  
  .custom-dialog-title {
    font-size: 1.125rem;
  }
}
</style>

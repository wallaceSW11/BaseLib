<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>BaseLib Playground</v-app-bar-title>

      <v-spacer />

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/components">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <LanguageSelector :available-locales="availableLocales" />

      <ThemeToggle />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <FloatingNotify ref="floatingNotifyRef" />
    <LoadingOverlay ref="loadingOverlayRef" />
    <ConfirmDialog ref="confirmDialogRef" />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import {
  useNotifyStore,
  useLoadingStore,
  useConfirmStore
} from '@/utils'
import { useThemeSync } from '@/composables'
import { useThemeStore } from '@/stores'
import {
  FloatingNotify,
  LoadingOverlay,
  ConfirmDialog,
  LanguageSelector,
  ThemeToggle
} from '@/components'

const floatingNotifyRef = ref()
const loadingOverlayRef = ref()
const confirmDialogRef = ref()

const themeStore = useThemeStore()
const availableLocales = [
  { code: 'pt-BR', name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' }
]

useThemeSync()

function registerGlobalComponentRefs() {
  const notifyStore = useNotifyStore()
  const loadingStore = useLoadingStore()
  const confirmStore = useConfirmStore()

  notifyStore.setNotifyRef(floatingNotifyRef.value)
  loadingStore.setLoadingRef(loadingOverlayRef.value)
  confirmStore.setConfirmRef(confirmDialogRef.value)
}

onMounted(registerGlobalComponentRefs)
</script>

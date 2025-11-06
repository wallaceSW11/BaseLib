<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-2">BaseLib Component Playground</h1>
        <p class="text-subtitle-1 mb-8">Test all components and utilities in real-time</p>
      </v-col>
    </v-row>

    <!-- Buttons Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-gesture-tap-button</v-icon>
            Buttons
          </v-card-title>
          <v-card-text>
            <h4 class="mb-3">Standard Buttons</h4>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <PrimaryButton text="Primary" prepend-icon="mdi-check" @click="handleButtonClick('Primary')" />
              <SecondaryButton text="Secondary" prepend-icon="mdi-information" @click="handleButtonClick('Secondary')" />
              <TertiaryButton text="Tertiary" prepend-icon="mdi-star" @click="handleButtonClick('Tertiary')" />
              <QuartenaryButton text="Quartenary" prepend-icon="mdi-alert" @click="handleButtonClick('Quartenary')" />
            </div>

            <h4 class="mb-3">Button States</h4>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <PrimaryButton text="Disabled" :disabled="true" />
              <PrimaryButton text="Loading" :loading="true" />
              <BaseButton text="Custom Color" color="purple" prepend-icon="mdi-heart" />
              <BaseButton text="Outlined" variant="outlined" color="primary" />
            </div>

            <h4 class="mb-3">Button Sizes</h4>
            <div class="d-flex flex-wrap gap-2 align-center">
              <BaseButton text="X-Small" size="x-small" />
              <BaseButton text="Small" size="small" />
              <BaseButton text="Default" size="default" />
              <BaseButton text="Large" size="large" />
              <BaseButton text="X-Large" size="x-large" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Notifications Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-bell</v-icon>
            Notifications
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Click to show different notification types:</p>
            <div class="d-flex flex-wrap gap-2">
              <v-btn color="success" prepend-icon="mdi-check-circle" @click="showNotification('success')">
                Success
              </v-btn>
              <v-btn color="error" prepend-icon="mdi-alert-circle" @click="showNotification('error')">
                Error
              </v-btn>
              <v-btn color="warning" prepend-icon="mdi-alert" @click="showNotification('warning')">
                Warning
              </v-btn>
              <v-btn color="info" prepend-icon="mdi-information" @click="showNotification('info')">
                Info
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Loading Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-loading</v-icon>
            Loading Overlay
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test the full-screen loading overlay:</p>
            <div class="d-flex flex-wrap gap-2">
              <v-btn color="primary" prepend-icon="mdi-play" @click="showLoading(3000)">
                Show Loading (3s)
              </v-btn>
              <v-btn color="secondary" prepend-icon="mdi-play" @click="showLoading(5000, 'Processing large file...')">
                Custom Message (5s)
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Confirm Dialog Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-comment-question</v-icon>
            Confirm Dialog
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test the confirmation dialog:</p>
            <v-btn color="primary" prepend-icon="mdi-help-circle" @click="showConfirmDialog">
              Show Confirmation
            </v-btn>
            <p v-if="lastConfirmResult !== null" class="mt-3">
              Last result: <v-chip :color="lastConfirmResult ? 'success' : 'error'">
                {{ lastConfirmResult ? 'Confirmed' : 'Cancelled' }}
              </v-chip>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Theme Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-palette</v-icon>
            Theme Configuration
          </v-card-title>
          <v-card-text>
            <div class="mb-4">
              <p class="text-subtitle-2 mb-2">
                Current Theme: 
                <v-chip :color="themeStore.isDark ? 'grey-darken-3' : 'grey-lighten-3'">
                  {{ currentTheme }}
                </v-chip>
              </p>
              <p class="text-subtitle-2 mb-2">App Name: <strong>{{ themeStore.appName }}</strong></p>
              <p class="text-subtitle-2 mb-4">Loading: {{ themeStore.isLoading }}</p>
            </div>

            <div class="mb-4">
              <h4 class="mb-3">Current Theme Colors:</h4>
              <div class="d-flex flex-wrap gap-2">
                <v-chip 
                  v-for="(value, name) in themeStore.currentColors" 
                  :key="name" 
                  :style="{ backgroundColor: value, color: getContrastColor(value) }"
                  label
                >
                  {{ name }}
                </v-chip>
              </div>
            </div>

            <div class="d-flex gap-2">
              <v-btn color="primary" prepend-icon="mdi-theme-light-dark" @click="themeStore.toggleTheme()">
                Toggle Theme
              </v-btn>
              <v-btn color="secondary" prepend-icon="mdi-white-balance-sunny" @click="themeStore.setTheme('light')">
                Force Light
              </v-btn>
              <v-btn color="secondary" prepend-icon="mdi-weather-night" @click="themeStore.setTheme('dark')">
                Force Dark
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Icon Tooltip Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-tooltip</v-icon>
            Icon Tooltips
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center gap-4">
              <IconToolTip icon="mdi-help-circle" text="Help tooltip" />
              <IconToolTip icon="mdi-information" text="Information tooltip" />
              <IconToolTip icon="mdi-delete" text="Delete action" as-button />
              <IconToolTip icon="mdi-pencil" text="Edit action" :as-button="true" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-window-maximize</v-icon>
            Modal Base
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test the customizable modal component:</p>
            <v-btn color="primary" prepend-icon="mdi-open-in-new" @click="openModal">
              Open Modal
            </v-btn>
            
            <ModalBase 
              v-model="showModal" 
              title="Example Modal" 
              message="This is a customizable modal with actions"
              max-width="600"
              :actions="modalActions"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Language Selector Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-earth</v-icon>
            Language Selector
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Switch between available languages:</p>
            <LanguageSelector />
            <p class="mt-3 text-caption">Current locale: {{ $i18n.locale }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- API Testing Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-api</v-icon>
            API Client
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test API client with automatic loading and error handling:</p>
            <div class="d-flex gap-2 mb-3">
              <v-btn color="success" prepend-icon="mdi-check" @click="testApiSuccess">
                Simulate Success
              </v-btn>
              <v-btn color="error" prepend-icon="mdi-close" @click="testApiError">
                Simulate Error
              </v-btn>
            </div>
            <p v-if="apiResponse" class="mt-3">
              <v-alert :type="apiResponse.success ? 'success' : 'error'" density="compact">
                {{ apiResponse.message }}
              </v-alert>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores'
import { useGlobals } from '@/composables'
import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuartenaryButton,
  IconToolTip,
  ModalBase,
  LanguageSelector,
  type ModalAction
} from '@/components'

const { notify, loading, confirm } = useGlobals()
const themeStore = useThemeStore()
const showModal = ref(false)
const lastConfirmResult = ref<boolean | null>(null)
const apiResponse = ref<{ success: boolean; message: string } | null>(null)

const currentTheme = computed(() => themeStore.currentMode)

const modalActions: ModalAction[] = [
  {
    text: 'Confirm',
    color: 'primary',
    variant: 'elevated',
    icon: 'mdi-check',
    handler: () => {
      notify.success('Modal Action', 'You clicked Confirm!')
    }
  },
  {
    text: 'Cancel',
    color: 'grey',
    variant: 'text',
    handler: () => {
      notify.info('Modal Action', 'You clicked Cancel')
    }
  }
]

const handleButtonClick = (buttonType: string) => {
  notify.info('Button Clicked', `You clicked the ${buttonType} button!`)
}

const showNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
  const messages = {
    success: { title: 'Success!', message: 'Operation completed successfully' },
    error: { title: 'Error!', message: 'Something went wrong' },
    warning: { title: 'Warning!', message: 'Please check this carefully' },
    info: { title: 'Information', message: 'Here is some useful information' },
  }

  const { title, message } = messages[type]
  
  switch(type) {
    case 'success': notify.success(title, message); break;
    case 'error': notify.error(title, message); break;
    case 'warning': notify.warning(title, message); break;
    case 'info': notify.info(title, message); break;
  }
}

const showLoading = (duration: number, message?: string) => {
  loading.show(message || 'Processing your request...')
  setTimeout(() => {
    loading.hide()
    notify.success('Done!', 'Loading completed')
  }, duration)
}

const showConfirmDialog = async () => {
  const confirmed = await confirm.show(
    'Confirm Action',
    'Are you sure you want to proceed with this action?'
  )
  
  lastConfirmResult.value = confirmed

  if (confirmed) {
    notify.success('Confirmed', 'You chose Yes')
  } else {
    notify.info('Cancelled', 'You chose No')
  }
}

const openModal = () => {
  showModal.value = true
}

const getContrastColor = (hexColor: string): string => {
  // Convert hex to RGB
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

const testApiSuccess = async () => {
  loading.show('Making API request...')
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  loading.hide()
  notify.success('API Success', 'Request completed successfully')
  apiResponse.value = { success: true, message: 'Data retrieved successfully' }
}

const testApiError = async () => {
  loading.show('Making API request...')
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  loading.hide()
  notify.error('API Error', 'Failed to retrieve data')
  apiResponse.value = { success: false, message: 'Server returned error 500' }
}
</script>

<style scoped>
.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">Componentes da BaseLib</h1>
        <p class="text-subtitle-1 mb-8">Teste todos os componentes e utilitários</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Buttons</v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap gap-2">
              <PrimaryButton text="Primary" icon="mdi-check" @click="handleButtonClick('Primary')" />
              <SecondaryButton text="Secondary" icon="mdi-information" @click="handleButtonClick('Secondary')" />
              <TertiaryButton text="Tertiary" icon="mdi-star" @click="handleButtonClick('Tertiary')" />
              <QuartenaryButton text="Quartenary" icon="mdi-alert" @click="handleButtonClick('Quartenary')" />
              <PrimaryButton text="Disabled" :disabled="true" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Notifications</v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap gap-2">
              <v-btn color="success" @click="showNotification('success')">
                Success
              </v-btn>
              <v-btn color="error" @click="showNotification('error')">
                Error
              </v-btn>
              <v-btn color="warning" @click="showNotification('warning')">
                Warning
              </v-btn>
              <v-btn color="info" @click="showNotification('info')">
                Info
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Theme Configuration</v-card-title>
          <v-card-text>
            <div class="mb-4">
              <p class="text-subtitle-2 mb-2">Current Theme: <strong>{{ currentTheme }}</strong></p>
              <p class="text-subtitle-2 mb-4">App Name: <strong>{{ themeStore.appName }}</strong></p>
            </div>

            <div class="mb-4">
              <h4 class="mb-2">Theme Colors:</h4>
              <div class="d-flex flex-wrap gap-2">
                <v-chip v-for="(value, name) in themeStore.currentColors" :key="name" :color="String(name)" label>
                  {{ name }}: {{ value }}
                </v-chip>
              </div>
            </div>

            <v-btn color="primary" @click="themeStore.toggleTheme()">
              Toggle Theme
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Loading Overlay</v-card-title>
          <v-card-text>
            <v-btn color="primary" @click="showLoading">
              Show Loading (3 seconds)
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Confirm Dialog</v-card-title>
          <v-card-text>
            <v-btn color="primary" @click="showConfirm">
              Show Confirmation
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Icon Tooltip</v-card-title>
          <v-card-text>
            <div class="d-flex align-center gap-2">
              <IconToolTip icon="mdi-help-circle" text="Help tooltip" />
              <IconToolTip icon="mdi-information" text="Information tooltip" />
              <IconToolTip icon="mdi-delete" text="Delete action" as-button />
              <IconToolTip icon="mdi-pencil" text="Edit action" :as-button="true" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title>Modal Base</v-card-title>
          <v-card-text>
            <v-btn color="primary" @click="showModal = true">
              Open Modal
            </v-btn>
            
            <ModalBase v-model="showModal" title="Example Modal" max-width="600">
              <template #content>
                <p>This is an example of ModalBase component.</p>
                <p class="mt-4">You can put any content here!</p>
              </template>
              <template #actions>
                <v-btn @click="showModal = false">Close</v-btn>
                <v-btn color="primary" @click="showModal = false">Confirm</v-btn>
              </template>
            </ModalBase>
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
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuartenaryButton,
  IconToolTip,
  ModalBase
} from '@/components'

const { notify, loading, confirm } = useGlobals()
const themeStore = useThemeStore()
const showModal = ref(false)

const currentTheme = computed(() => themeStore.currentMode)

const handleButtonClick = (buttonType: string) => {
  notify('info', 'Button Clicked', `You clicked the ${buttonType} button!`)
}

const showNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
  const messages = {
    success: { title: 'Success!', message: 'Operation completed successfully' },
    error: { title: 'Error!', message: 'Something went wrong' },
    warning: { title: 'Warning!', message: 'Please check this carefully' },
    info: { title: 'Information', message: 'Here is some useful information' },
  }

  const { title, message } = messages[type]
  notify(type, title, message)
}

const showLoading = () => {
  loading(true, 'Processing your request...')
  setTimeout(() => {
    loading(false)
    notify('success', 'Done!', 'Loading completed')
  }, 3000)
}

const showConfirm = async () => {
  const confirmed = await confirm('Are you sure you want to proceed?', 'Choose your option')

  if (confirmed) {
    notify('success', 'Confirmed', 'You chose Yes')
  } else {
    notify('error', 'Cancelled', 'You chose No')
  }
}
</script>

<style scoped>
.gap-2 {
  gap: 0.5rem;
}
</style>

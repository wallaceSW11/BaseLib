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
            <div class="d-flex flex-wrap gap-2">
              <v-btn color="primary" prepend-icon="mdi-help-circle" @click="showConfirmDialog">
                Show Confirmation
              </v-btn>
              <v-btn color="error" prepend-icon="mdi-delete" @click="showDeleteConfirm">
                Delete Confirmation
              </v-btn>
              <v-btn color="info" prepend-icon="mdi-information" @click="showOkConfirm">
                OK Dialog
              </v-btn>
            </div>
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
            <p class="mb-3">Hover over icons to see tooltips. Click the delete button to test the confirm dialog:</p>
            <div class="d-flex align-center gap-4">
              <IconToolTip icon="mdi-help-circle" text="Help tooltip" />
              <IconToolTip icon="mdi-information" text="Information tooltip" />
              <IconToolTip icon="mdi-delete" text="Delete item" as-button @click="handleDeleteClick" />
              <IconToolTip icon="mdi-pencil" text="Edit action" :as-button="true" @click="handleEditClick" />
            </div>
            <p v-if="lastIconAction" class="mt-3 text-caption">
              Last action: <v-chip size="small" color="info">{{ lastIconAction }}</v-chip>
            </p>
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
              Open Modal with Form
            </v-btn>
            
            <ModalBase 
              v-model="showModal" 
              title="Add Observation" 
              max-width="600"
              attach="body"
              :fullscreen="isMobileOrTablet"
              :actions="modalActions"
            >
              <v-form ref="myform">
                <v-textarea
                v-model="observationText"
                label="Observation"
                placeholder="Enter your observation here..."
                rows="4"
                variant="outlined"
                class="mt-2"
              />

              <v-select 
                v-model="selectedOption" 
                :items="options"
                item-title="text"
                item-value="value"
                label="Select an Option"
                variant="outlined"
                class="mt-2"
              />
              </v-form>
              
              <div v-if="selectedOption" class="mt-2 text-caption text-grey">
                Selected: {{ selectedOption }}
              </div>
            </ModalBase>
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

    <!-- Money Field Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-currency-usd</v-icon>
            Money Field
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test the money input field with different currencies:</p>
            
            <v-row>
              <v-col cols="12" md="6">
                <MoneyField 
                  v-model="moneyBRL" 
                  label="Valor em Reais (BRL)"
                  hint="Digite o valor em reais"
                  persistent-hint
                  currency="BRL"
                  locale="pt-BR"
                />
                <p class="mt-2 text-caption">Valor: R$ {{ moneyBRL.toFixed(2) }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <MoneyField 
                  v-model="moneyUSD" 
                  label="Amount in Dollars (USD)"
                  hint="Enter amount in dollars"
                  persistent-hint
                  currency="USD"
                  locale="en-US"
                />
                <p class="mt-2 text-caption">Value: $ {{ moneyUSD.toFixed(2) }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <MoneyField 
                  v-model="moneyEUR" 
                  label="Montant en Euros (EUR)"
                  currency="EUR"
                  locale="fr-FR"
                />
                <p class="mt-2 text-caption">Valeur: € {{ moneyEUR.toFixed(2) }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <MoneyField 
                  v-model="moneyDisabled" 
                  label="Disabled Field"
                  :disabled="true"
                  currency="BRL"
                />
              </v-col>
            </v-row>

            <v-divider class="my-4" />

            <div class="d-flex gap-2">
              <v-btn color="primary" prepend-icon="mdi-plus" @click="addMoney">
                Add R$ 100,00
              </v-btn>
              <v-btn color="secondary" prepend-icon="mdi-minus" @click="subtractMoney">
                Subtract R$ 50,00
              </v-btn>
              <v-btn color="warning" prepend-icon="mdi-refresh" @click="resetMoney">
                Reset All
              </v-btn>
            </div>

            <v-alert v-if="totalMoney > 0" type="info" class="mt-4" density="compact">
              Total (BRL): R$ {{ totalMoney.toFixed(2) }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Email Field Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-email</v-icon>
            Email Field
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test the email input field with validation:</p>
            
            <v-row>
              <v-col cols="12" md="6">
                <EmailField 
                  v-model="email1" 
                  label="Email Address"
                  hint="Enter a valid email address"
                  persistent-hint
                  required
                  @valid="(isValid) => handleEmailValidation('email1', isValid)"
                />
                <v-chip 
                  v-if="email1" 
                  :color="isEmail1Valid ? 'success' : 'error'" 
                  size="small" 
                  class="mt-2"
                >
                  {{ isEmail1Valid ? 'Valid' : 'Invalid' }}
                </v-chip>
              </v-col>

              <v-col cols="12" md="6">
                <EmailField 
                  v-model="email2" 
                  label="Email with + sign (pre-filled)"
                  hint="Supports email+tag@domain.com format"
                  persistent-hint
                  @valid="(isValid) => handleEmailValidation('email2', isValid)"
                />
                <p class="mt-2 text-caption">Value: {{ email2 }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <EmailField 
                  v-model="email3" 
                  label="Optional Email"
                  hint="This field is optional"
                  persistent-hint
                  :required="false"
                  @valid="(isValid) => handleEmailValidation('email3', isValid)"
                />
              </v-col>

              <v-col cols="12" md="6">
                <EmailField 
                  label="Disabled Email"
                  model-value="disabled@example.com"
                  :disabled="true"
                />
              </v-col>
            </v-row>

            <v-divider class="my-4" />

            <div class="d-flex gap-2">
              <v-btn 
                color="primary" 
                prepend-icon="mdi-send" 
                @click="testEmailSubmit"
                :disabled="!email1 || !isEmail1Valid"
              >
                Test Submit
              </v-btn>
            </div>

            <v-alert v-if="email1 && isEmail1Valid" type="success" class="mt-4" density="compact">
              ✓ Email format is valid and ready to use
            </v-alert>

            <v-alert v-if="email1 && !isEmail1Valid" type="error" class="mt-4" density="compact">
              ✗ Please enter a valid email address
            </v-alert>

            <div class="mt-4">
              <p class="text-subtitle-2 mb-2">Valid email examples:</p>
              <ul class="text-caption">
                <li>user@example.com</li>
                <li>user.name@example.com</li>
                <li>user+tag@example.com</li>
                <li>user_name@example.co.uk</li>
                <li>user123@sub.example.com</li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Number Field Section -->
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-numeric</v-icon>
            Number Field
          </v-card-title>
          <v-card-text>
            <p class="mb-3">Test the number input field with configurable decimal places:</p>
            
            <v-row>
              <v-col cols="12" md="6">
                <NumberField 
                  v-model="numberInteger" 
                  label="Integer (0 decimal places)"
                  hint="Only whole numbers"
                  persistent-hint
                  :decimal-places="0"
                />
                <p class="mt-2 text-caption">Value: {{ numberInteger }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <NumberField 
                  v-model="numberDecimal1" 
                  label="Decimal (2 places)"
                  hint="Two decimal places"
                  persistent-hint
                  :decimal-places="2"
                />
                <p class="mt-2 text-caption">Value: {{ numberDecimal1.toFixed(2) }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <NumberField 
                  v-model="numberDecimal2" 
                  label="Decimal (3 places)"
                  hint="Three decimal places"
                  persistent-hint
                  :decimal-places="3"
                />
                <p class="mt-2 text-caption">Value: {{ numberDecimal2.toFixed(3) }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <NumberField 
                  v-model="numberDecimal3" 
                  label="Decimal (4 places)"
                  hint="Four decimal places"
                  persistent-hint
                  :decimal-places="4"
                />
                <p class="mt-2 text-caption">Value: {{ numberDecimal3.toFixed(4) }}</p>
              </v-col>

              <v-col cols="12" md="6">
                <NumberField 
                  v-model="numberDisabled" 
                  label="Disabled Field"
                  :disabled="true"
                  :decimal-places="0"
                />
              </v-col>

              <v-col cols="12" md="6">
                <NumberField 
                  v-model="numberInteger" 
                  label="No Negative Numbers"
                  hint="Only positive values allowed"
                  persistent-hint
                  :decimal-places="0"
                  :allow-negative="false"
                />
              </v-col>
            </v-row>

            <v-divider class="my-4" />

            <div class="d-flex gap-2">
              <v-btn color="primary" prepend-icon="mdi-plus" @click="incrementNumber">
                Add 10
              </v-btn>
              <v-btn color="secondary" prepend-icon="mdi-minus" @click="decrementNumber">
                Subtract 5
              </v-btn>
              <v-btn color="warning" prepend-icon="mdi-refresh" @click="resetNumbers">
                Reset All
              </v-btn>
            </div>

            <v-alert v-if="numberInteger > 0" type="info" class="mt-4" density="compact">
              Integer value: {{ numberInteger.toLocaleString('pt-BR') }}
            </v-alert>
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
import { useGlobals, useBreakpoint } from '@/composables'
import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuartenaryButton,
  IconToolTip,
  ModalBase,
  LanguageSelector,
  MoneyField,
  EmailField,
  NumberField,
  type ModalAction
} from '@/components'

const { notify, loading, confirm } = useGlobals()
const { isMobileOrTablet } = useBreakpoint()
const themeStore = useThemeStore()
const showModal = ref(false)
const observationText = ref('')
const lastConfirmResult = ref<boolean | null>(null)
const apiResponse = ref<{ success: boolean; message: string } | null>(null)
const lastIconAction = ref<string | null>(null)

// Money Field states
const moneyBRL = ref(1250.50)
const moneyUSD = ref(500.00)
const moneyEUR = ref(750.00)
const moneyDisabled = ref(999.99)

const totalMoney = computed(() => moneyBRL.value + moneyUSD.value + moneyEUR.value)

// Email Field states
const email1 = ref('')
const email2 = ref('user+tag@example.com')
const email3 = ref('')
const isEmail1Valid = ref(false)
const isEmail2Valid = ref(true)
const isEmail3Valid = ref(false)

// Number Field states
const numberInteger = ref(1234)
const numberDecimal1 = ref(123.45)
const numberDecimal2 = ref(9.876)
const numberDecimal3 = ref(1234.5678)
const numberDisabled = ref(999)

const currentTheme = computed(() => themeStore.currentMode)

const modalActions: ModalAction[] = [
  {
    text: 'Save',
    color: 'primary',
    variant: 'elevated',
    icon: 'mdi-content-save',
    handler: () => {
      console.log('Salvando...', observationText.value, selectedOption.value)
      notify.success('Saved!', 'Observation saved successfully')
      // Quem usa o modal decide se fecha ou não
      // showModal.value = false
    }
  },
  {
    text: 'Cancel',
    color: 'secondary',
    variant: 'outlined',
    icon: 'mdi-close',
    handler: () => {
      observationText.value = ''
      selectedOption.value = null
      showModal.value = false // Aqui sim, fecha o modal
      notify.info('Cancelled', 'No changes were made')
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

const showDeleteConfirm = async () => {
  const confirmed = await confirm.show(
    'Delete Item',
    'This action cannot be undone. Are you sure?',
    {
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmColor: 'error',
      cancelColor: 'grey'
    }
  )
  
  lastConfirmResult.value = confirmed

  if (confirmed) {
    notify.success('Deleted', 'Item was deleted')
  } else {
    notify.info('Cancelled', 'Delete cancelled')
  }
}

const showOkConfirm = async () => {
  const confirmed = await confirm.show(
    'Information',
    'This is an informational message.',
    {
      confirmText: 'OK',
      cancelText: 'Close',
      confirmColor: 'primary',
      cancelColor: 'grey'
    }
  )
  
  lastConfirmResult.value = confirmed
}

const openModal = () => {
  showModal.value = true
}

const getContrastColor = (hexColor: string): string => {
  // Convert hex to RGB
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  
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

const options = ref([
  { text: 'Option 1', value: 'option1' },
  { text: 'Option 2', value: 'option2' },
  { text: 'Option 3', value: 'option3' }
])

const selectedOption = ref<string | null>(null)

const addMoney = () => {
  moneyBRL.value += 100
  notify.success('Added!', 'R$ 100,00 added to BRL field')
}

const subtractMoney = () => {
  moneyBRL.value = Math.max(0, moneyBRL.value - 50)
  notify.info('Subtracted', 'R$ 50,00 subtracted from BRL field')
}

const resetMoney = () => {
  moneyBRL.value = 0
  moneyUSD.value = 0
  moneyEUR.value = 0
  notify.warning('Reset', 'All money fields reset to zero')
}

const handleEmailValidation = (fieldName: string, isValid: boolean) => {
  if (fieldName === 'email1') isEmail1Valid.value = isValid
  if (fieldName === 'email2') isEmail2Valid.value = isValid
  if (fieldName === 'email3') isEmail3Valid.value = isValid
}

const testEmailSubmit = () => {
  if (isEmail1Valid.value && email1.value) {
    notify.success('Valid Email', `Email ${email1.value} is valid and ready to submit!`)
  } else {
    notify.error('Invalid Email', 'Please enter a valid email address')
  }
}

const incrementNumber = () => {
  numberInteger.value += 10
  notify.info('Incremented', `Added 10 to integer field`)
}

const decrementNumber = () => {
  numberInteger.value = Math.max(0, numberInteger.value - 5)
  notify.info('Decremented', `Subtracted 5 from integer field`)
}

const resetNumbers = () => {
  numberInteger.value = 0
  numberDecimal1.value = 0
  numberDecimal2.value = 0
  numberDecimal3.value = 0
  notify.warning('Reset', 'All number fields reset to zero')
}

const handleDeleteClick = async () => {
  lastIconAction.value = 'Delete clicked'
  
  const confirmed = await confirm.show(
    'Confirm Delete',
    'Are you sure you want to delete this item? This action cannot be undone.',
    {
      confirmText: 'Yes, Delete',
      cancelText: 'No, Cancel',
      confirmColor: 'error',
      cancelColor: 'grey'
    }
  )
  
  if (confirmed) {
    notify.success('Deleted!', 'Item was successfully deleted')
    lastIconAction.value = 'Item deleted (Yes clicked)'
  } else {
    notify.info('Cancelled', 'Delete action was cancelled')
    lastIconAction.value = 'Delete cancelled (No clicked)'
  }
}

const handleEditClick = () => {
  lastIconAction.value = 'Edit clicked'
  notify.info('Edit', 'Edit button was clicked')
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

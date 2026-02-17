<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="text" icon>
        <span v-if="currentFlag" class="lang-flag" :aria-label="currentLocaleName">{{ currentFlag }}</span>
        <v-icon v-else>mdi-earth</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="loc in locales" :key="loc.code" :active="locale === loc.code" @click="setLocale(loc.code)">
        <template v-slot:prepend>
          <span class="lang-flag lang-flag--list" :aria-label="loc.name">{{ getFlagEmoji(loc.countryCode) }}</span>
        </template>
        <v-list-item-title>{{ loc.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import type { LocaleOption } from '../locales'

interface Props {
  availableLocales?: readonly LocaleOption[]
}

const props = defineProps<Props>()

const { locale, locales, setLocale } = useLocale(props.availableLocales)

const currentLocaleData = computed(() => {
  return locales.find((l: { code: string }) => l.code === locale.value) || locales[0]
})

const currentLocaleName = computed(() => currentLocaleData.value.name)

const currentFlag = computed(() => getFlagEmoji(currentLocaleData.value.countryCode))

// Converte código de país ISO 3166-1 alpha-2 em emoji de bandeira
// Funciona em todos os browsers modernos sem nenhuma dependência
function getFlagEmoji(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(0x1F1E6 - 65 + char.charCodeAt(0)))
    .join('')
}
</script>

<style scoped>
.lang-flag {
  font-size: 20px;
  line-height: 1;
}

.lang-flag--list {
  margin-right: 12px;
}
</style>

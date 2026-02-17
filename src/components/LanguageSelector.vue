<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="text" icon>
        <img
          v-if="currentFlagSvg"
          :src="currentFlagSvg"
          :alt="currentLocaleName"
          class="lang-flag"
        />
        <v-icon v-else>mdi-earth</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="loc in locales"
        :key="loc.code"
        :active="locale === loc.code"
        @click="setLocale(loc.code)"
      >
        <template v-slot:prepend>
          <img
            v-if="getFlagSvg(loc.countryCode)"
            :src="getFlagSvg(loc.countryCode)"
            :alt="loc.name"
            class="lang-flag lang-flag--list"
          />
          <v-icon v-else style="margin-right: 12px;">mdi-earth</v-icon>
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
const currentFlagSvg = computed(() => getFlagSvg(currentLocaleData.value.countryCode))

// SVGs inline das bandeiras suportadas — sem dependência externa, sem arquivo gigante
const FLAG_SVGS: Record<string, string> = {
  BR: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504"><rect width="720" height="504" fill="%23009c3b"/><polygon points="360,36 684,252 360,468 36,252" fill="%23ffdf00"/><circle cx="360" cy="252" r="108" fill="%23002776"/><path d="M252,216 a108,108 0 0,1 216,36" fill="none" stroke="white" stroke-width="18"/><text x="360" y="270" text-anchor="middle" font-size="28" font-family="sans-serif" fill="white" font-weight="bold" letter-spacing="3">ORDEM E PROGRESSO</text></svg>`,
  US: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504"><rect width="720" height="504" fill="white"/><rect y="0" width="720" height="38.77" fill="%23B22234"/><rect y="77.54" width="720" height="38.77" fill="%23B22234"/><rect y="155.08" width="720" height="38.77" fill="%23B22234"/><rect y="232.62" width="720" height="38.77" fill="%23B22234"/><rect y="310.15" width="720" height="38.77" fill="%23B22234"/><rect y="387.69" width="720" height="38.77" fill="%23B22234"/><rect y="465.23" width="720" height="38.77" fill="%23B22234"/><rect width="288" height="271.35" fill="%233C3B6E"/><g fill="white" font-size="30" text-anchor="middle" font-family="sans-serif"><text x="144" y="55">★ ★ ★ ★ ★ ★</text><text x="144" y="100">★ ★ ★ ★ ★</text><text x="144" y="145">★ ★ ★ ★ ★ ★</text><text x="144" y="190">★ ★ ★ ★ ★</text><text x="144" y="235">★ ★ ★ ★ ★ ★</text></g></svg>`,
}

function getFlagSvg(countryCode: string): string | undefined {
  return FLAG_SVGS[countryCode.toUpperCase()]
}
</script>

<style scoped>
.lang-flag {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.lang-flag--list {
  margin-right: 12px;
}
</style>

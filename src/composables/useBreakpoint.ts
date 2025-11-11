import { computed } from 'vue'
import { useDisplay } from 'vuetify'

/**
 * Composable para detecção de breakpoints da tela
 * Utiliza o sistema de breakpoints do Vuetify
 */
export function useBreakpoint() {
  const display = useDisplay()

  /**
   * Detecta se a tela é mobile (extra small)
   * Equivalente a vuetify.breakpoint.xsOnly
   */
  const isMobile = computed(() => display.xs.value)

  /**
   * Detecta se a tela é mobile ou tablet (small ou menor)
   * Equivalente a vuetify.breakpoint.smAndDown
   */
  const isMobileOrTablet = computed(() => display.smAndDown.value)

  return {
    isMobile,
    isMobileOrTablet,
  }
}

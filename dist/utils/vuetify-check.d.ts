import type { App } from "vue";
/**
 * Verifica se o Vuetify está registrado no app Vue.
 * Emite um aviso no console se não estiver presente.
 *
 * @param app - Instância do aplicativo Vue
 */
export declare function ensureVuetify(app: App): void;
/**
 * Debug helper: Verifica múltiplas instâncias do Vuetify e containers de overlay.
 * Use em desenvolvimento para diagnosticar problemas com v-dialog, v-select, etc.
 *
 * @example
 * import { debugVuetifyInstances } from '@wallacesw11/base-lib'
 * debugVuetifyInstances()
 */
export declare function debugVuetifyInstances(): void;
//# sourceMappingURL=vuetify-check.d.ts.map
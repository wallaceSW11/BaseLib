import type { App } from "vue";

/**
 * Verifica se o Vuetify está registrado no app Vue.
 * Emite um aviso no console se não estiver presente.
 *
 * @param app - Instância do aplicativo Vue
 */
export function ensureVuetify(app: App): void {
  // Acessando propriedades internas do Vue para verificar se Vuetify está registrado
  const vuetifyInstance = (app as any)._context?.provides?.vuetify;

  if (!vuetifyInstance) {
    console.warn(
      "[BaseLib] ⚠️ Vuetify não detectado!\n" +
        "Certifique-se de chamar app.use(vuetify) ANTES de app.use(BaseLib).\n" +
        "Exemplo:\n" +
        "  import { createVuetify } from 'vuetify'\n" +
        "  const vuetify = createVuetify()\n" +
        "  app.use(vuetify)\n" +
        "  app.use(BaseLib)"
    );
  }
}

/**
 * Debug helper: Verifica múltiplas instâncias do Vuetify e containers de overlay.
 * Use em desenvolvimento para diagnosticar problemas com v-dialog, v-select, etc.
 * 
 * @example
 * import { debugVuetifyInstances } from '@wallacesw11/base-lib'
 * debugVuetifyInstances()
 */
export function debugVuetifyInstances(): void {
  console.group("🔍 Vuetify Debug Info");

  // 1. Verificar containers de overlay
  const overlayContainers = document.querySelectorAll(".v-overlay-container");
  console.log(`📦 Overlay containers encontrados: ${overlayContainers.length}`);
  overlayContainers.forEach((container, index) => {
    console.log(`  [${index}]`, container);
  });

  // 2. Verificar v-application
  const vApps = document.querySelectorAll(".v-application");
  console.log(`🎨 v-application encontrados: ${vApps.length}`);
  vApps.forEach((app, index) => {
    console.log(`  [${index}]`, app);
  });

  // 3. Verificar overlays ativos
  const overlays = document.querySelectorAll(".v-overlay");
  console.log(`📊 Overlays ativos: ${overlays.length}`);
  overlays.forEach((overlay, index) => {
    const isActive = overlay.classList.contains("v-overlay--active");
    console.log(`  [${index}] Active: ${isActive}`, overlay);
  });

  // 4. Verificar menus ativos
  const menus = document.querySelectorAll(".v-menu");
  console.log(`🍔 Menus encontrados: ${menus.length}`);
  menus.forEach((menu, index) => {
    console.log(`  [${index}]`, menu);
  });

  // 5. Verificar selects
  const selects = document.querySelectorAll(".v-select");
  console.log(`📋 v-select encontrados: ${selects.length}`);
  selects.forEach((select, index) => {
    console.log(`  [${index}]`, select);
  });

  // 6. Avisos
  if (overlayContainers.length > 1) {
    console.warn(
      "⚠️ MÚLTIPLOS OVERLAY CONTAINERS DETECTADOS!\n" +
        "Isso indica que pode haver múltiplas instâncias do Vuetify.\n" +
        "Solução: Certifique-se de ter apenas uma instância do Vuetify registrada."
    );
  }

  if (overlayContainers.length === 0) {
    console.warn(
      "⚠️ NENHUM OVERLAY CONTAINER ENCONTRADO!\n" +
        "O Vuetify pode não estar inicializado corretamente.\n" +
        "Verifique se você chamou app.use(vuetify) no main.ts"
    );
  }

  console.groupEnd();
}

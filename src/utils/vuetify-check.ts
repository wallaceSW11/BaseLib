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

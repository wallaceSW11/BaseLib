/**
 * Lista dos componentes Vuetify utilizados por esta lib.
 *
 * Use isso no projeto consumidor ao configurar o Vuetify,
 * para garantir que os componentes da lib sejam registrados
 * sem precisar importar tudo com `import * as components from "vuetify/components"`.
 *
 * @example
 * // vuetify.ts do projeto consumidor
 * import { requiredVuetifyComponents } from 'sua-lib'
 * import { ... } from 'vuetify/components' // seus próprios componentes
 *
 * export default createVuetify({
 *   components: {
 *     ...requiredVuetifyComponents,
 *     // ...seus outros componentes
 *   },
 * })
 */
import {
  VAlert,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VCol,
  VDialog,
  VIcon,
  VMenu,
  VProgressCircular,
  VRow,
  VSelect,
  VSpacer,
  VTextField,
  VTooltip,
  VList,
  VListItem,
  VListItemTitle,
} from "vuetify/components";

export const requiredVuetifyComponents: Record<string, any> = {
  VAlert,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VCol,
  VDialog,
  VIcon,
  VMenu,
  VProgressCircular,
  VRow,
  VSelect,
  VSpacer,
  VTextField,
  VTooltip,
  VList,
  VListItem,
  VListItemTitle,
};

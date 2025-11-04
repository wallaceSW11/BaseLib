import { createI18n } from "vue-i18n";
import { defaultMessages } from "@/locales";

export const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "en-US",
  messages: defaultMessages,
  globalInjection: true,
  missingWarn: false,
  fallbackWarn: false,
});

export default i18n;

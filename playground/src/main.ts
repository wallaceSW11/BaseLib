import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import { setupLib } from "@/index";
import { useThemeStore } from "@/stores";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(i18n);
setupLib(app);

async function initializeAndMountApp() {
  const themeStore = useThemeStore();
  await themeStore.loadTheme();
  app.mount("#app");
}

initializeAndMountApp();

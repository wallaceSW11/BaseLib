import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { setupLib } from '@/index';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(vuetify);
setupLib(app);

app.mount('#app');

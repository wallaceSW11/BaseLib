import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();

export function createComponent(component: any, options?: any) {
  return mount(component, {
    global: {
      plugins: [vuetify],
    },
    ...options,
  });
}

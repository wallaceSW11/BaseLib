import { mount, type MountingOptions, type VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import type { Component } from 'vue';

const vuetify = createVuetify();

export function createComponent(
  component: Component,
  options?: MountingOptions<Record<string, unknown>>,
): VueWrapper {
  return mount(component, {
    global: {
      plugins: [vuetify],
    },
    ...options,
  });
}

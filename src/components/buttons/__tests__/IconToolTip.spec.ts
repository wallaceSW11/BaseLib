import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createComponent } from '@/testutils';
import IconToolTip from '../IconToolTip.vue';

describe('IconToolTip', () => {
  let wrapper: ReturnType<typeof createComponent>;

  beforeEach(() => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil' },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render the icon on the button', () => {
    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('icon')).toBe('mdi-pencil');
  });

  it('should render tooltip with text when tooltip is not provided', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', text: 'Editar' },
    });

    const tooltip = wrapper.findComponent({ name: 'v-tooltip' });

    expect(tooltip.props('text')).toBe('Editar');
  });

  it('should render tooltip with tooltip prop when both text and tooltip are provided', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', text: 'Editar', tooltip: 'Clique para editar' },
    });

    const tooltip = wrapper.findComponent({ name: 'v-tooltip' });

    expect(tooltip.props('text')).toBe('Clique para editar');
  });

  it('should disable tooltip when neither text nor tooltip is provided', () => {
    const tooltip = wrapper.findComponent({ name: 'v-tooltip' });

    expect(tooltip.props('disabled')).toBe(true);
  });

  it('should enable tooltip when text is provided', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', text: 'Editar' },
    });

    const tooltip = wrapper.findComponent({ name: 'v-tooltip' });

    expect(tooltip.props('disabled')).toBe(false);
  });

  it('should enable tooltip when tooltip is provided', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', tooltip: 'Clique para editar' },
    });

    const tooltip = wrapper.findComponent({ name: 'v-tooltip' });

    expect(tooltip.props('disabled')).toBe(false);
  });

  it('should use variant "text" when asButton is true', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', asButton: true },
    });

    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('variant')).toBe('text');
  });

  it('should use variant "plain" when asButton is false', () => {
    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('variant')).toBe('plain');
  });

  it('should use density "default" when asButton is true', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', asButton: true },
    });

    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('density')).toBe('default');
  });

  it('should use density "compact" when asButton is false', () => {
    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('density')).toBe('compact');
  });

  it('should use the provided color', () => {
    wrapper = createComponent(IconToolTip, {
      props: { icon: 'mdi-pencil', color: 'error' },
    });

    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('color')).toBe('error');
  });

  it('should default color to "primary"', () => {
    const btn = wrapper.findComponent({ name: 'v-btn' });

    expect(btn.props('color')).toBe('primary');
  });

  it('should emit click event when button is clicked', async () => {
    const btn = wrapper.findComponent({ name: 'v-btn' });

    await btn.trigger('click');

    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('should emit click event with MouseEvent payload', async () => {
    const btn = wrapper.findComponent({ name: 'v-btn' });

    await btn.trigger('click');

    const emitted = wrapper.emitted('click');

    expect(emitted![0][0]).toBeInstanceOf(MouseEvent);
  });
});

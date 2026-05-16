import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createComponent } from '@/testutils';
import MoneyField from '../MoneyField.vue';

const FORMAT_CASES = [
  { value: 0, expected: 'R$ 0,00' },
  { value: 1234.56, expected: 'R$ 1.234,56' },
  { value: 0.5, expected: 'R$ 0,50' },
  { value: 99.99, expected: 'R$ 99,99' },
  { value: 1000000, expected: 'R$ 1.000.000,00' },
  { value: -50, expected: '-R$ 50,00' },
] as const;

const INPUT_PARSE_CASES = [
  { input: '0', expected: 0 },
  { input: '123456', expected: 1234.56 },
  { input: '9999', expected: 99.99 },
  { input: '-', expected: 0 },
] as const;

describe('MoneyField', () => {
  let wrapper: ReturnType<typeof createComponent>;

  beforeEach(() => {
    wrapper = createComponent(MoneyField);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  function getInputValue(): string {
    const input = wrapper.find('input');

    return (input.element as HTMLInputElement).value;
  }

  it.each(FORMAT_CASES)('should format $value as "$expected" when modelValue is set', async ({ value, expected }) => {
    await wrapper.setProps({ modelValue: value });
    const inputValue = getInputValue();

    expect(inputValue).toBe(expected);
  });

  it.each(INPUT_PARSE_CASES)('should parse "$input" to $expected on user input', async ({ input, expected }) => {
    const inputEl = wrapper.find('input');
    await inputEl.setValue(input);

    const emitted = wrapper.emitted('update:modelValue');

    expect(emitted).toBeTruthy();
    expect(emitted![0][0]).toBe(expected);
  });

  it('should display custom currency symbol when currency prop is set', async () => {
    await wrapper.setProps({ modelValue: 100, currency: 'USD' });
    const inputValue = getInputValue();

    expect(inputValue).toBe('$ 100,00');
  });

  it('should format with custom locale when locale prop is set', async () => {
    await wrapper.setProps({ modelValue: 1234.56, locale: 'en-US' });
    const inputValue = getInputValue();

    expect(inputValue).toBe('R$ 1,234.56');
  });
});

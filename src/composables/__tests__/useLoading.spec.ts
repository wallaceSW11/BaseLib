import { describe, it, expect } from 'vitest';
import { useLoading } from '../useLoading';

const SHOW_CASES = [
  { msg: undefined, expected: 'Carregando...' },
  { msg: 'Saving...', expected: 'Saving...' },
  { msg: 'Processing...', expected: 'Processing...' },
] as const;

describe('useLoading', () => {
  it('starts with isActive false and default message', () => {
    const { isActive, message } = useLoading();

    expect(isActive.value).toBe(false);
    expect(message.value).toBe('Carregando...');
  });

  it.each(SHOW_CASES)('show sets message to "$expected"', ({ msg, expected }) => {
    const { isActive, message, show } = useLoading();

    show(msg);

    expect(isActive.value).toBe(true);
    expect(message.value).toBe(expected);
  });

  it('toggle switches isActive between true and false', () => {
    const { isActive, show, hide } = useLoading();

    expect(isActive.value).toBe(false);

    show();
    expect(isActive.value).toBe(true);

    hide();
    expect(isActive.value).toBe(false);
  });

  it('hide preserves the last message', () => {
    const { isActive, message, show, hide } = useLoading();

    show('Processing...');
    hide();

    expect(isActive.value).toBe(false);
    expect(message.value).toBe('Processing...');
  });

  it('consecutive show calls override the message', () => {
    const { message, show } = useLoading();

    show('First');
    show('Second');

    expect(message.value).toBe('Second');
  });
});

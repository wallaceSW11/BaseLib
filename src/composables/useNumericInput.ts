import { ref, watch, nextTick, type Ref } from 'vue';

export const NAVIGATION_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];

export function useNumericInput(
  modelValue: Ref<number | null | undefined>,
  emit: (value: number) => void,
  format: (value: number) => string,
  parse: (input: string) => number,
) {
  const formattedValue = ref('');

  function moveCursorToEnd() {
    const input = document.activeElement as HTMLInputElement | null;

    nextTick(() => {
      if (!input || input.value == null) return;

      input.setSelectionRange(input.value.length, input.value.length);
    });
  }

  function handleInput(value: string) {
    const numericValue = parse(value);

    emit(numericValue);

    nextTick(() => {
      formattedValue.value = format(numericValue);
    });
  }

  function handleFocus() {
    moveCursorToEnd();
  }

  function handleClick() {
    moveCursorToEnd();
  }

  watch(
    () => modelValue.value,
    (newVal) => {
      const value = newVal ?? 0;
      formattedValue.value = format(value);
    },
    { immediate: true },
  );

  return {
    formattedValue,
    moveCursorToEnd,
    handleInput,
    handleFocus,
    handleClick,
  };
}

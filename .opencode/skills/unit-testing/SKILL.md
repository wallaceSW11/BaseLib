---
name: unit-testing
description: Unit testing standards for BaseLib. Use before writing or reviewing tests.
---

# Unit Testing — BaseLib

## Philosophy

Test **behavior**, not implementation. A test should only break when public behavior changes, not when you refactor internal code.

Treat the component/composable as a **black box**: provide input (props, events, arguments) and verify output (render, emitted events, return values).

## What to test (priority)

1. **Pure logic** — utility functions, composables (ref, computed). Most valuable, simplest.
2. **Validation rules** — invalid email returns message, empty field + required = error.
3. **Emitted events** — button click emits `click`, zip code found emits `zip-code-found`.
4. **UI states** — loading shows spinner, empty shows placeholder, error shows message.
5. **Edge cases** — null value, empty string, API error response.

## What NOT to test

- ❌ Vue internals (reactivity, lifecycle, Virtual DOM)
- ❌ Vuetify internals (whether `v-btn` renders correctly)
- ❌ Internal implementation (don't test private methods, test public behavior)
- ❌ `wrapper.html()` — brittle, breaks on any markup change
- ❌ Snapshot tests — false positives, nobody reviews the diff

## File structure

```
src/
  composables/
    useLoading.ts
    __tests__/
      useLoading.spec.ts
  components/
    inputs/
      ZipCodeField.vue
      __tests__/
        ZipCodeField.spec.ts
```

Tests live in `__tests__/` next to the file they test.

## exists vs isVisible (Vue Test Utils)

| Method | What it checks | When to use |
|--------|---------------|-------------|
| `exists()` | Element is in the DOM | Conditional elements with `v-if` / `v-show` |
| `isVisible()` | Element is **visible** (no `display: none`, `visibility: hidden`, or `v-show="false"`) | When element exists in DOM but may be hidden |

```ts
// exists: element removed from DOM (v-if)
expect(wrapper.find('[data-test="loading"]').exists()).toBe(false)

// isVisible: element in DOM but invisible (v-show)
expect(wrapper.find('[data-test="content"]').isVisible()).toBe(true)
```

**Rule of thumb:** `v-if` → `exists()`. `v-show` → `isVisible()`.

## Test structure

```ts
import { describe, it, expect } from 'vitest';

describe('useLoading', () => {
  it('starts with isActive false', () => {
    const { isActive } = useLoading();
    expect(isActive.value).toBe(false);
  });

  it('show sets message and activates loading', () => {
    const { isActive, message, show } = useLoading();
    show('Saving...');
    expect(isActive.value).toBe(true);
    expect(message.value).toBe('Saving...');
  });

  it('hide deactivates loading', () => {
    const { isActive, show, hide } = useLoading();
    show();
    hide();
    expect(isActive.value).toBe(false);
  });
});
```

## Naming

- File: `ComponentName.spec.ts` (never `.test.ts`)
- Describe: component/composable name
- It: english sentence describing expected behavior

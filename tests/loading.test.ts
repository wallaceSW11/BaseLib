import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { loading, useLoadingStore } from "../src/utils/loading";

describe("Loading Utility", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should initialize store correctly", () => {
    const store = useLoadingStore();
    expect(store).toBeDefined();
  });

  it("should call loading.show correctly", () => {
    const store = useLoadingStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setLoadingRef(mockRef);
    loading.show("Loading message");

    expect(mockRef.show).toHaveBeenCalledWith("Loading message");
  });

  it("should call loading.show without message", () => {
    const store = useLoadingStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setLoadingRef(mockRef);
    loading.show();

    expect(mockRef.show).toHaveBeenCalledWith(undefined);
  });

  it("should call loading.hide correctly", () => {
    const store = useLoadingStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setLoadingRef(mockRef);
    loading.hide();

    expect(mockRef.hide).toHaveBeenCalled();
  });

  it("should not throw error when ref is not set", () => {
    expect(() => {
      loading.show("Test");
      loading.hide();
    }).not.toThrow();
  });
});

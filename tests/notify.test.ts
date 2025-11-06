import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { notify, useNotifyStore } from "../src/utils/notify";

describe("Notify Utility", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should initialize store correctly", () => {
    const store = useNotifyStore();
    expect(store).toBeDefined();
  });

  it("should call notify.success correctly", () => {
    const store = useNotifyStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setNotifyRef(mockRef);
    notify.success("Success Title", "Success Message");

    expect(mockRef.show).toHaveBeenCalledWith(
      "success",
      "Success Title",
      "Success Message"
    );
  });

  it("should call notify.error correctly", () => {
    const store = useNotifyStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setNotifyRef(mockRef);
    notify.error("Error Title", "Error Message");

    expect(mockRef.show).toHaveBeenCalledWith(
      "error",
      "Error Title",
      "Error Message"
    );
  });

  it("should call notify.warning correctly", () => {
    const store = useNotifyStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setNotifyRef(mockRef);
    notify.warning("Warning Title");

    expect(mockRef.show).toHaveBeenCalledWith(
      "warning",
      "Warning Title",
      undefined
    );
  });

  it("should call notify.info correctly", () => {
    const store = useNotifyStore();
    const mockRef = {
      show: vi.fn(),
      hide: vi.fn(),
    };

    store.setNotifyRef(mockRef);
    notify.info("Info Title");

    expect(mockRef.show).toHaveBeenCalledWith("info", "Info Title", undefined);
  });

  it("should not throw error when ref is not set", () => {
    expect(() => {
      notify.success("Title", "Message");
    }).not.toThrow();
  });
});

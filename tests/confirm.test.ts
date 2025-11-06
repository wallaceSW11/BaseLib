import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { confirm, useConfirmStore } from "../src/utils/confirm";

describe("Confirm Utility", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should initialize store correctly", () => {
    const store = useConfirmStore();
    expect(store).toBeDefined();
  });

  it("should call ConfirmDialog and return true", async () => {
    const store = useConfirmStore();
    const mockRef = {
      ConfirmDialog: vi.fn().mockResolvedValue(true),
    };

    store.setConfirmRef(mockRef as any);
    const result = await confirm.show("Title", "Message");

    expect(mockRef.ConfirmDialog).toHaveBeenCalledWith("Title", "Message");
    expect(result).toBe(true);
  });

  it("should call ConfirmDialog and return false", async () => {
    const store = useConfirmStore();
    const mockRef = {
      ConfirmDialog: vi.fn().mockResolvedValue(false),
    };

    store.setConfirmRef(mockRef as any);
    const result = await confirm.show("Title", "Message");

    expect(mockRef.ConfirmDialog).toHaveBeenCalledWith("Title", "Message");
    expect(result).toBe(false);
  });

  it("should return false when ref is not set", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const result = await confirm.show("Title", "Message");

    expect(result).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "ConfirmDialog component is not registered"
    );

    consoleErrorSpy.mockRestore();
  });
});

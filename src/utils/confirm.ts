import { defineStore } from "pinia";
import type { ComponentPublicInstance } from "vue";
import type { ConfirmComponentRef } from "./types";

export const useConfirmStore = defineStore("confirm", {
  state: () => ({
    confirmRef: null as ComponentPublicInstance | null,
  }),
  actions: {
    setConfirmRef(ref: ComponentPublicInstance) {
      this.confirmRef = ref;
    },
  },
});

export const confirm = {
  show: (title: string, message: string): Promise<boolean> => {
    const store = useConfirmStore();
    const confirmInstance = store.confirmRef as ConfirmComponentRef | null;

    if (!confirmInstance || !confirmInstance.ConfirmDialog) {
      console.error("ConfirmDialog component is not registered");
      return Promise.resolve(false);
    }

    return confirmInstance.ConfirmDialog(title, message);
  },
};

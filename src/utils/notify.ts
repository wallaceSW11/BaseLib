import { defineStore } from "pinia";
import { ref } from "vue";
import type { NotifyComponentRef, NotifyType } from "./types";

export const useNotifyStore = defineStore("notify", () => {
  const notifyRef = ref<NotifyComponentRef | null>(null);

  const setNotifyRef = (ref: NotifyComponentRef) => {
    notifyRef.value = ref;
  };

  const notify = (
    type: NotifyType,
    title: string,
    message?: string
  ) => {
    if (notifyRef.value) {
      notifyRef.value.show(type, title, message);
    }
  };

  return {
    setNotifyRef,
    notify,
  };
});

export const notify = {
  success: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.notify("success", title, message);
  },
  error: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.notify("error", title, message);
  },
  warning: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.notify("warning", title, message);
  },
  info: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.notify("info", title, message);
  },
};

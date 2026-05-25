import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { NotifyType } from './types';
import { NOTIFY_DURATION } from './types';

export const useNotifyStore = defineStore('notify', () => {
  const isVisible = ref(false);
  const type = ref<NotifyType>('info');
  const title = ref('');
  const message = ref('');
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function show(notifyType: NotifyType, notifyTitle: string, notifyMessage = '') {
    if (timeoutId) clearTimeout(timeoutId);

    type.value = notifyType;
    title.value = notifyTitle;
    message.value = notifyMessage;
    isVisible.value = true;

    timeoutId = setTimeout(() => {
      hide();
    }, NOTIFY_DURATION);
  }

  function hide() {
    isVisible.value = false;

    if (!timeoutId) return;

    clearTimeout(timeoutId);
    timeoutId = null;
  }

  function cleanup() {
    if (!timeoutId) return;

    clearTimeout(timeoutId);
    timeoutId = null;
  }

  return {
    isVisible,
    type,
    title,
    message,
    show,
    hide,
    cleanup,
  };
});

export const notify = {
  show: (type: NotifyType, title: string, message?: string) => {
    const store = useNotifyStore();
    store.show(type, title, message);
  },
  success: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.show('success', title, message);
  },
  error: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.show('error', title, message);
  },
  warning: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.show('warning', title, message);
  },
  info: (title: string, message?: string) => {
    const store = useNotifyStore();
    store.show('info', title, message);
  },
};

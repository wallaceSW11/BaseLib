import { defineStore } from "pinia";
import { ref } from "vue";
import type { LoadingComponentRef } from "./types";

export const useLoadingStore = defineStore("loading", () => {
  const loadingRef = ref<LoadingComponentRef | null>(null);

  const setLoadingRef = (ref: LoadingComponentRef) => {
    loadingRef.value = ref;
  };

  const showLoading = (message?: string) => {
    if (loadingRef.value) {
      loadingRef.value.show(message);
    }
  };

  const hideLoading = () => {
    if (loadingRef.value) {
      loadingRef.value.hide();
    }
  };

  return {
    setLoadingRef,
    showLoading,
    hideLoading,
  };
});

export const loading = {
  show: (message?: string) => {
    const store = useLoadingStore();
    store.showLoading(message);
  },
  hide: () => {
    const store = useLoadingStore();
    store.hideLoading();
  },
};

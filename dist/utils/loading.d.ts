import type { LoadingComponentRef } from "./types";
export declare const useLoadingStore: import("pinia").StoreDefinition<"loading", Pick<{
    setLoadingRef: (ref: LoadingComponentRef) => void;
    showLoading: (message?: string) => void;
    hideLoading: () => void;
}, never>, Pick<{
    setLoadingRef: (ref: LoadingComponentRef) => void;
    showLoading: (message?: string) => void;
    hideLoading: () => void;
}, never>, Pick<{
    setLoadingRef: (ref: LoadingComponentRef) => void;
    showLoading: (message?: string) => void;
    hideLoading: () => void;
}, "setLoadingRef" | "showLoading" | "hideLoading">>;
export declare const loading: {
    show: (message?: string) => void;
    hide: () => void;
};
//# sourceMappingURL=loading.d.ts.map
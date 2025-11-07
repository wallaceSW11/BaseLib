import type { NotifyComponentRef, NotifyType } from "./types";
export declare const useNotifyStore: import("pinia").StoreDefinition<"notify", Pick<{
    setNotifyRef: (ref: NotifyComponentRef) => void;
    notify: (type: NotifyType, title: string, message?: string) => void;
}, never>, Pick<{
    setNotifyRef: (ref: NotifyComponentRef) => void;
    notify: (type: NotifyType, title: string, message?: string) => void;
}, never>, Pick<{
    setNotifyRef: (ref: NotifyComponentRef) => void;
    notify: (type: NotifyType, title: string, message?: string) => void;
}, "notify" | "setNotifyRef">>;
export declare const notify: {
    success: (title: string, message?: string) => void;
    error: (title: string, message?: string) => void;
    warning: (title: string, message?: string) => void;
    info: (title: string, message?: string) => void;
};
//# sourceMappingURL=notify.d.ts.map
export interface NotifyComponentRef {
    show: (type: NotifyType, title: string, message?: string) => void;
    hide: () => void;
}
export interface LoadingComponentRef {
    show: (message?: string) => void;
    hide: () => void;
}
export interface ConfirmComponentRef {
    ConfirmDialog: (title: string, message: string) => Promise<boolean>;
}
export type NotifyType = 'success' | 'error' | 'warning' | 'info';
export interface NotifyOptions {
    type: NotifyType;
    title: string;
    message?: string;
    duration?: number;
}
export interface LoadingOptions {
    message?: string;
    delay?: number;
}
export declare const NOTIFY_DURATION = 3000;
export declare const LOADING_DELAY = 300;
export declare const API_TIMEOUT = 30000;
export declare const LOADING_CONTENT_DELAY = 300;
//# sourceMappingURL=types.d.ts.map
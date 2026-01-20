import type { ComponentPublicInstance } from "vue";
export interface ConfirmOptions {
    persistent?: boolean;
    confirmText?: string;
    cancelText?: string;
    confirmColor?: string;
    cancelColor?: string;
}
export declare const useConfirmStore: import("pinia").StoreDefinition<"confirm", {
    confirmRef: ComponentPublicInstance | null;
}, {}, {
    setConfirmRef(ref: ComponentPublicInstance): void;
}>;
export declare const confirm: {
    show: (title: string, message: string, options?: ConfirmOptions) => Promise<boolean>;
};
//# sourceMappingURL=confirm.d.ts.map
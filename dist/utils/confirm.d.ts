import type { ComponentPublicInstance } from "vue";
export declare const useConfirmStore: import("pinia").StoreDefinition<"confirm", {
    confirmRef: ComponentPublicInstance | null;
}, {}, {
    setConfirmRef(ref: ComponentPublicInstance): void;
}>;
export declare const confirm: {
    show: (title: string, message: string) => Promise<boolean>;
};
//# sourceMappingURL=confirm.d.ts.map
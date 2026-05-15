interface ConfirmOptions {
    persistent?: boolean;
    confirmText?: string;
    cancelText?: string;
    confirmColor?: string;
    cancelColor?: string;
}
declare const __VLS_export: import("vue").DefineComponent<{}, {
    ConfirmDialog: (title: string, message: string, options?: ConfirmOptions) => Promise<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=CustomConfirmDialog.vue.d.ts.map
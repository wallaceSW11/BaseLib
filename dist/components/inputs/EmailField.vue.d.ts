interface Props {
    modelValue?: string;
    label?: string;
    rules?: any[];
    disabled?: boolean;
    hint?: string;
    persistentHint?: boolean;
    required?: boolean;
    validateOnBlur?: boolean;
    requiredMessage?: string;
    invalidMessage?: string;
}
declare var __VLS_11: {}, __VLS_14: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_11) => any;
} & {
    append?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    valid: (isValid: boolean) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValid?: ((isValid: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string;
    required: boolean;
    label: string;
    rules: any[];
    hint: string;
    persistentHint: boolean;
    validateOnBlur: boolean;
    requiredMessage: string;
    invalidMessage: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=EmailField.vue.d.ts.map
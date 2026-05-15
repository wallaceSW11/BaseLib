type ValidationRule = (value: string) => boolean | string;
type Variant = 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
interface Props {
    modelValue?: string;
    label?: string;
    rules?: ValidationRule[];
    disabled?: boolean;
    hint?: string;
    persistentHint?: boolean;
    required?: boolean;
    validateOnBlur?: boolean;
    requiredMessage?: string;
    invalidMessage?: string;
    variant?: Variant;
    maxlength?: number;
}
declare var __VLS_11: {}, __VLS_14: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_11) => any;
} & {
    append?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    isValid: (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onIsValid?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    variant: Variant;
    modelValue: string;
    required: boolean;
    label: string;
    rules: ValidationRule[];
    hint: string;
    persistentHint: boolean;
    validateOnBlur: boolean;
    requiredMessage: string;
    invalidMessage: string;
    maxlength: number;
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
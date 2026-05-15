type Variant = 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
interface Props {
    modelValue?: string;
    label?: string;
    rules?: any[];
    disabled?: boolean;
    hint?: string;
    icon?: string;
    variant?: Variant;
}
declare var __VLS_16: {}, __VLS_19: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_16) => any;
} & {
    append?: (props: typeof __VLS_19) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    variant: Variant;
    icon: string;
    modelValue: string;
    label: string;
    rules: any[];
    hint: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=PhoneField.vue.d.ts.map
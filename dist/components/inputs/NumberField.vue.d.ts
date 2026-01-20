interface Props {
    modelValue?: number | null;
    label?: string;
    rules?: any[];
    disabled?: boolean;
    hint?: string;
    persistentHint?: boolean;
    decimalPlaces?: number;
    locale?: string;
    allowNegative?: boolean;
}
declare var __VLS_14: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_14) => any;
} & {
    append?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: number | null;
    label: string;
    locale: string;
    rules: any[];
    hint: string;
    persistentHint: boolean;
    decimalPlaces: number;
    allowNegative: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=NumberField.vue.d.ts.map
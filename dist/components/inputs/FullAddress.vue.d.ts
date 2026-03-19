export interface Address {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
}
interface Props {
    modelValue?: Partial<Address>;
    disabled?: boolean;
    disabledFields?: boolean;
    variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Address) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Address) => any) | undefined;
}>, {
    disabled: boolean;
    variant: "outlined" | "filled" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    modelValue: Partial<Address>;
    disabledFields: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=FullAddress.vue.d.ts.map
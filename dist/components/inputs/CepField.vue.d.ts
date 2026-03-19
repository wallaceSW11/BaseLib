export interface ViaCepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: boolean;
}
interface Props {
    modelValue?: string;
    label?: string;
    rules?: any[];
    disabled?: boolean;
    hint?: string;
    variant?: 'outlined' | 'filled' | 'plain' | 'solo' | 'solo-filled' | 'solo-inverted' | 'underlined';
}
declare var __VLS_16: {}, __VLS_19: {};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_16) => any;
} & {
    append?: (props: typeof __VLS_19) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    "address-found": (address: ViaCepResponse) => any;
    "address-not-found": () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onAddress-found"?: ((address: ViaCepResponse) => any) | undefined;
    "onAddress-not-found"?: (() => any) | undefined;
}>, {
    disabled: boolean;
    variant: "outlined" | "filled" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
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
//# sourceMappingURL=CepField.vue.d.ts.map
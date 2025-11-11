export interface ModalAction {
    text: string;
    icon?: string;
    color?: string;
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
    handler?: () => void | Promise<void>;
}
interface Props {
    modelValue: boolean;
    title?: string;
    message?: string;
    maxWidth?: string | number;
    persistent?: boolean;
    actions?: ModalAction[];
    /**
     * Elemento onde o dialog será anexado.
     * Use 'body' para forçar anexação ao body (resolve problemas de overlay)
     * @default undefined (padrão do Vuetify)
     */
    attach?: string | boolean | Element;
    /**
     * Classes CSS customizadas para o conteúdo do dialog
     */
    contentClass?: string;
    /**
     * Se true, o dialog ocupará toda a tela
     * @default false
     */
    fullscreen?: boolean;
    /**
     * Ícone a ser exibido ao lado do título
     * @default undefined
     */
    titleIcon?: string;
}
declare var __VLS_27: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_27) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    maxWidth: string | number;
    persistent: boolean;
    attach: string | boolean | Element;
    contentClass: string;
    title: string;
    message: string;
    actions: ModalAction[];
    fullscreen: boolean;
    titleIcon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ModalBase.vue.d.ts.map
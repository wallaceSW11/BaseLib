export interface BaseButtonProps {
    prependIcon?: string;
    appendIcon?: string;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    color?: string;
    variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
    size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
    block?: boolean;
}
declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: import("vue").DefineComponent<BaseButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<BaseButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    text: string;
    prependIcon: string;
    appendIcon: string;
    disabled: boolean;
    loading: boolean;
    color: string;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    size: "x-small" | "small" | "default" | "large" | "x-large";
    block: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=BaseButton.vue.d.ts.map
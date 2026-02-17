export declare const requiredVuetifyComponents: {
    VAlert: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            iconSizes: [import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][];
            closable: boolean;
            closeIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            closeLabel: string;
            icon: false | import("vuetify/lib/composables/icons.mjs").IconValue;
            modelValue: boolean;
            prominent: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            iconSize?: string | number | undefined;
            border?: "bottom" | "end" | "start" | "top" | boolean | undefined;
            borderColor?: string | undefined;
            title?: string | undefined;
            text?: string | undefined;
            type?: "error" | "info" | "success" | "warning" | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
                prepend?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                text?: (() => import("vue").VNodeChild) | undefined;
                append?: (() => import("vue").VNodeChild) | undefined;
                close?: ((arg: {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
                prepend?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                text?: false | (() => import("vue").VNodeChild) | undefined;
                append?: false | (() => import("vue").VNodeChild) | undefined;
                close?: false | ((arg: {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:close"?: false | ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:close"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:close": (e: MouseEvent) => true;
            "update:modelValue": (value: boolean) => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            iconSizes: [import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][];
            closable: boolean;
            closeIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            closeLabel: string;
            icon: false | import("vuetify/lib/composables/icons.mjs").IconValue;
            modelValue: boolean;
            prominent: boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            close: (arg: {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            iconSizes: [import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][];
            closable: boolean;
            closeIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            closeLabel: string;
            icon: false | import("vuetify/lib/composables/icons.mjs").IconValue;
            modelValue: boolean;
            prominent: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            iconSize?: string | number | undefined;
            border?: "bottom" | "end" | "start" | "top" | boolean | undefined;
            borderColor?: string | undefined;
            title?: string | undefined;
            text?: string | undefined;
            type?: "error" | "info" | "success" | "warning" | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
                prepend?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                text?: (() => import("vue").VNodeChild) | undefined;
                append?: (() => import("vue").VNodeChild) | undefined;
                close?: ((arg: {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
                prepend?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                text?: false | (() => import("vue").VNodeChild) | undefined;
                append?: false | (() => import("vue").VNodeChild) | undefined;
                close?: false | ((arg: {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:close"?: false | ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:close"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, () => false | JSX.Element, {}, {}, {}, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            iconSizes: [import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][];
            closable: boolean;
            closeIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            closeLabel: string;
            icon: false | import("vuetify/lib/composables/icons.mjs").IconValue;
            modelValue: boolean;
            prominent: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("vuetify/lib/composables/density.mjs").Density;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        iconSizes: [import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][];
        closable: boolean;
        closeIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
        closeLabel: string;
        icon: false | import("vuetify/lib/composables/icons.mjs").IconValue;
        modelValue: boolean;
        prominent: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        iconSize?: string | number | undefined;
        border?: "bottom" | "end" | "start" | "top" | boolean | undefined;
        borderColor?: string | undefined;
        title?: string | undefined;
        text?: string | undefined;
        type?: "error" | "info" | "success" | "warning" | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | ((arg: {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | ((arg: {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:close": (e: MouseEvent) => true;
        "update:modelValue": (value: boolean) => true;
    }, string, {
        style: import("vue").StyleValue;
        density: import("vuetify/lib/composables/density.mjs").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        iconSizes: [import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][];
        closable: boolean;
        closeIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
        closeLabel: string;
        icon: false | import("vuetify/lib/composables/icons.mjs").IconValue;
        modelValue: boolean;
        prominent: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        close: (arg: {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        location: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | null>;
        position: {
            type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
            validator: (v: any) => boolean;
        };
        iconSize: import("vue").PropType<string | number>;
        iconSizes: {
            type: import("vue").PropType<[import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][]>;
            default: () => (string | number)[][];
        };
        border: {
            type: import("vue").PropType<"bottom" | "end" | "start" | "top" | boolean>;
            validator: (val: string | boolean) => boolean;
        };
        borderColor: StringConstructor;
        closable: BooleanConstructor;
        closeIcon: {
            type: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
            default: string;
        };
        closeLabel: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import("vue").PropType<false | import("vuetify/lib/composables/icons.mjs").IconValue>;
            default: null;
        };
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominent: BooleanConstructor;
        title: StringConstructor;
        text: StringConstructor;
        type: {
            type: import("vue").PropType<"error" | "info" | "success" | "warning">;
            validator: (val: "error" | "info" | "success" | "warning") => boolean;
        };
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        location: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | null>;
        position: {
            type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
            validator: (v: any) => boolean;
        };
        iconSize: import("vue").PropType<string | number>;
        iconSizes: {
            type: import("vue").PropType<[import("vuetify/lib/labs/VIconBtn/VIconBtn.mjs").VIconBtnSizes, number][]>;
            default: () => (string | number)[][];
        };
        border: {
            type: import("vue").PropType<"bottom" | "end" | "start" | "top" | boolean>;
            validator: (val: string | boolean) => boolean;
        };
        borderColor: StringConstructor;
        closable: BooleanConstructor;
        closeIcon: {
            type: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
            default: string;
        };
        closeLabel: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import("vue").PropType<false | import("vuetify/lib/composables/icons.mjs").IconValue>;
            default: null;
        };
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominent: BooleanConstructor;
        title: StringConstructor;
        text: StringConstructor;
        type: {
            type: import("vue").PropType<"error" | "info" | "success" | "warning">;
            validator: (val: "error" | "info" | "success" | "warning") => boolean;
        };
    }>>;
    VBtn: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            disabled: boolean;
            size: string | number;
            replace: boolean;
            exact: boolean;
            symbol: any;
            flat: boolean;
            block: boolean;
            readonly: boolean;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            value?: any;
            selectedClass?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
            loading?: string | boolean | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            active?: boolean | undefined;
            activeColor?: string | undefined;
            baseColor?: string | undefined;
            icon?: boolean | import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            spaced?: "both" | "end" | "start" | undefined;
            text?: string | number | boolean | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
                prepend?: (() => import("vue").VNodeChild) | undefined;
                append?: (() => import("vue").VNodeChild) | undefined;
                loader?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
                prepend?: false | (() => import("vue").VNodeChild) | undefined;
                append?: false | (() => import("vue").VNodeChild) | undefined;
                loader?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {
            group: import("vuetify/lib/composables/group.mjs").GroupItemProvide | null;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "group:selected": (val: {
                value: boolean;
            }) => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            disabled: boolean;
            size: string | number;
            replace: boolean;
            exact: boolean;
            active: boolean;
            symbol: any;
            flat: boolean;
            block: boolean;
            readonly: boolean;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            text: string | number | boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            disabled: boolean;
            size: string | number;
            replace: boolean;
            exact: boolean;
            symbol: any;
            flat: boolean;
            block: boolean;
            readonly: boolean;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            value?: any;
            selectedClass?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
            loading?: string | boolean | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            active?: boolean | undefined;
            activeColor?: string | undefined;
            baseColor?: string | undefined;
            icon?: boolean | import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            spaced?: "both" | "end" | "start" | undefined;
            text?: string | number | boolean | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
                prepend?: (() => import("vue").VNodeChild) | undefined;
                append?: (() => import("vue").VNodeChild) | undefined;
                loader?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
                prepend?: false | (() => import("vue").VNodeChild) | undefined;
                append?: false | (() => import("vue").VNodeChild) | undefined;
                loader?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {
            group: import("vuetify/lib/composables/group.mjs").GroupItemProvide | null;
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            disabled: boolean;
            size: string | number;
            replace: boolean;
            exact: boolean;
            active: boolean;
            symbol: any;
            flat: boolean;
            block: boolean;
            readonly: boolean;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            text: string | number | boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("vuetify/lib/composables/density.mjs").Density;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        size: string | number;
        replace: boolean;
        exact: boolean;
        symbol: any;
        flat: boolean;
        block: boolean;
        readonly: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        value?: any;
        selectedClass?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
        loading?: string | boolean | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeColor?: string | undefined;
        baseColor?: string | undefined;
        icon?: boolean | import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        spaced?: "both" | "end" | "start" | undefined;
        text?: string | number | boolean | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        group: import("vuetify/lib/composables/group.mjs").GroupItemProvide | null;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "group:selected": (val: {
            value: boolean;
        }) => true;
    }, string, {
        style: import("vue").StyleValue;
        density: import("vuetify/lib/composables/density.mjs").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        size: string | number;
        replace: boolean;
        exact: boolean;
        active: boolean;
        symbol: any;
        flat: boolean;
        block: boolean;
        readonly: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        text: string | number | boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: Omit<{
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: NonNullable<string | import("vuetify/lib/types.mjs").JSXComponent>;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        value: null;
        disabled: BooleanConstructor;
        selectedClass: StringConstructor;
        size: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        location: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | null>;
        loading: (BooleanConstructor | StringConstructor)[];
        position: {
            type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
            validator: (v: any) => boolean;
        };
        href: StringConstructor;
        replace: BooleanConstructor;
        to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
        exact: BooleanConstructor;
        active: {
            type: BooleanConstructor;
            default: undefined;
        };
        activeColor: StringConstructor;
        baseColor: StringConstructor;
        symbol: {
            type: null;
            default: import("vue").InjectionKey<import("vuetify/lib/composables/group.mjs").GroupProvide>;
        };
        flat: BooleanConstructor;
        icon: import("vue").PropType<boolean | import("vuetify/lib/composables/icons.mjs").IconValue>;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        block: BooleanConstructor;
        readonly: BooleanConstructor;
        slim: BooleanConstructor;
        stacked: BooleanConstructor;
        spaced: import("vue").PropType<"both" | "end" | "start">;
        ripple: {
            type: import("vue").PropType<boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined>;
            default: boolean;
        };
        text: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: Omit<{
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: NonNullable<string | import("vuetify/lib/types.mjs").JSXComponent>;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        value: null;
        disabled: BooleanConstructor;
        selectedClass: StringConstructor;
        size: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        location: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | null>;
        loading: (BooleanConstructor | StringConstructor)[];
        position: {
            type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
            validator: (v: any) => boolean;
        };
        href: StringConstructor;
        replace: BooleanConstructor;
        to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
        exact: BooleanConstructor;
        active: {
            type: BooleanConstructor;
            default: undefined;
        };
        activeColor: StringConstructor;
        baseColor: StringConstructor;
        symbol: {
            type: null;
            default: import("vue").InjectionKey<import("vuetify/lib/composables/group.mjs").GroupProvide>;
        };
        flat: BooleanConstructor;
        icon: import("vue").PropType<boolean | import("vuetify/lib/composables/icons.mjs").IconValue>;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        block: BooleanConstructor;
        readonly: BooleanConstructor;
        slim: BooleanConstructor;
        stacked: BooleanConstructor;
        spaced: import("vue").PropType<"both" | "end" | "start">;
        ripple: {
            type: import("vue").PropType<boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined>;
            default: boolean;
        };
        text: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>>;
    VCard: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            flat: boolean;
            hover: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
            loading?: string | boolean | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            image?: string | undefined;
            link?: boolean | undefined;
            prependAvatar?: string | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            subtitle?: string | number | boolean | undefined;
            text?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
                prepend?: (() => import("vue").VNodeChild) | undefined;
                append?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                subtitle?: (() => import("vue").VNodeChild) | undefined;
                actions?: (() => import("vue").VNodeChild) | undefined;
                text?: (() => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                image?: (() => import("vue").VNodeChild) | undefined;
                item?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
                prepend?: false | (() => import("vue").VNodeChild) | undefined;
                append?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                subtitle?: false | (() => import("vue").VNodeChild) | undefined;
                actions?: false | (() => import("vue").VNodeChild) | undefined;
                text?: false | (() => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                image?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            flat: boolean;
            hover: boolean;
            link: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            subtitle: string | number | boolean;
            text: string | number | boolean;
            title: string | number | boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            image: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            item: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            flat: boolean;
            hover: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
            loading?: string | boolean | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            image?: string | undefined;
            link?: boolean | undefined;
            prependAvatar?: string | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            subtitle?: string | number | boolean | undefined;
            text?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
                prepend?: (() => import("vue").VNodeChild) | undefined;
                append?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                subtitle?: (() => import("vue").VNodeChild) | undefined;
                actions?: (() => import("vue").VNodeChild) | undefined;
                text?: (() => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                image?: (() => import("vue").VNodeChild) | undefined;
                item?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
                prepend?: false | (() => import("vue").VNodeChild) | undefined;
                append?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                subtitle?: false | (() => import("vue").VNodeChild) | undefined;
                actions?: false | (() => import("vue").VNodeChild) | undefined;
                text?: false | (() => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                image?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, {}, {}, {}, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            flat: boolean;
            hover: boolean;
            link: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            subtitle: string | number | boolean;
            text: string | number | boolean;
            title: string | number | boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("vuetify/lib/composables/density.mjs").Density;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        flat: boolean;
        hover: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("vuetify/lib/types.mjs").Anchor | null | undefined;
        loading?: string | boolean | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        image?: string | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        subtitle?: string | number | boolean | undefined;
        text?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            subtitle?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            image?: (() => import("vue").VNodeChild) | undefined;
            item?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            subtitle?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            image?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        density: import("vuetify/lib/composables/density.mjs").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        flat: boolean;
        hover: boolean;
        link: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        subtitle: string | number | boolean;
        text: string | number | boolean;
        title: string | number | boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        image: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        location: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | null>;
        loading: (BooleanConstructor | StringConstructor)[];
        position: {
            type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
            validator: (v: any) => boolean;
        };
        href: StringConstructor;
        replace: BooleanConstructor;
        to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
        exact: BooleanConstructor;
        appendAvatar: StringConstructor;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        disabled: BooleanConstructor;
        flat: BooleanConstructor;
        hover: BooleanConstructor;
        image: StringConstructor;
        link: {
            type: BooleanConstructor;
            default: undefined;
        };
        prependAvatar: StringConstructor;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        ripple: {
            type: import("vue").PropType<boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined>;
            default: boolean;
        };
        subtitle: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        text: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        title: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        location: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | null>;
        loading: (BooleanConstructor | StringConstructor)[];
        position: {
            type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
            validator: (v: any) => boolean;
        };
        href: StringConstructor;
        replace: BooleanConstructor;
        to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
        exact: BooleanConstructor;
        appendAvatar: StringConstructor;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        disabled: BooleanConstructor;
        flat: BooleanConstructor;
        hover: BooleanConstructor;
        image: StringConstructor;
        link: {
            type: BooleanConstructor;
            default: undefined;
        };
        prependAvatar: StringConstructor;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        ripple: {
            type: import("vue").PropType<boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined>;
            default: boolean;
        };
        subtitle: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        text: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        title: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>>;
    VCardActions: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, {}, {}, {}, {
            style: import("vue").StyleValue;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
    } & {
        class?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
    }, import("vue").ExtractPropTypes<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
    }>>;
    VCardText: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        } & {
            class?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        } & {
            class?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, {}, {}, {}, {
            style: import("vue").StyleValue;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
    } & {
        class?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        opacity: (NumberConstructor | StringConstructor)[];
    }, import("vue").ExtractPropTypes<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        opacity: (NumberConstructor | StringConstructor)[];
    }>>;
    VCardTitle: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            tag: string;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, {
            style: import("vue").StyleValue;
            tag: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        tag: string;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }, import("vue").ExtractPropTypes<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>>;
    VDialog: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            fullscreen: boolean;
            scrollable: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                offset?: string | number | number[] | undefined;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activatorProps: Record<string, any>;
                openOnClick?: boolean | undefined;
                openOnHover: boolean;
                openOnFocus?: boolean | undefined;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                absolute: boolean;
                attach?: string | boolean | Element | undefined;
                closeOnBack: boolean;
                contained: boolean;
                contentClass?: any;
                contentProps?: any;
                disabled: boolean;
                opacity?: string | number | undefined;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                offset?: string | number | number[] | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                openOnClick?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                attach?: string | boolean | Element | undefined;
                contentClass?: any;
                contentProps?: any;
                opacity?: string | number | undefined;
            } & {
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & {
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }, {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "click:outside": (e: MouseEvent) => true;
                "update:modelValue": (value: boolean) => true;
                keydown: (e: KeyboardEvent) => true;
                afterEnter: () => true;
                afterLeave: () => true;
            }, string, {
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                activator: (arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            fullscreen: boolean;
            scrollable: boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: (arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            fullscreen: boolean;
            scrollable: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                offset?: string | number | number[] | undefined;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activatorProps: Record<string, any>;
                openOnClick?: boolean | undefined;
                openOnHover: boolean;
                openOnFocus?: boolean | undefined;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                absolute: boolean;
                attach?: string | boolean | Element | undefined;
                closeOnBack: boolean;
                contained: boolean;
                contentClass?: any;
                contentProps?: any;
                disabled: boolean;
                opacity?: string | number | undefined;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                offset?: string | number | number[] | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                openOnClick?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                attach?: string | boolean | Element | undefined;
                contentClass?: any;
                contentProps?: any;
                opacity?: string | number | undefined;
            } & {
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & {
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }, {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "click:outside": (e: MouseEvent) => true;
                "update:modelValue": (value: boolean) => true;
                keydown: (e: KeyboardEvent) => true;
                afterEnter: () => true;
                afterLeave: () => true;
            }, string, {
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                activator: (arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            } | {};
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            fullscreen: boolean;
            scrollable: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        fullscreen: boolean;
        scrollable: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset?: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            absolute: boolean;
            attach?: string | boolean | Element | undefined;
            closeOnBack: boolean;
            contained: boolean;
            contentClass?: any;
            contentProps?: any;
            disabled: boolean;
            opacity?: string | number | undefined;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:outside": (e: MouseEvent) => true;
            "update:modelValue": (value: boolean) => true;
            keydown: (e: KeyboardEvent) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, "disabled" | "style" | "location" | "absolute" | "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | "_disableGlobalStack" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "eager" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "viewportMargin" | "zIndex"> & import("vue").ShallowUnwrapRef<{
        activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
        localTop: Readonly<import("vue").Ref<boolean, boolean>>;
        updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & import("vue").ComponentCustomProperties, "disabled" | "theme" | "class" | "style" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "location" | "absolute" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "target" | "_disableGlobalStack" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "eager" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "viewportMargin" | "zIndex" | "offset" | "closeDelay" | "openDelay" | "activator" | "transition" | "attach" | "contentClass" | "contentProps" | "opacity" | "v-slot:activator" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue">, `$${any}`> & {
        _allExposed: {
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => true;
        afterEnter: () => true;
        afterLeave: () => true;
    }, string, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        fullscreen: boolean;
        scrollable: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        locationStrategy: {
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        };
        location: {
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        };
        origin: Omit<{
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: NonNullable<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
        };
        offset: import("vue").PropType<string | number | number[] | undefined>;
        stickToTarget: BooleanConstructor;
        viewportMargin: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        scrollStrategy: Omit<{
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: NonNullable<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        closeDelay: (NumberConstructor | StringConstructor)[];
        openDelay: (NumberConstructor | StringConstructor)[];
        target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activatorProps: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        retainFocus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        captureFocus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        eager: BooleanConstructor;
        transition: {
            type: import("vue").PropType<string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
            default: {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | NonNullable<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
        };
        absolute: BooleanConstructor;
        attach: import("vue").PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        opacity: (NumberConstructor | StringConstructor)[];
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        zIndex: Omit<{
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        fullscreen: BooleanConstructor;
        scrollable: BooleanConstructor;
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        locationStrategy: {
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        };
        location: {
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        };
        origin: Omit<{
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: NonNullable<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
        };
        offset: import("vue").PropType<string | number | number[] | undefined>;
        stickToTarget: BooleanConstructor;
        viewportMargin: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        scrollStrategy: Omit<{
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: NonNullable<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        closeDelay: (NumberConstructor | StringConstructor)[];
        openDelay: (NumberConstructor | StringConstructor)[];
        target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activatorProps: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        retainFocus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        captureFocus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        eager: BooleanConstructor;
        transition: {
            type: import("vue").PropType<string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
            default: {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | NonNullable<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
        };
        absolute: BooleanConstructor;
        attach: import("vue").PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        opacity: (NumberConstructor | StringConstructor)[];
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        zIndex: Omit<{
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        fullscreen: BooleanConstructor;
        scrollable: BooleanConstructor;
    }>>;
    VIcon: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            size: string | number;
            disabled: boolean;
            start: boolean;
            end: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            color?: string | undefined;
            icon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            size: string | number;
            disabled: boolean;
            start: boolean;
            end: boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            size: string | number;
            disabled: boolean;
            start: boolean;
            end: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            color?: string | undefined;
            icon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, {}, {}, {}, {}, {
            style: import("vue").StyleValue;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            size: string | number;
            disabled: boolean;
            start: boolean;
            end: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        size: string | number;
        disabled: boolean;
        start: boolean;
        end: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        color?: string | undefined;
        icon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        size: string | number;
        disabled: boolean;
        start: boolean;
        end: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: Omit<{
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: NonNullable<string | import("vuetify/lib/types.mjs").JSXComponent>;
        };
        size: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        color: StringConstructor;
        disabled: BooleanConstructor;
        start: BooleanConstructor;
        end: BooleanConstructor;
        icon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        opacity: (NumberConstructor | StringConstructor)[];
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: Omit<{
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: NonNullable<string | import("vuetify/lib/types.mjs").JSXComponent>;
        };
        size: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        color: StringConstructor;
        disabled: BooleanConstructor;
        start: BooleanConstructor;
        end: BooleanConstructor;
        icon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        opacity: (NumberConstructor | StringConstructor)[];
    }>>;
    VSpacer: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            tag: string;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, {
            style: import("vue").StyleValue;
            tag: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        tag: string;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }, import("vue").ExtractPropTypes<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>>;
    VTextField: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            modelValue?: any;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            loading?: string | boolean | undefined;
            id?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            autocomplete?: string | undefined;
            counter?: string | number | boolean | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            prefix?: string | undefined;
            placeholder?: string | undefined;
            suffix?: string | undefined;
            role?: string | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("vuetify/lib/composables/density.mjs").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                name?: string | undefined;
                label?: string | undefined;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                density: import("vuetify/lib/composables/density.mjs").Density;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                baseColor?: string | undefined;
                centerAffix: boolean;
                color?: string | undefined;
                glow: boolean;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hideSpinButtons: boolean;
                hint?: string | undefined;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("vuetify/lib/composables/density.mjs").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                name?: string | undefined;
                label?: string | undefined;
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                baseColor?: string | undefined;
                color?: string | undefined;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hint?: string | undefined;
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("vuetify/lib/composables/density.mjs").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("vuetify/lib/components/VInput/VInput.mjs").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                bgColor?: string | undefined;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                persistentClear: boolean;
                prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                details: boolean;
                labelId?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("vuetify/lib/components/VField/VField.mjs").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                bgColor?: string | undefined;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                labelId?: string | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:focused": (focused: boolean) => true;
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("vuetify/lib/components/VField/VField.mjs").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("vuetify/lib/components/VField/VField.mjs").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:control": (e: MouseEvent) => true;
            "mousedown:control": (e: MouseEvent) => true;
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (val: string) => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        }, true, {}, import("vue").SlotsType<Partial<{
            prepend: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            clear: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            counter: (arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            modelValue?: any;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            loading?: string | boolean | undefined;
            id?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            autocomplete?: string | undefined;
            counter?: string | number | boolean | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            prefix?: string | undefined;
            placeholder?: string | undefined;
            suffix?: string | undefined;
            role?: string | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("vuetify/lib/composables/density.mjs").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                name?: string | undefined;
                label?: string | undefined;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                density: import("vuetify/lib/composables/density.mjs").Density;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                baseColor?: string | undefined;
                centerAffix: boolean;
                color?: string | undefined;
                glow: boolean;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hideSpinButtons: boolean;
                hint?: string | undefined;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("vuetify/lib/composables/density.mjs").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                name?: string | undefined;
                label?: string | undefined;
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                baseColor?: string | undefined;
                color?: string | undefined;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hint?: string | undefined;
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("vuetify/lib/composables/density.mjs").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("vuetify/lib/components/VInput/VInput.mjs").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                bgColor?: string | undefined;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                persistentClear: boolean;
                prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                details: boolean;
                labelId?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("vuetify/lib/components/VField/VField.mjs").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                bgColor?: string | undefined;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                labelId?: string | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:focused": (focused: boolean) => true;
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("vuetify/lib/components/VField/VField.mjs").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("vuetify/lib/components/VField/VField.mjs").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("vuetify/lib/composables/density.mjs").Density;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        modelValue?: any;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        id?: string | undefined;
        appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        autocomplete?: string | undefined;
        counter?: string | number | boolean | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        suffix?: string | undefined;
        role?: string | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("vuetify/lib/composables/density.mjs").Density;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("vuetify/lib/composables/density.mjs").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("vuetify/lib/composables/density.mjs").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("vuetify/lib/composables/density.mjs").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    }, "disabled" | "style" | "density" | "readonly" | "error" | "reset" | "messages" | "rules" | "persistentHint" | "isValid" | "resetValidation" | "validate" | "centerAffix" | "direction" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors"> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & import("vue").ComponentCustomProperties & import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("vuetify/lib/components/VInput/VInput.mjs").VInputSlots>, "prependIcon" | "appendIcon" | "disabled" | "color" | "theme" | "class" | "style" | "density" | "maxWidth" | "minWidth" | "width" | "baseColor" | "readonly" | "$children" | "v-slots" | "v-slot:append" | "v-slot:default" | "v-slot:prepend" | keyof import("vue").VNodeProps | "name" | "modelValue" | "onUpdate:modelValue" | "id" | "label" | "error" | "messages" | "rules" | "hint" | "persistentHint" | "centerAffix" | "direction" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "onUpdate:focused" | "validateOn" | "validationValue" | "iconColor" | "hideDetails" | "onClick:prepend" | "onClick:append" | "v-slot:details" | "v-slot:message">, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            details: boolean;
            labelId?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("vuetify/lib/components/VField/VField.mjs").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("vuetify/lib/components/VField/VField.mjs").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        labelId?: string | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, "flat" | "disabled" | "variant" | "style" | "rounded" | "tile" | "active" | "reverse" | "details" | "error" | "centerAffix" | "focused" | "glow" | "controlRef" | "fieldIconColor" | "clearIcon" | "clearable" | "dirty" | "persistentClear" | "singleLine"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & import("vue").ComponentCustomProperties & import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("vuetify/lib/components/VField/VField.mjs").VFieldSlots>, "flat" | "disabled" | "loading" | "color" | "variant" | "theme" | "class" | "style" | "rounded" | "tile" | "active" | "baseColor" | "reverse" | "$children" | "v-slots" | "v-slot:default" | "v-slot:loader" | keyof import("vue").VNodeProps | "modelValue" | "onUpdate:modelValue" | "id" | "details" | "label" | "error" | "bgColor" | "centerAffix" | "focused" | "glow" | "onUpdate:focused" | "iconColor" | "clearIcon" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "labelId" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:label" | "v-slot:prepend-inner">, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:control": (e: MouseEvent) => true;
        "mousedown:control": (e: MouseEvent) => true;
        "update:focused": (focused: boolean) => true;
        "update:modelValue": (val: string) => true;
    }, string, {
        style: import("vue").StyleValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("vuetify/lib/composables/density.mjs").Density;
        rounded: string | number | boolean;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("vuetify/lib/composables/icons.mjs").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    }, {}, string, import("vue").SlotsType<Partial<{
        prepend: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("vuetify/lib/components/VInput/VInput.mjs").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("vuetify/lib/components/VMessages/VMessages.mjs").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        clear: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "prepend-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "append-inner": (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: import("vuetify/lib/components/VField/VField.mjs").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: import("vuetify/lib/composables/loader.mjs").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        counter: (arg: import("vuetify/lib/components/VCounter/VCounter.mjs").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        focused: BooleanConstructor;
        "onUpdate:focused": import("vue").PropType<(args_0: boolean) => void>;
        errorMessages: {
            type: import("vue").PropType<string | readonly string[] | null>;
            default: () => never[];
        };
        maxErrors: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: {
            type: import("vue").PropType<boolean | null>;
            default: null;
        };
        rules: {
            type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[]>;
            default: () => never[];
        };
        modelValue: null;
        validateOn: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        validationValue: null;
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        maxWidth: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        loading: (BooleanConstructor | StringConstructor)[];
        id: StringConstructor;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        hideDetails: import("vue").PropType<"auto" | boolean>;
        hideSpinButtons: BooleanConstructor;
        hint: StringConstructor;
        persistentHint: BooleanConstructor;
        messages: {
            type: import("vue").PropType<string | readonly string[]>;
            default: () => never[];
        };
        "onClick:prepend": import("vue").PropType<(args_0: MouseEvent) => void>;
        "onClick:append": import("vue").PropType<(args_0: MouseEvent) => void>;
        appendInnerIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        bgColor: StringConstructor;
        clearable: BooleanConstructor;
        clearIcon: {
            type: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
            default: string;
        };
        active: BooleanConstructor;
        centerAffix: {
            type: BooleanConstructor;
            default: undefined;
        };
        color: StringConstructor;
        baseColor: StringConstructor;
        dirty: BooleanConstructor;
        disabled: {
            type: BooleanConstructor;
            default: null;
        };
        glow: BooleanConstructor;
        error: BooleanConstructor;
        flat: BooleanConstructor;
        iconColor: (BooleanConstructor | StringConstructor)[];
        label: StringConstructor;
        persistentClear: BooleanConstructor;
        prependInnerIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        reverse: BooleanConstructor;
        singleLine: BooleanConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
            default: string;
            validator: (v: any) => boolean;
        };
        "onClick:clear": import("vue").PropType<(args_0: MouseEvent) => void>;
        "onClick:appendInner": import("vue").PropType<(args_0: MouseEvent) => void>;
        "onClick:prependInner": import("vue").PropType<(args_0: MouseEvent) => void>;
        autocomplete: import("vue").PropType<string>;
        autofocus: BooleanConstructor;
        counter: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        counterValue: import("vue").PropType<number | ((value: any) => number)>;
        prefix: StringConstructor;
        placeholder: StringConstructor;
        persistentPlaceholder: BooleanConstructor;
        persistentCounter: BooleanConstructor;
        suffix: StringConstructor;
        role: StringConstructor;
        type: {
            type: StringConstructor;
            default: string;
        };
        modelModifiers: import("vue").PropType<Record<string, boolean>>;
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        focused: BooleanConstructor;
        "onUpdate:focused": import("vue").PropType<(args_0: boolean) => void>;
        errorMessages: {
            type: import("vue").PropType<string | readonly string[] | null>;
            default: () => never[];
        };
        maxErrors: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        name: StringConstructor;
        readonly: {
            type: import("vue").PropType<boolean | null>;
            default: null;
        };
        rules: {
            type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult> | ((value: any) => import("vuetify/lib/composables/validation.mjs").ValidationResult) | ((value: any) => PromiseLike<import("vuetify/lib/composables/validation.mjs").ValidationResult>) | [string, any, (string | undefined)?])[]>;
            default: () => never[];
        };
        modelValue: null;
        validateOn: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        validationValue: null;
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        maxWidth: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        loading: (BooleanConstructor | StringConstructor)[];
        id: StringConstructor;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        hideDetails: import("vue").PropType<"auto" | boolean>;
        hideSpinButtons: BooleanConstructor;
        hint: StringConstructor;
        persistentHint: BooleanConstructor;
        messages: {
            type: import("vue").PropType<string | readonly string[]>;
            default: () => never[];
        };
        "onClick:prepend": import("vue").PropType<(args_0: MouseEvent) => void>;
        "onClick:append": import("vue").PropType<(args_0: MouseEvent) => void>;
        appendInnerIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        bgColor: StringConstructor;
        clearable: BooleanConstructor;
        clearIcon: {
            type: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
            default: string;
        };
        active: BooleanConstructor;
        centerAffix: {
            type: BooleanConstructor;
            default: undefined;
        };
        color: StringConstructor;
        baseColor: StringConstructor;
        dirty: BooleanConstructor;
        disabled: {
            type: BooleanConstructor;
            default: null;
        };
        glow: BooleanConstructor;
        error: BooleanConstructor;
        flat: BooleanConstructor;
        iconColor: (BooleanConstructor | StringConstructor)[];
        label: StringConstructor;
        persistentClear: BooleanConstructor;
        prependInnerIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        reverse: BooleanConstructor;
        singleLine: BooleanConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
            default: string;
            validator: (v: any) => boolean;
        };
        "onClick:clear": import("vue").PropType<(args_0: MouseEvent) => void>;
        "onClick:appendInner": import("vue").PropType<(args_0: MouseEvent) => void>;
        "onClick:prependInner": import("vue").PropType<(args_0: MouseEvent) => void>;
        autocomplete: import("vue").PropType<string>;
        autofocus: BooleanConstructor;
        counter: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        counterValue: import("vue").PropType<number | ((value: any) => number)>;
        prefix: StringConstructor;
        placeholder: StringConstructor;
        persistentPlaceholder: BooleanConstructor;
        persistentCounter: BooleanConstructor;
        suffix: StringConstructor;
        role: StringConstructor;
        type: {
            type: StringConstructor;
            default: string;
        };
        modelModifiers: import("vue").PropType<Record<string, boolean>>;
    }>>;
    VTooltip: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset: string | number | number[];
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            minWidth: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            eager: boolean;
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            interactive: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnFocus?: boolean | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
            id?: string | undefined;
            text?: string | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                offset?: string | number | number[] | undefined;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activatorProps: Record<string, any>;
                openOnClick?: boolean | undefined;
                openOnHover: boolean;
                openOnFocus?: boolean | undefined;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                absolute: boolean;
                attach?: string | boolean | Element | undefined;
                closeOnBack: boolean;
                contained: boolean;
                contentClass?: any;
                contentProps?: any;
                disabled: boolean;
                opacity?: string | number | undefined;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                offset?: string | number | number[] | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                openOnClick?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                attach?: string | boolean | Element | undefined;
                contentClass?: any;
                contentProps?: any;
                opacity?: string | number | undefined;
            } & {
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & {
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }, {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "click:outside": (e: MouseEvent) => true;
                "update:modelValue": (value: boolean) => true;
                keydown: (e: KeyboardEvent) => true;
                afterEnter: () => true;
                afterLeave: () => true;
            }, string, {
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                activator: (arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            minWidth: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            eager: boolean;
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            interactive: boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: (arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset: string | number | number[];
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            minWidth: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            eager: boolean;
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            interactive: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnFocus?: boolean | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
            id?: string | undefined;
            text?: string | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                offset?: string | number | number[] | undefined;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activatorProps: Record<string, any>;
                openOnClick?: boolean | undefined;
                openOnHover: boolean;
                openOnFocus?: boolean | undefined;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                absolute: boolean;
                attach?: string | boolean | Element | undefined;
                closeOnBack: boolean;
                contained: boolean;
                contentClass?: any;
                contentProps?: any;
                disabled: boolean;
                opacity?: string | number | undefined;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                offset?: string | number | number[] | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                openOnClick?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                attach?: string | boolean | Element | undefined;
                contentClass?: any;
                contentProps?: any;
                opacity?: string | number | undefined;
            } & {
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & {
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }, {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "click:outside": (e: MouseEvent) => true;
                "update:modelValue": (value: boolean) => true;
                keydown: (e: KeyboardEvent) => true;
                afterEnter: () => true;
                afterLeave: () => true;
            }, string, {
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                activator: (arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            } | {};
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            minWidth: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            eager: boolean;
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            interactive: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        offset: string | number | number[];
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        minWidth: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        eager: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        interactive: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnFocus?: boolean | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
        id?: string | undefined;
        text?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset?: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            absolute: boolean;
            attach?: string | boolean | Element | undefined;
            closeOnBack: boolean;
            contained: boolean;
            contentClass?: any;
            contentProps?: any;
            disabled: boolean;
            opacity?: string | number | undefined;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:outside": (e: MouseEvent) => true;
            "update:modelValue": (value: boolean) => true;
            keydown: (e: KeyboardEvent) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, "disabled" | "style" | "location" | "absolute" | "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | "_disableGlobalStack" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "eager" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "viewportMargin" | "zIndex"> & import("vue").ShallowUnwrapRef<{
        activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
        localTop: Readonly<import("vue").Ref<boolean, boolean>>;
        updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & import("vue").ComponentCustomProperties, "disabled" | "theme" | "class" | "style" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "location" | "absolute" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "target" | "_disableGlobalStack" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "eager" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "viewportMargin" | "zIndex" | "offset" | "closeDelay" | "openDelay" | "activator" | "transition" | "attach" | "contentClass" | "contentProps" | "opacity" | "v-slot:activator" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue">, `$${any}`> & {
        _allExposed: {
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => true;
    }, string, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        offset: string | number | number[] | undefined;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        minWidth: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        eager: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        interactive: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        locationStrategy: Omit<{
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: NonNullable<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
        };
        location: Omit<{
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: NonNullable<import("vuetify/lib/types.mjs").Anchor>;
        };
        origin: Omit<{
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: NonNullable<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
        };
        offset: {
            type: import("vue").PropType<string | number | number[] | undefined>;
            default: NonNullable<string | number | number[] | undefined>;
        };
        stickToTarget: BooleanConstructor;
        viewportMargin: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        scrollStrategy: Omit<{
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: NonNullable<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        width: (NumberConstructor | StringConstructor)[];
        closeDelay: (NumberConstructor | StringConstructor)[];
        openDelay: (NumberConstructor | StringConstructor)[];
        target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activatorProps: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: Omit<{
            type: BooleanConstructor;
            default: undefined;
        }, "default" | "type"> & {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        openOnHover: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        eager: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        transition: {
            type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
            default: NonNullable<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null> | null;
        };
        attach: import("vue").PropType<string | boolean | Element>;
        closeOnBack: Omit<{
            type: BooleanConstructor;
            default: boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        opacity: (NumberConstructor | StringConstructor)[];
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: Omit<{
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | boolean>;
            default: NonNullable<string | boolean>;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        id: StringConstructor;
        interactive: BooleanConstructor;
        text: StringConstructor;
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        locationStrategy: Omit<{
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: NonNullable<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
        };
        location: Omit<{
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: NonNullable<import("vuetify/lib/types.mjs").Anchor>;
        };
        origin: Omit<{
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: NonNullable<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
        };
        offset: {
            type: import("vue").PropType<string | number | number[] | undefined>;
            default: NonNullable<string | number | number[] | undefined>;
        };
        stickToTarget: BooleanConstructor;
        viewportMargin: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        scrollStrategy: Omit<{
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: NonNullable<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        width: (NumberConstructor | StringConstructor)[];
        closeDelay: (NumberConstructor | StringConstructor)[];
        openDelay: (NumberConstructor | StringConstructor)[];
        target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activatorProps: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: Omit<{
            type: BooleanConstructor;
            default: undefined;
        }, "default" | "type"> & {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        openOnHover: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        eager: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        transition: {
            type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
            default: NonNullable<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null> | null;
        };
        attach: import("vue").PropType<string | boolean | Element>;
        closeOnBack: Omit<{
            type: BooleanConstructor;
            default: boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        opacity: (NumberConstructor | StringConstructor)[];
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: Omit<{
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | boolean>;
            default: NonNullable<string | boolean>;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        id: StringConstructor;
        interactive: BooleanConstructor;
        text: StringConstructor;
    }>>;
    VList: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp;
            openStrategy: import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            valueComparator?: import("vuetify/lib/util/deepEqual.mjs").ValueComparator | undefined;
            activeStrategy?: import("vuetify/lib/composables/nested/nested.mjs").ActiveStrategyProp | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            expandIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            collapseIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
        } & {
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, {
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            focus: (location?: number | "first" | "last" | "next" | "prev" | undefined) => void;
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            getPath: (id: unknown) => unknown[];
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:selected": (value: unknown) => true;
            "update:activated": (value: unknown) => true;
            "update:opened": (value: unknown) => true;
            "click:open": (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => true;
            "click:activate": (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => true;
            "click:select": (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => true;
        }, "$children" | "activated" | "click:open" | "click:select" | "itemChildren" | "itemProps" | "itemTitle" | "itemValue" | "items" | "opened" | "selected" | "update:activated" | "update:opened" | "update:selected" | "v-slot:append" | "v-slot:default" | "v-slot:divider" | "v-slot:header" | "v-slot:item" | "v-slot:prepend" | "v-slot:subheader" | "v-slot:subtitle" | "v-slot:title" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("vuetify/lib/util/helpers.mjs").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp;
            openStrategy: import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            prepend: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot & {
                item: any;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot & {
                item: any;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            divider: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            subheader: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp;
            openStrategy: import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            valueComparator?: import("vuetify/lib/util/deepEqual.mjs").ValueComparator | undefined;
            activeStrategy?: import("vuetify/lib/composables/nested/nested.mjs").ActiveStrategyProp | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            expandIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            collapseIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
        } & {
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, {
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            focus: (location?: number | "first" | "last" | "next" | "prev" | undefined) => void;
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            getPath: (id: unknown) => unknown[];
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("vuetify/lib/util/helpers.mjs").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp;
            openStrategy: import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("vuetify/lib/composables/density.mjs").Density;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp;
        openStrategy: import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        valueComparator?: import("vuetify/lib/util/deepEqual.mjs").ValueComparator | undefined;
        activeStrategy?: import("vuetify/lib/composables/nested/nested.mjs").ActiveStrategyProp | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        expandIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        collapseIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
    } & {
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {
        open: (id: unknown, value: boolean, event?: Event | undefined) => void;
        select: (id: unknown, value: boolean, event?: Event | undefined) => void;
        focus: (location?: number | "first" | "last" | "next" | "prev" | undefined) => void;
        children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
        parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
        getPath: (id: unknown) => unknown[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:selected": (value: unknown) => true;
        "update:activated": (value: unknown) => true;
        "update:opened": (value: unknown) => true;
        "click:open": (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
        "click:activate": (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
        "click:select": (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
    }, "$children" | "v-slots" | "v-slot:append" | "v-slot:default" | "v-slot:prepend" | "activated" | "v-slot:item" | "v-slot:subtitle" | "v-slot:title" | "click:open" | "click:select" | "itemChildren" | "itemProps" | "itemTitle" | "itemValue" | "items" | "opened" | "selected" | "update:activated" | "update:opened" | "update:selected" | "v-slot:divider" | "v-slot:header" | "v-slot:subheader">, string, {
        style: import("vue").StyleValue;
        density: import("vuetify/lib/composables/density.mjs").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        itemType: import("vuetify/lib/util/helpers.mjs").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp;
        openStrategy: import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        prepend: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot & {
            item: any;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot & {
            item: any;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot & {
            item: any;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subheader: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <S, A, O, T extends readonly any[]>(props: {
        items?: T | undefined;
        itemTitle?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        itemValue?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        itemChildren?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        itemProps?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        selected?: S | undefined;
        activated?: A | undefined;
        opened?: O | undefined;
        "onUpdate:selected"?: ((value: S) => void) | undefined;
        "onUpdate:activated"?: ((value: A) => void) | undefined;
        "onUpdate:opened"?: ((value: O) => void) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
    }, slots: import("vuetify/lib/components/VList/VListChildren.mjs").VListChildrenSlots<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>) => import("vuetify/lib/util/defineComponent.mjs").GenericProps<{
        items?: T | undefined;
        itemTitle?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        itemValue?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        itemChildren?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        itemProps?: import("vuetify/lib/util/helpers.mjs").SelectItemKey<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>;
        selected?: S | undefined;
        activated?: A | undefined;
        opened?: O | undefined;
        "onUpdate:selected"?: ((value: S) => void) | undefined;
        "onUpdate:activated"?: ((value: A) => void) | undefined;
        "onUpdate:opened"?: ((value: O) => void) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
    }, import("vuetify/lib/components/VList/VListChildren.mjs").VListChildrenSlots<import("vuetify/lib/components/VList/VList.mjs").ItemType<T>>>) & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        items: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        itemTitle: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemValue: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemChildren: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemProps: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemType: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        returnObject: BooleanConstructor;
        valueComparator: import("vue").PropType<import("vuetify/lib/util/deepEqual.mjs").ValueComparator>;
        activatable: BooleanConstructor;
        selectable: BooleanConstructor;
        activeStrategy: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").ActiveStrategyProp>;
        selectStrategy: {
            type: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp>;
            default: NonNullable<import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp>;
        };
        openStrategy: {
            type: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp>;
            default: NonNullable<import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp>;
        };
        opened: null;
        activated: null;
        selected: null;
        mandatory: BooleanConstructor;
        itemsRegistration: {
            type: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType>;
            default: string;
        };
        baseColor: StringConstructor;
        activeColor: StringConstructor;
        activeClass: StringConstructor;
        bgColor: StringConstructor;
        disabled: BooleanConstructor;
        filterable: BooleanConstructor;
        expandIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        collapseIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        lines: {
            type: import("vue").PropType<"one" | "three" | "two" | false>;
            default: string;
        };
        slim: BooleanConstructor;
        prependGap: (NumberConstructor | StringConstructor)[];
        indent: (NumberConstructor | StringConstructor)[];
        nav: BooleanConstructor;
        "onClick:open": import("vue").PropType<(args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void>;
        "onClick:select": import("vue").PropType<(args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void>;
        "onUpdate:opened": import("vue").PropType<(args_0: unknown) => void>;
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        items: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        itemTitle: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemValue: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemChildren: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemProps: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        itemType: {
            type: import("vue").PropType<import("vuetify/lib/util/helpers.mjs").SelectItemKey>;
            default: string;
        };
        returnObject: BooleanConstructor;
        valueComparator: import("vue").PropType<import("vuetify/lib/util/deepEqual.mjs").ValueComparator>;
        activatable: BooleanConstructor;
        selectable: BooleanConstructor;
        activeStrategy: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").ActiveStrategyProp>;
        selectStrategy: {
            type: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp>;
            default: NonNullable<import("vuetify/lib/composables/nested/nested.mjs").SelectStrategyProp>;
        };
        openStrategy: {
            type: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp>;
            default: NonNullable<import("vuetify/lib/composables/nested/nested.mjs").OpenStrategyProp>;
        };
        opened: null;
        activated: null;
        selected: null;
        mandatory: BooleanConstructor;
        itemsRegistration: {
            type: import("vue").PropType<import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType>;
            default: string;
        };
        baseColor: StringConstructor;
        activeColor: StringConstructor;
        activeClass: StringConstructor;
        bgColor: StringConstructor;
        disabled: BooleanConstructor;
        filterable: BooleanConstructor;
        expandIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        collapseIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        lines: {
            type: import("vue").PropType<"one" | "three" | "two" | false>;
            default: string;
        };
        slim: BooleanConstructor;
        prependGap: (NumberConstructor | StringConstructor)[];
        indent: (NumberConstructor | StringConstructor)[];
        nav: BooleanConstructor;
        "onClick:open": import("vue").PropType<(args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void>;
        "onClick:select": import("vue").PropType<(args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void>;
        "onUpdate:opened": import("vue").PropType<(args_0: unknown) => void>;
    }>>;
    VListItem: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
            slim: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            active?: boolean | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            baseColor?: string | undefined;
            lines?: "one" | "three" | "two" | false | undefined;
            link?: boolean | undefined;
            prependAvatar?: string | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependGap?: string | number | undefined;
            subtitle?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
            value?: any;
            onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        } & {
            onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event | undefined) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean, boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event | undefined) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activatable: import("vue").Ref<boolean, boolean>;
                selectable: import("vue").Ref<boolean, boolean>;
                opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
                selectedValues: import("vue").Ref<unknown[], unknown[]>;
                itemsRegistration: import("vue").Ref<import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType, import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
                unregister: (id: unknown) => void;
                updateDisabled: (id: unknown, isDisabled: boolean) => void;
                open: (id: unknown, value: boolean, event?: Event | undefined) => void;
                activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
                select: (id: unknown, value: boolean, event?: Event | undefined) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{} | null>;
            link: import("vuetify/lib/composables/router.mjs").UseLink;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (e: KeyboardEvent | MouseEvent) => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            active: boolean;
            disabled: boolean;
            link: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            slim: boolean;
            subtitle: string | number | boolean;
            title: string | number | boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            prepend: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("vuetify/lib/composables/density.mjs").Density;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            disabled: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            };
            slim: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            color?: string | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            href?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
            active?: boolean | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            appendAvatar?: string | undefined;
            appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            baseColor?: string | undefined;
            lines?: "one" | "three" | "two" | false | undefined;
            link?: boolean | undefined;
            prependAvatar?: string | undefined;
            prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
            prependGap?: string | number | undefined;
            subtitle?: string | number | boolean | undefined;
            title?: string | number | boolean | undefined;
            value?: any;
            onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        } & {
            onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event | undefined) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean, boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event | undefined) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activatable: import("vue").Ref<boolean, boolean>;
                selectable: import("vue").Ref<boolean, boolean>;
                opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
                selectedValues: import("vue").Ref<unknown[], unknown[]>;
                itemsRegistration: import("vue").Ref<import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType, import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
                unregister: (id: unknown) => void;
                updateDisabled: (id: unknown, isDisabled: boolean) => void;
                open: (id: unknown, value: boolean, event?: Event | undefined) => void;
                activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
                select: (id: unknown, value: boolean, event?: Event | undefined) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{} | null>;
            link: import("vuetify/lib/composables/router.mjs").UseLink;
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            density: import("vuetify/lib/composables/density.mjs").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("vuetify/lib/types.mjs").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            replace: boolean;
            exact: boolean;
            active: boolean;
            disabled: boolean;
            link: boolean;
            nav: boolean;
            ripple: boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined;
            slim: boolean;
            subtitle: string | number | boolean;
            title: string | number | boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("vuetify/lib/composables/density.mjs").Density;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        disabled: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        slim: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        active?: boolean | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        appendAvatar?: string | undefined;
        appendIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        baseColor?: string | undefined;
        lines?: "one" | "three" | "two" | false | undefined;
        link?: boolean | undefined;
        prependAvatar?: string | undefined;
        prependIcon?: import("vuetify/lib/composables/icons.mjs").IconValue | undefined;
        prependGap?: string | number | undefined;
        subtitle?: string | number | boolean | undefined;
        title?: string | number | boolean | undefined;
        value?: any;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: KeyboardEvent | MouseEvent) => any) | undefined;
    }, {
        activate: (activated: boolean, e?: Event | undefined) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean, boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event | undefined) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activatable: import("vue").Ref<boolean, boolean>;
            selectable: import("vue").Ref<boolean, boolean>;
            opened: import("vue").Ref<Set<unknown>, Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>, Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "indeterminate" | "off" | "on">, Map<unknown, "indeterminate" | "off" | "on">>;
            selectedValues: import("vue").Ref<unknown[], unknown[]>;
            itemsRegistration: import("vue").Ref<import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType, import("vuetify/lib/composables/nested/nested.mjs").ItemsRegistrationType>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean | undefined) => void;
            unregister: (id: unknown) => void;
            updateDisabled: (id: unknown, isDisabled: boolean) => void;
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            activate: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event | undefined) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{} | null>;
        link: import("vuetify/lib/composables/router.mjs").UseLink;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (e: KeyboardEvent | MouseEvent) => true;
    }, string, {
        style: import("vue").StyleValue;
        density: import("vuetify/lib/composables/density.mjs").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("vuetify/lib/types.mjs").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        nav: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        slim: boolean;
        subtitle: string | number | boolean;
        title: string | number | boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        prepend: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemTitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("vuetify/lib/components/VList/VListItem.mjs").ListItemSubtitleSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        href: StringConstructor;
        replace: BooleanConstructor;
        to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
        exact: BooleanConstructor;
        active: {
            type: BooleanConstructor;
            default: undefined;
        };
        activeClass: StringConstructor;
        activeColor: StringConstructor;
        appendAvatar: StringConstructor;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        baseColor: StringConstructor;
        disabled: BooleanConstructor;
        lines: import("vue").PropType<"one" | "three" | "two" | false>;
        link: {
            type: BooleanConstructor;
            default: undefined;
        };
        nav: BooleanConstructor;
        prependAvatar: StringConstructor;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        ripple: {
            type: import("vue").PropType<boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined>;
            default: boolean;
        };
        slim: BooleanConstructor;
        prependGap: (NumberConstructor | StringConstructor)[];
        subtitle: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        title: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        value: null;
        onClick: import("vue").PropType<(args_0: KeyboardEvent | MouseEvent) => void>;
        onClickOnce: import("vue").PropType<(args_0: MouseEvent) => void>;
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        density: {
            type: import("vue").PropType<import("vuetify/lib/composables/density.mjs").Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            validator(v: any): boolean;
        };
        rounded: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        tile: BooleanConstructor;
        tag: {
            type: import("vue").PropType<string | import("vuetify/lib/types.mjs").JSXComponent>;
            default: string;
        };
        color: StringConstructor;
        variant: Omit<{
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: string;
            validator: (v: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
            default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        href: StringConstructor;
        replace: BooleanConstructor;
        to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
        exact: BooleanConstructor;
        active: {
            type: BooleanConstructor;
            default: undefined;
        };
        activeClass: StringConstructor;
        activeColor: StringConstructor;
        appendAvatar: StringConstructor;
        appendIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        baseColor: StringConstructor;
        disabled: BooleanConstructor;
        lines: import("vue").PropType<"one" | "three" | "two" | false>;
        link: {
            type: BooleanConstructor;
            default: undefined;
        };
        nav: BooleanConstructor;
        prependAvatar: StringConstructor;
        prependIcon: import("vue").PropType<import("vuetify/lib/composables/icons.mjs").IconValue>;
        ripple: {
            type: import("vue").PropType<boolean | {
                class?: string | undefined;
                keys?: string[] | undefined;
            } | undefined>;
            default: boolean;
        };
        slim: BooleanConstructor;
        prependGap: (NumberConstructor | StringConstructor)[];
        subtitle: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        title: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        value: null;
        onClick: import("vue").PropType<(args_0: KeyboardEvent | MouseEvent) => void>;
        onClickOnce: import("vue").PropType<(args_0: MouseEvent) => void>;
    }>>;
    VListItemTitle: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            tag: string;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, {
            style: import("vue").StyleValue;
            tag: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        tag: string;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }, import("vue").ExtractPropTypes<{
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>>;
    VMenu: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            disableInitialFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
            id?: string | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {
            id: Readonly<import("vue").Ref<string, string>>;
            ΨopenChildren: import("vue").ShallowRef<Set<string>, Set<string>>;
        } & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                offset?: string | number | number[] | undefined;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activatorProps: Record<string, any>;
                openOnClick?: boolean | undefined;
                openOnHover: boolean;
                openOnFocus?: boolean | undefined;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                absolute: boolean;
                attach?: string | boolean | Element | undefined;
                closeOnBack: boolean;
                contained: boolean;
                contentClass?: any;
                contentProps?: any;
                disabled: boolean;
                opacity?: string | number | undefined;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                offset?: string | number | number[] | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                openOnClick?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                attach?: string | boolean | Element | undefined;
                contentClass?: any;
                contentProps?: any;
                opacity?: string | number | undefined;
            } & {
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & {
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }, {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "click:outside": (e: MouseEvent) => true;
                "update:modelValue": (value: boolean) => true;
                keydown: (e: KeyboardEvent) => true;
                afterEnter: () => true;
                afterLeave: () => true;
            }, string, {
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                activator: (arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            } | {
                id: Readonly<import("vue").Ref<string, string>>;
                ΨopenChildren: import("vue").ShallowRef<Set<string>, Set<string>>;
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => true;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor | undefined;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            disableInitialFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
        }, true, {}, import("vue").SlotsType<Partial<{
            default: (arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            disableInitialFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
            id?: string | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {
            id: Readonly<import("vue").Ref<string, string>>;
            ΨopenChildren: import("vue").ShallowRef<Set<string>, Set<string>>;
        } & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                offset?: string | number | number[] | undefined;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activatorProps: Record<string, any>;
                openOnClick?: boolean | undefined;
                openOnHover: boolean;
                openOnFocus?: boolean | undefined;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                absolute: boolean;
                attach?: string | boolean | Element | undefined;
                closeOnBack: boolean;
                contained: boolean;
                contentClass?: any;
                contentProps?: any;
                disabled: boolean;
                opacity?: string | number | undefined;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnHover: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                offset?: string | number | number[] | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                closeDelay?: string | number | undefined;
                openDelay?: string | number | undefined;
                target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
                openOnClick?: boolean | undefined;
                openOnFocus?: boolean | undefined;
                transition?: string | boolean | (import("vue").TransitionProps & {
                    component?: import("vue").Component | undefined;
                }) | null | undefined;
                attach?: string | boolean | Element | undefined;
                contentClass?: any;
                contentProps?: any;
                opacity?: string | number | undefined;
            } & {
                $children?: {
                    default?: ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | ((arg: {
                        isActive: import("vue").Ref<boolean, boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:activator"?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
            } & {
                onAfterEnter?: (() => any) | undefined;
                onAfterLeave?: (() => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
                onKeydown?: ((e: KeyboardEvent) => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            }, {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                "click:outside": (e: MouseEvent) => true;
                "update:modelValue": (value: boolean) => true;
                keydown: (e: KeyboardEvent) => true;
                afterEnter: () => true;
                afterLeave: () => true;
            }, string, {
                style: import("vue").StyleValue;
                locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
                location: import("vuetify/lib/types.mjs").Anchor;
                origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
                stickToTarget: boolean;
                viewportMargin: string | number;
                scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                retainFocus: boolean;
                captureFocus: boolean;
                eager: boolean;
                absolute: boolean;
                closeOnBack: boolean;
                contained: boolean;
                disabled: boolean;
                noClickAnimation: boolean;
                modelValue: boolean;
                persistent: boolean;
                scrim: string | boolean;
                zIndex: string | number;
                _disableGlobalStack: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                activator: (arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
                animateClick: () => void;
                contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
                localTop: Readonly<import("vue").Ref<boolean, boolean>>;
                updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
            } | {
                id: Readonly<import("vue").Ref<string, string>>;
                ΨopenChildren: import("vue").ShallowRef<Set<string>, Set<string>>;
            };
        }, {}, {}, {}, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor | undefined;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            disableInitialFocus: boolean;
            eager: boolean;
            transition: string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        disableInitialFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        submenu: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
        id?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {
        id: Readonly<import("vue").Ref<string, string>>;
        ΨopenChildren: import("vue").ShallowRef<Set<string>, Set<string>>;
    } & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            offset?: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            absolute: boolean;
            attach?: string | boolean | Element | undefined;
            closeOnBack: boolean;
            contained: boolean;
            contentClass?: any;
            contentProps?: any;
            disabled: boolean;
            opacity?: string | number | undefined;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            attach?: string | boolean | Element | undefined;
            contentClass?: any;
            contentProps?: any;
            opacity?: string | number | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:outside": (e: MouseEvent) => true;
            "update:modelValue": (value: boolean) => true;
            keydown: (e: KeyboardEvent) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
            location: import("vuetify/lib/types.mjs").Anchor;
            origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            absolute: boolean;
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, "disabled" | "style" | "location" | "absolute" | "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | "_disableGlobalStack" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "eager" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "viewportMargin" | "zIndex"> & import("vue").ShallowUnwrapRef<{
        activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
        localTop: Readonly<import("vue").Ref<boolean, boolean>>;
        updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & import("vue").ComponentCustomProperties, "disabled" | "theme" | "class" | "style" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "width" | "location" | "absolute" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "target" | "_disableGlobalStack" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "eager" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "viewportMargin" | "zIndex" | "offset" | "closeDelay" | "openDelay" | "activator" | "transition" | "attach" | "contentClass" | "contentProps" | "opacity" | "v-slot:activator" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue">, `$${any}`> & {
        _allExposed: {
            activatorEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<import("vue").Ref<boolean, boolean>>;
            localTop: Readonly<import("vue").Ref<boolean, boolean>>;
            updateLocation: import("vue").Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {
            id: Readonly<import("vue").Ref<string, string>>;
            ΨopenChildren: import("vue").ShallowRef<Set<string>, Set<string>>;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => true;
    }, string, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction;
        location: import("vuetify/lib/types.mjs").Anchor | undefined;
        origin: "auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction;
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        disableInitialFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        submenu: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("vuetify/lib/util/helpers.mjs").TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        locationStrategy: Omit<{
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: NonNullable<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
        };
        location: Omit<{
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | undefined>;
            default: NonNullable<import("vuetify/lib/types.mjs").Anchor> | undefined;
        };
        origin: {
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        };
        offset: import("vue").PropType<string | number | number[] | undefined>;
        stickToTarget: BooleanConstructor;
        viewportMargin: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        scrollStrategy: Omit<{
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: NonNullable<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        closeDelay: {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        openDelay: {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activatorProps: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        retainFocus: BooleanConstructor;
        captureFocus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disableInitialFocus: BooleanConstructor;
        eager: BooleanConstructor;
        transition: {
            type: import("vue").PropType<string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
            default: {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | NonNullable<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
        };
        attach: import("vue").PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        opacity: (NumberConstructor | StringConstructor)[];
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: Omit<{
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | boolean>;
            default: NonNullable<string | boolean>;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        id: StringConstructor;
        submenu: BooleanConstructor;
    }, import("vue").ExtractPropTypes<{
        theme: StringConstructor;
        class: import("vue").PropType<any>;
        style: {
            type: import("vue").PropType<import("vue").StyleValue>;
            default: null;
        };
        locationStrategy: Omit<{
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
            default: NonNullable<"connected" | "static" | import("vuetify/lib/types.mjs").LocationStrategyFunction>;
        };
        location: Omit<{
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        }, "default" | "type"> & {
            type: import("vue").PropType<import("vuetify/lib/types.mjs").Anchor | undefined>;
            default: NonNullable<import("vuetify/lib/types.mjs").Anchor> | undefined;
        };
        origin: {
            type: import("vue").PropType<"auto" | "overlap" | import("vuetify/lib/types.mjs").Anchor>;
            default: string;
        };
        offset: import("vue").PropType<string | number | number[] | undefined>;
        stickToTarget: BooleanConstructor;
        viewportMargin: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        scrollStrategy: Omit<{
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: string;
            validator: (val: any) => boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
            default: NonNullable<"block" | "close" | "none" | "reposition" | import("vuetify/lib/types.mjs").ScrollStrategyFunction>;
        };
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        maxWidth: (NumberConstructor | StringConstructor)[];
        minHeight: (NumberConstructor | StringConstructor)[];
        minWidth: (NumberConstructor | StringConstructor)[];
        width: (NumberConstructor | StringConstructor)[];
        closeDelay: {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        openDelay: {
            type: import("vue").PropType<string | number>;
            default: NonNullable<string | number>;
        };
        target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        activatorProps: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        retainFocus: BooleanConstructor;
        captureFocus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disableInitialFocus: BooleanConstructor;
        eager: BooleanConstructor;
        transition: {
            type: import("vue").PropType<string | boolean | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
            default: {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
                    } & {
                        $children?: {
                            default?: (() => import("vue").VNodeChild) | undefined;
                        } | {
                            $stable?: boolean | undefined;
                        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                        "v-slots"?: {
                            default?: false | (() => import("vue").VNodeChild) | undefined;
                        } | undefined;
                    } & {
                        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: undefined;
                    __isTeleport?: undefined;
                    __isSuspense?: undefined;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
                    $children?: {
                        default?: (() => import("vue").VNodeChild) | undefined;
                    } | {
                        $stable?: boolean | undefined;
                    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                    "v-slots"?: {
                        default?: false | (() => import("vue").VNodeChild) | undefined;
                    } | undefined;
                } & {
                    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vuetify/lib/util/defineComponent.mjs").FilterPropsOptions<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: import("vue").PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | NonNullable<string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null>;
        };
        attach: import("vue").PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        opacity: (NumberConstructor | StringConstructor)[];
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: Omit<{
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        }, "default" | "type"> & {
            type: import("vue").PropType<string | boolean>;
            default: NonNullable<string | boolean>;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        id: StringConstructor;
        submenu: BooleanConstructor;
    }>>;
};
//# sourceMappingURL=vuetifyComponents.d.ts.map
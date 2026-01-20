export interface ThemeConfig {
    name: string;
    version: string;
    logo: {
        light: string;
        dark: string;
        favicon: string;
    };
    colors: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    fonts: {
        primary: string;
        monospace: string;
    };
    customization: {
        appName: string;
        appDescription: string;
        copyrightText: string;
    };
}
export declare const useThemeStore: import("pinia").StoreDefinition<"theme", Pick<{
    themeConfig: import("vue").Ref<{
        name: string;
        version: string;
        logo: {
            light: string;
            dark: string;
            favicon: string;
        };
        colors: {
            light: Record<string, string>;
            dark: Record<string, string>;
        };
        fonts: {
            primary: string;
            monospace: string;
        };
        customization: {
            appName: string;
            appDescription: string;
            copyrightText: string;
        };
    } | null, ThemeConfig | {
        name: string;
        version: string;
        logo: {
            light: string;
            dark: string;
            favicon: string;
        };
        colors: {
            light: Record<string, string>;
            dark: Record<string, string>;
        };
        fonts: {
            primary: string;
            monospace: string;
        };
        customization: {
            appName: string;
            appDescription: string;
            copyrightText: string;
        };
    } | null>;
    isDark: import("vue").Ref<boolean, boolean>;
    isLoading: import("vue").Ref<boolean, boolean>;
    currentMode: import("vue").ComputedRef<"dark" | "light">;
    currentLogo: import("vue").ComputedRef<string>;
    currentColors: import("vue").ComputedRef<Record<string, string>>;
    appName: import("vue").ComputedRef<string>;
    favicon: import("vue").ComputedRef<string>;
    loadTheme: () => Promise<void>;
    toggleTheme: () => void;
    setTheme: (mode: "light" | "dark") => void;
    updateThemeColors: (colors: Record<string, string>) => void;
}, "themeConfig" | "isDark" | "isLoading">, Pick<{
    themeConfig: import("vue").Ref<{
        name: string;
        version: string;
        logo: {
            light: string;
            dark: string;
            favicon: string;
        };
        colors: {
            light: Record<string, string>;
            dark: Record<string, string>;
        };
        fonts: {
            primary: string;
            monospace: string;
        };
        customization: {
            appName: string;
            appDescription: string;
            copyrightText: string;
        };
    } | null, ThemeConfig | {
        name: string;
        version: string;
        logo: {
            light: string;
            dark: string;
            favicon: string;
        };
        colors: {
            light: Record<string, string>;
            dark: Record<string, string>;
        };
        fonts: {
            primary: string;
            monospace: string;
        };
        customization: {
            appName: string;
            appDescription: string;
            copyrightText: string;
        };
    } | null>;
    isDark: import("vue").Ref<boolean, boolean>;
    isLoading: import("vue").Ref<boolean, boolean>;
    currentMode: import("vue").ComputedRef<"dark" | "light">;
    currentLogo: import("vue").ComputedRef<string>;
    currentColors: import("vue").ComputedRef<Record<string, string>>;
    appName: import("vue").ComputedRef<string>;
    favicon: import("vue").ComputedRef<string>;
    loadTheme: () => Promise<void>;
    toggleTheme: () => void;
    setTheme: (mode: "light" | "dark") => void;
    updateThemeColors: (colors: Record<string, string>) => void;
}, "favicon" | "appName" | "currentMode" | "currentLogo" | "currentColors">, Pick<{
    themeConfig: import("vue").Ref<{
        name: string;
        version: string;
        logo: {
            light: string;
            dark: string;
            favicon: string;
        };
        colors: {
            light: Record<string, string>;
            dark: Record<string, string>;
        };
        fonts: {
            primary: string;
            monospace: string;
        };
        customization: {
            appName: string;
            appDescription: string;
            copyrightText: string;
        };
    } | null, ThemeConfig | {
        name: string;
        version: string;
        logo: {
            light: string;
            dark: string;
            favicon: string;
        };
        colors: {
            light: Record<string, string>;
            dark: Record<string, string>;
        };
        fonts: {
            primary: string;
            monospace: string;
        };
        customization: {
            appName: string;
            appDescription: string;
            copyrightText: string;
        };
    } | null>;
    isDark: import("vue").Ref<boolean, boolean>;
    isLoading: import("vue").Ref<boolean, boolean>;
    currentMode: import("vue").ComputedRef<"dark" | "light">;
    currentLogo: import("vue").ComputedRef<string>;
    currentColors: import("vue").ComputedRef<Record<string, string>>;
    appName: import("vue").ComputedRef<string>;
    favicon: import("vue").ComputedRef<string>;
    loadTheme: () => Promise<void>;
    toggleTheme: () => void;
    setTheme: (mode: "light" | "dark") => void;
    updateThemeColors: (colors: Record<string, string>) => void;
}, "loadTheme" | "toggleTheme" | "setTheme" | "updateThemeColors">>;
//# sourceMappingURL=theme.d.ts.map
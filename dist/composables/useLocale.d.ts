import { type LocaleCode, type LocaleOption } from "../locales";
export declare function useLocale(customLocales?: readonly LocaleOption[]): {
    locale: import("vue").ComputedRef<LocaleCode>;
    locales: readonly LocaleOption[];
    setLocale: (newLocale: LocaleCode) => void;
    t: (key: string) => string;
};
//# sourceMappingURL=useLocale.d.ts.map
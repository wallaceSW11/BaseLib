import type { App } from "vue";
import * as componentExports from "./components";
export declare const components: typeof componentExports;
export * from "./components";
export * from "./utils";
export * from "./composables";
export * from "./locales";
export * from "./stores";
export { default as globalsPlugin } from "./plugins";
export { requiredVuetifyComponents } from "./vuetifyComponents";
export default function registerLibComponents(app: App): void;
export declare function registerLibPlugins(app: App): void;
export declare function setupLib(app: App): void;
//# sourceMappingURL=index.d.ts.map
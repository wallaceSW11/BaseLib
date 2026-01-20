import type { App } from "vue";
import { notify } from "../utils/notify";
import { loading } from "../utils/loading";
import { confirm } from "../utils/confirm";
declare module "vue" {
    interface ComponentCustomProperties {
        $notify: typeof notify;
        $loading: typeof loading;
        $confirm: typeof confirm;
    }
}
declare const _default: {
    install(app: App): void;
};
export default _default;
//# sourceMappingURL=globals.d.ts.map
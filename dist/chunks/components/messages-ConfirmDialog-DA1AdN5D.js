import { defineComponent as l, ref as a, createBlock as t, openBlock as f } from "vue";
import { C as m } from "./messages-CustomConfirmDialog-DYMRwlwo.js";
const g = /* @__PURE__ */ l({
  __name: "ConfirmDialog",
  setup(s, { expose: i }) {
    const o = a(null);
    return i({
      ConfirmDialog: (e, r, n) => o.value ? o.value.ConfirmDialog(e, r, n) : (console.error("ConfirmDialog: customDialogRef is not available"), Promise.resolve(!1))
    }), (e, r) => (f(), t(m, {
      ref_key: "customDialogRef",
      ref: o
    }, null, 512));
  }
});
export {
  g as _
};
//# sourceMappingURL=messages-ConfirmDialog-DA1AdN5D.js.map

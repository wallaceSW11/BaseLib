import { defineComponent as p, ref as t, resolveComponent as v, createBlock as u, openBlock as f, Transition as d, withCtx as T, createCommentVNode as x } from "vue";
import { N as y } from "../utils/types-C6AEF72b.js";
import { _ as N } from "./LanguageSelector-CI4QGhJx.js";
const b = /* @__PURE__ */ p({
  __name: "FloatingNotify",
  setup(C, { expose: m }) {
    const o = t(!1), a = t("info"), s = t(""), i = t("");
    let e = null;
    const _ = (r, c, n = "") => {
      e && clearTimeout(e), a.value = r, s.value = c, i.value = n, o.value = !0, e = setTimeout(() => {
        l();
      }, y);
    }, l = () => {
      o.value = !1, e && (clearTimeout(e), e = null);
    };
    return m({
      show: _,
      hide: l
    }), (r, c) => {
      const n = v("v-alert");
      return f(), u(d, { name: "slide-fade" }, {
        default: T(() => [
          o.value ? (f(), u(n, {
            key: 0,
            type: a.value,
            title: s.value,
            text: i.value,
            class: "floating-notify",
            closable: "",
            elevation: "6",
            "onClick:close": l
          }, null, 8, ["type", "title", "text"])) : x("", !0)
        ]),
        _: 1
      });
    };
  }
}), F = /* @__PURE__ */ N(b, [["__scopeId", "data-v-b1bae76b"]]);
export {
  F
};
//# sourceMappingURL=messages-FloatingNotify-C7HXgRfu.js.map

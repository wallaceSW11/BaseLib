import { defineComponent as g, ref as s, resolveComponent as h, createBlock as y, openBlock as o, Transition as u, withCtx as d, createElementBlock as a, createCommentVNode as r, createVNode as _, createElementVNode as L, unref as f, toDisplayString as T } from "vue";
import { useI18n as k } from "vue-i18n";
import { L as x } from "../utils/types-C6AEF72b.js";
import { u as C } from "../stores/theme-CCYjaYW3.js";
import { _ as N } from "./LanguageSelector-IS48NNS1.js";
const w = {
  key: 0,
  class: "loading-overlay"
}, E = {
  key: 0,
  class: "loading-content"
}, I = ["src"], O = { class: "loading-text mt-3" }, V = /* @__PURE__ */ g({
  __name: "LoadingOverlay",
  setup(b, { expose: p }) {
    const { t: l } = k(), c = C(), t = s(!1), n = s(!1), i = s(l("common.loading"));
    let e = null;
    return p({
      show: (m) => {
        i.value = m || l("common.loading"), t.value = !0, e = setTimeout(() => {
          n.value = !0;
        }, x);
      },
      hide: () => {
        e && (clearTimeout(e), e = null), n.value = !1, t.value = !1;
      }
    }), (m, S) => {
      const v = h("v-progress-circular");
      return o(), y(u, { name: "fade" }, {
        default: d(() => [
          t.value ? (o(), a("div", w, [
            _(u, { name: "fade-delayed" }, {
              default: d(() => [
                n.value ? (o(), a("div", E, [
                  f(c).currentLogo ? (o(), a("img", {
                    key: 0,
                    src: f(c).currentLogo,
                    alt: "Logo",
                    class: "loading-logo mb-4"
                  }, null, 8, I)) : r("", !0),
                  _(v, {
                    indeterminate: "",
                    color: "primary",
                    size: 30,
                    width: 5
                  }),
                  L("div", O, T(i.value), 1)
                ])) : r("", !0)
              ]),
              _: 1
            })
          ])) : r("", !0)
        ]),
        _: 1
      });
    };
  }
}), j = /* @__PURE__ */ N(V, [["__scopeId", "data-v-7fa56b75"]]);
export {
  j as L
};
//# sourceMappingURL=LoadingOverlay-C3rZd3ZV.js.map

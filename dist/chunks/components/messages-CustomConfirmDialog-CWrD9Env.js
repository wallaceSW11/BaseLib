import { defineComponent as V, ref as e, resolveComponent as D, createBlock as B, openBlock as s, Teleport as E, createVNode as r, Transition as I, withCtx as i, createElementBlock as v, createCommentVNode as _, withModifiers as M, createElementVNode as l, createTextVNode as f, toDisplayString as u } from "vue";
import { useI18n as O } from "vue-i18n";
import { _ as P } from "./LanguageSelector-IS48NNS1.js";
const z = { class: "custom-dialog-container" }, S = { class: "custom-dialog-card" }, Y = {
  key: 0,
  class: "custom-dialog-header"
}, j = { class: "custom-dialog-title" }, q = {
  key: 1,
  class: "custom-dialog-body"
}, A = { class: "custom-dialog-actions" }, F = /* @__PURE__ */ V({
  __name: "CustomConfirmDialog",
  setup(G, { expose: N }) {
    const { t: p } = O(), a = e(!1), m = e(""), d = e(""), C = e(!0), g = e(""), h = e(""), x = e("primary"), y = e("grey");
    let t = null;
    const b = () => {
      t && t(!0), a.value = !1;
    }, k = () => {
      t && t(!1), a.value = !1;
    }, w = () => {
      C.value || k();
    };
    return N({
      ConfirmDialog: (T, c, o) => (m.value = T, d.value = c, C.value = o?.persistent ?? !0, g.value = o?.confirmText || p("common.yes"), h.value = o?.cancelText || p("common.no"), x.value = o?.confirmColor || "primary", y.value = o?.cancelColor || "grey", a.value = !0, new Promise((n) => {
        t = n;
      }))
    }), (T, c) => {
      const o = D("v-icon"), n = D("v-btn");
      return s(), B(E, { to: "body" }, [
        r(I, { name: "dialog-fade" }, {
          default: i(() => [
            a.value ? (s(), v("div", {
              key: 0,
              class: "custom-dialog-overlay",
              onClick: M(w, ["self"])
            }, [
              l("div", z, [
                l("div", S, [
                  m.value ? (s(), v("div", Y, [
                    r(o, {
                      class: "custom-dialog-icon",
                      color: "warning",
                      size: "28"
                    }, {
                      default: i(() => [...c[0] || (c[0] = [
                        f(" mdi-help-circle ", -1)
                      ])]),
                      _: 1
                    }),
                    l("h2", j, u(m.value), 1)
                  ])) : _("", !0),
                  d.value ? (s(), v("div", q, [
                    l("p", null, u(d.value), 1)
                  ])) : _("", !0),
                  l("div", A, [
                    r(n, {
                      color: y.value,
                      variant: "text",
                      class: "text-none",
                      onClick: k
                    }, {
                      default: i(() => [
                        f(u(h.value), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    r(n, {
                      color: x.value,
                      variant: "elevated",
                      class: "text-none",
                      onClick: b
                    }, {
                      default: i(() => [
                        f(u(g.value), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ])
                ])
              ])
            ])) : _("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}), Q = /* @__PURE__ */ P(F, [["__scopeId", "data-v-120c0a93"]]);
export {
  Q as C
};
//# sourceMappingURL=messages-CustomConfirmDialog-CWrD9Env.js.map

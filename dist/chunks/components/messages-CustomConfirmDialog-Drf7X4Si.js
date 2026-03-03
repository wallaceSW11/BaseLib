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
    const { t: p } = O(), a = e(!1), d = e(""), m = e(""), C = e(!0), g = e(""), h = e(""), y = e("primary"), x = e("secondary");
    let t = null;
    const b = () => {
      t && t(!0), a.value = !1;
    }, k = () => {
      t && t(!1), a.value = !1;
    }, w = () => {
      C.value || k();
    };
    return N({
      ConfirmDialog: (T, c, o) => (d.value = T, m.value = c, C.value = o?.persistent ?? !0, g.value = o?.confirmText || p("common.yes"), h.value = o?.cancelText || p("common.no"), y.value = o?.confirmColor || "primary", x.value = o?.cancelColor || "secondary", a.value = !0, new Promise((n) => {
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
                  d.value ? (s(), v("div", Y, [
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
                    l("h2", j, u(d.value), 1)
                  ])) : _("", !0),
                  m.value ? (s(), v("div", q, [
                    l("p", null, u(m.value), 1)
                  ])) : _("", !0),
                  l("div", A, [
                    r(n, {
                      color: x.value,
                      variant: "outlined",
                      class: "text-none",
                      onClick: k
                    }, {
                      default: i(() => [
                        f(u(h.value), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    r(n, {
                      color: y.value,
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
}), Q = /* @__PURE__ */ P(F, [["__scopeId", "data-v-0e427c38"]]);
export {
  Q as C
};
//# sourceMappingURL=messages-CustomConfirmDialog-Drf7X4Si.js.map

import { defineComponent as b, ref as B, watch as g, onMounted as D, onUnmounted as N, resolveComponent as c, createBlock as m, openBlock as f, withCtx as i, createVNode as p, createCommentVNode as h, createElementVNode as T, createTextVNode as y, toDisplayString as v, renderSlot as I, createElementBlock as L, Fragment as O, renderList as M } from "vue";
const S = /* @__PURE__ */ b({
  __name: "ModalBase",
  props: {
    modelValue: { type: Boolean },
    title: { default: void 0 },
    message: { default: "" },
    maxWidth: { default: 500 },
    persistent: { type: Boolean, default: !0 },
    actions: { default: () => [] },
    contentClass: { default: void 0 },
    fullscreen: { type: Boolean, default: !1 },
    titleIcon: { default: void 0 }
  },
  emits: ["update:modelValue", "close"],
  setup(o, { emit: x }) {
    const n = o, _ = x, s = B(n.modelValue);
    g(() => n.modelValue, (e) => {
      s.value = e;
    }), g(s, (e) => {
      _("update:modelValue", e);
    });
    const d = async (e) => {
      e.handler && await e.handler();
    }, w = (e) => {
      if (n.actions.length !== 0) {
        if (e.key === "Escape") {
          const t = n.actions.find(
            (a) => a.color === "secondary" || a.color === "error"
          );
          t && (e.preventDefault(), e.stopPropagation(), d(t));
        }
        if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
          if (e.target.tagName === "TEXTAREA") return;
          const a = n.actions.find(
            (l) => l.color === "primary" || !l.color && n.actions.indexOf(l) === n.actions.length - 1
          );
          a && (e.preventDefault(), e.stopPropagation(), d(a));
        }
      }
    };
    return D(() => {
      const e = (t) => {
        if (!(!s.value || n.actions.length === 0)) {
          if (t.key === "Escape" && !n.persistent) {
            const a = n.actions.find(
              (l) => l.color === "secondary" || l.color === "error"
            );
            a && (t.preventDefault(), d(a));
          }
          if (t.key === "Enter" && !t.shiftKey && !t.ctrlKey && !t.altKey) {
            if (t.target.tagName === "TEXTAREA") return;
            const l = n.actions.find(
              (u) => u.color === "primary" || !u.color && n.actions.indexOf(u) === n.actions.length - 1
            );
            l && (t.preventDefault(), d(l));
          }
        }
      };
      window.addEventListener("keydown", e), N(() => {
        window.removeEventListener("keydown", e);
      });
    }), (e, t) => {
      const a = c("v-icon"), l = c("v-card-title"), u = c("v-card-text"), k = c("v-spacer"), E = c("v-btn"), V = c("v-card-actions"), A = c("v-card"), K = c("v-dialog");
      return f(), m(K, {
        modelValue: s.value,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => s.value = r),
        "max-width": o.maxWidth,
        persistent: o.persistent,
        attach: "body",
        "content-class": o.contentClass,
        fullscreen: o.fullscreen,
        scrollable: "",
        "z-index": 2400,
        onKeydown: w
      }, {
        default: i(() => [
          p(A, null, {
            default: i(() => [
              o.title ? (f(), m(l, {
                key: 0,
                class: "text-h5 d-flex align-center px-6 pt-6",
                style: { "word-break": "break-word", "white-space": "normal" }
              }, {
                default: i(() => [
                  o.titleIcon ? (f(), m(a, {
                    key: 0,
                    class: "mr-2"
                  }, {
                    default: i(() => [
                      y(v(o.titleIcon), 1)
                    ]),
                    _: 1
                  })) : h("", !0),
                  T("span", null, v(o.title), 1)
                ]),
                _: 1
              })) : h("", !0),
              p(u, { class: "px-6 pt-4" }, {
                default: i(() => [
                  I(e.$slots, "default", {}, () => [
                    y(v(o.message), 1)
                  ])
                ]),
                _: 3
              }),
              p(V, null, {
                default: i(() => [
                  p(k),
                  (f(!0), L(O, null, M(o.actions, (r, C) => (f(), m(E, {
                    key: C,
                    color: r.color || "primary",
                    "prepend-icon": r.icon,
                    variant: r.variant || "text",
                    type: "button",
                    class: "text-none",
                    onClick: (P) => d(r)
                  }, {
                    default: i(() => [
                      y(v(r.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "prepend-icon", "variant", "onClick"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["modelValue", "max-width", "persistent", "content-class", "fullscreen"]);
    };
  }
});
export {
  S as _
};
//# sourceMappingURL=modals-ModalBase-C2iRr0Xc.js.map

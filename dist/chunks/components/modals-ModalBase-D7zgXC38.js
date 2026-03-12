import { defineComponent as T, computed as D, ref as N, watch as h, onMounted as $, onUnmounted as I, resolveComponent as c, createBlock as f, openBlock as m, withCtx as s, createVNode as p, createCommentVNode as x, createElementVNode as L, createTextVNode as y, toDisplayString as v, renderSlot as O, createElementBlock as M, Fragment as P, renderList as R } from "vue";
import { useTheme as S } from "vuetify";
const z = /* @__PURE__ */ T({
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
  setup(o, { emit: w }) {
    const k = S(), g = D(() => `v-theme--${k.global.name.value}`), n = o, _ = w, i = N(n.modelValue);
    h(() => n.modelValue, (e) => {
      i.value = e;
    }), h(i, (e) => {
      _("update:modelValue", e);
    });
    const d = async (e) => {
      e.handler && await e.handler();
    }, E = (e) => {
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
    return $(() => {
      const e = (t) => {
        if (!(!i.value || n.actions.length === 0)) {
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
      window.addEventListener("keydown", e), I(() => {
        window.removeEventListener("keydown", e);
      });
    }), (e, t) => {
      const a = c("v-icon"), l = c("v-card-title"), u = c("v-card-text"), V = c("v-spacer"), C = c("v-btn"), A = c("v-card-actions"), K = c("v-card"), b = c("v-dialog");
      return m(), f(b, {
        modelValue: i.value,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => i.value = r),
        "max-width": o.maxWidth,
        persistent: o.persistent,
        "content-class": o.contentClass ? `${g.value} ${o.contentClass}` : g.value,
        fullscreen: o.fullscreen,
        scrollable: "",
        "z-index": 2400,
        onKeydown: E
      }, {
        default: s(() => [
          p(K, null, {
            default: s(() => [
              o.title ? (m(), f(l, {
                key: 0,
                class: "text-h5 d-flex align-center px-6 pt-6",
                style: { "word-break": "break-word", "white-space": "normal" }
              }, {
                default: s(() => [
                  o.titleIcon ? (m(), f(a, {
                    key: 0,
                    class: "mr-2"
                  }, {
                    default: s(() => [
                      y(v(o.titleIcon), 1)
                    ]),
                    _: 1
                  })) : x("", !0),
                  L("span", null, v(o.title), 1)
                ]),
                _: 1
              })) : x("", !0),
              p(u, { class: "px-6 pt-4" }, {
                default: s(() => [
                  O(e.$slots, "default", {}, () => [
                    y(v(o.message), 1)
                  ])
                ]),
                _: 3
              }),
              p(A, null, {
                default: s(() => [
                  p(V),
                  (m(!0), M(P, null, R(o.actions, (r, B) => (m(), f(C, {
                    key: B,
                    color: r.color || "primary",
                    "prepend-icon": r.icon,
                    variant: r.variant || "text",
                    type: "button",
                    class: "text-none",
                    onClick: (U) => d(r)
                  }, {
                    default: s(() => [
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
  z as _
};
//# sourceMappingURL=modals-ModalBase-D7zgXC38.js.map

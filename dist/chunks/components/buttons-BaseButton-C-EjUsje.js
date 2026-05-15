import { defineComponent as d, resolveComponent as i, createBlock as c, openBlock as r, mergeProps as s, withCtx as f, renderSlot as u, createTextVNode as p, toDisplayString as m } from "vue";
const v = /* @__PURE__ */ d({
  __name: "BaseButton",
  props: {
    prependIcon: { default: void 0 },
    appendIcon: { default: void 0 },
    text: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    color: { default: "primary" },
    variant: { default: "elevated" },
    size: { default: "default" },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = n, o = (t) => {
      a("click", t);
    };
    return (t, b) => {
      const l = i("v-btn");
      return r(), c(l, s({
        "prepend-icon": e.prependIcon,
        "append-icon": e.appendIcon,
        disabled: e.disabled,
        loading: e.loading,
        color: e.color,
        variant: e.variant,
        size: e.size,
        block: e.block,
        class: "text-none"
      }, t.$attrs, { onClick: o }), {
        default: f(() => [
          u(t.$slots, "default", {}, () => [
            p(m(e.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["prepend-icon", "append-icon", "disabled", "loading", "color", "variant", "size", "block"]);
    };
  }
});
export {
  v as _
};
//# sourceMappingURL=buttons-BaseButton-C-EjUsje.js.map

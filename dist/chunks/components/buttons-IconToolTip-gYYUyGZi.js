import { defineComponent as r, resolveComponent as e, createBlock as d, openBlock as m, withCtx as s, createVNode as u, mergeProps as p } from "vue";
const f = /* @__PURE__ */ r({
  __name: "IconToolTip",
  props: {
    icon: {},
    text: { default: void 0 },
    tooltip: { default: void 0 },
    color: { default: "primary" },
    asButton: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (n, o) => {
      const i = e("v-btn"), l = e("v-tooltip");
      return m(), d(l, {
        text: t.tooltip ?? t.text,
        location: "top",
        disabled: !(t.tooltip ?? t.text)
      }, {
        activator: s(({ props: a }) => [
          u(i, p(a, {
            icon: t.icon,
            color: t.color,
            variant: t.asButton ? "text" : "plain",
            density: t.asButton ? "default" : "compact",
            onClick: o[0] || (o[0] = (c) => n.$emit("click", c))
          }), null, 16, ["icon", "color", "variant", "density"])
        ]),
        _: 1
      }, 8, ["text", "disabled"]);
    };
  }
});
export {
  f as _
};
//# sourceMappingURL=buttons-IconToolTip-gYYUyGZi.js.map

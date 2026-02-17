import { defineComponent as s, resolveComponent as e, createBlock as r, openBlock as d, withCtx as m, createVNode as p, mergeProps as u } from "vue";
const x = /* @__PURE__ */ s({
  __name: "IconToolTip",
  props: {
    icon: {},
    text: { default: void 0 },
    asButton: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (n, o) => {
      const i = e("v-btn"), a = e("v-tooltip");
      return d(), r(a, {
        text: t.text,
        location: "top",
        disabled: !t.text
      }, {
        activator: m(({ props: c }) => [
          p(i, u(c, {
            icon: t.icon,
            variant: t.asButton ? "text" : "plain",
            density: t.asButton ? "default" : "compact",
            onClick: o[0] || (o[0] = (l) => n.$emit("click", l))
          }), null, 16, ["icon", "variant", "density"])
        ]),
        _: 1
      }, 8, ["text", "disabled"]);
    };
  }
});
export {
  x as _
};
//# sourceMappingURL=buttons-IconToolTip-Dbe7ijX5.js.map

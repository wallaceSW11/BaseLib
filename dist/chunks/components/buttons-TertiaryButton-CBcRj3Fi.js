import { defineComponent as n, createBlock as r, openBlock as p, mergeProps as a, withCtx as i, renderSlot as l } from "vue";
import { _ as s } from "./buttons-BaseButton-C-EjUsje.js";
const f = /* @__PURE__ */ n({
  __name: "TertiaryButton",
  props: {
    prependIcon: {},
    appendIcon: {},
    text: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    size: {},
    block: { type: Boolean }
  },
  emits: ["click"],
  setup(c) {
    return (o, e) => (p(), r(s, a({
      color: "info",
      variant: "flat"
    }, o.$props, {
      onClick: e[0] || (e[0] = (t) => o.$emit("click", t))
    }), {
      default: i(() => [
        l(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  f as _
};
//# sourceMappingURL=buttons-TertiaryButton-CBcRj3Fi.js.map

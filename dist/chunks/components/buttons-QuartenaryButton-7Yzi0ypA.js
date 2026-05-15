import { defineComponent as n, createBlock as r, openBlock as p, mergeProps as a, withCtx as i, renderSlot as l } from "vue";
import { _ as s } from "./buttons-BaseButton-C-EjUsje.js";
const _ = /* @__PURE__ */ n({
  __name: "QuartenaryButton",
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
    return (e, o) => (p(), r(s, a({
      color: "warning",
      variant: "text"
    }, e.$props, {
      onClick: o[0] || (o[0] = (t) => e.$emit("click", t))
    }), {
      default: i(() => [
        l(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _
};
//# sourceMappingURL=buttons-QuartenaryButton-7Yzi0ypA.js.map

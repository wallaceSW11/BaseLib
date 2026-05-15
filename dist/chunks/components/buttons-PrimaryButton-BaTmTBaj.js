import { defineComponent as t, createBlock as n, openBlock as p, mergeProps as a, withCtx as i, renderSlot as l } from "vue";
import { _ as s } from "./buttons-BaseButton-C-EjUsje.js";
const _ = /* @__PURE__ */ t({
  __name: "PrimaryButton",
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
  setup(m) {
    return (e, o) => (p(), n(s, a({
      color: "primary",
      variant: "elevated"
    }, e.$props, {
      onClick: o[0] || (o[0] = (r) => e.$emit("click", r))
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
//# sourceMappingURL=buttons-PrimaryButton-BaTmTBaj.js.map

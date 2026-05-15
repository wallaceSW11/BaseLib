import { defineComponent as t, createBlock as r, openBlock as p, mergeProps as a, withCtx as l, renderSlot as i } from "vue";
import { _ as s } from "./buttons-BaseButton-C-EjUsje.js";
const _ = /* @__PURE__ */ t({
  __name: "SecondaryButton",
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
      color: "secondary",
      variant: "outlined"
    }, o.$props, {
      onClick: e[0] || (e[0] = (n) => o.$emit("click", n))
    }), {
      default: l(() => [
        i(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _
};
//# sourceMappingURL=buttons-SecondaryButton-DnTTGtbG.js.map

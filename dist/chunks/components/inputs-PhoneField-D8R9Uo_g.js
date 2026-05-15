import { defineComponent as v, computed as l, resolveComponent as o, withDirectives as h, createBlock as k, openBlock as b, createSlots as V, withCtx as n, createVNode as y, createTextVNode as $, toDisplayString as g, renderSlot as i, unref as w } from "vue";
import { O as B, k as C } from "./inputs-CepField-BsWHPICW.js";
const N = /* @__PURE__ */ v({
  __name: "PhoneField",
  props: {
    modelValue: { default: "" },
    label: { default: "Phone" },
    rules: { default: () => [] },
    disabled: { type: Boolean },
    hint: { default: "" },
    icon: { default: "mdi-phone-outline" },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const a = e, s = d, r = new B({ mask: ["(##) ####-####", "(##) #####-####"], eager: !0 }), u = l(() => r.masked(a.modelValue ?? "")), m = l(() => !!a.hint), p = {
      mask: ["(##) ####-####", "(##) #####-####"],
      eager: !0,
      onMaska: (t) => {
        s("update:modelValue", t.unmasked);
      }
    };
    return (t, S) => {
      const c = o("v-icon"), f = o("v-text-field");
      return h((b(), k(f, {
        "model-value": u.value,
        label: e.label,
        rules: e.rules,
        disabled: e.disabled,
        hint: e.hint,
        "persistent-hint": m.value,
        variant: e.variant,
        inputmode: "tel",
        autocomplete: "tel"
      }, V({
        "prepend-inner": n(() => [
          y(c, null, {
            default: n(() => [
              $(g(e.icon), 1)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        t.$slots.prepend ? {
          name: "prepend",
          fn: n(() => [
            i(t.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        t.$slots.append ? {
          name: "append",
          fn: n(() => [
            i(t.$slots, "append")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant"])), [
        [w(C), p]
      ]);
    };
  }
});
export {
  N as _
};
//# sourceMappingURL=inputs-PhoneField-D8R9Uo_g.js.map

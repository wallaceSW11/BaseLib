import { defineComponent as c, computed as f, resolveComponent as a, withDirectives as v, createBlock as h, openBlock as k, createSlots as b, withCtx as n, createVNode as V, createTextVNode as y, toDisplayString as $, renderSlot as l, unref as g } from "vue";
import { O as w, k as B } from "./inputs-CepField-DwNeO2Ij.js";
const D = /* @__PURE__ */ c({
  __name: "PhoneField",
  props: {
    modelValue: { default: "" },
    label: { default: "Phone" },
    rules: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    hint: { default: "" },
    icon: { default: "mdi-phone-outline" },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const d = e, i = o, s = new w({ mask: ["(##) ####-####", "(##) #####-####"], eager: !0 }), u = f(() => s.masked(d.modelValue ?? "")), r = {
      mask: ["(##) ####-####", "(##) #####-####"],
      eager: !0,
      onMaska: (t) => {
        i("update:modelValue", t.unmasked);
      }
    };
    return (t, C) => {
      const m = a("v-icon"), p = a("v-text-field");
      return v((k(), h(p, {
        "model-value": u.value,
        label: e.label,
        rules: e.rules,
        disabled: e.disabled,
        hint: e.hint,
        "persistent-hint": !!e.hint,
        variant: e.variant,
        inputmode: "tel",
        autocomplete: "tel"
      }, b({
        "prepend-inner": n(() => [
          V(m, null, {
            default: n(() => [
              y($(e.icon), 1)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        t.$slots.prepend ? {
          name: "prepend",
          fn: n(() => [
            l(t.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        t.$slots.append ? {
          name: "append",
          fn: n(() => [
            l(t.$slots, "append")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant"])), [
        [g(B), r]
      ]);
    };
  }
});
export {
  D as _
};
//# sourceMappingURL=inputs-PhoneField-Cn9kHhay.js.map

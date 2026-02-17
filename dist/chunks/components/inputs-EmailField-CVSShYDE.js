import { defineComponent as B, ref as f, getCurrentInstance as $, computed as M, watch as m, resolveComponent as p, createBlock as E, openBlock as C, createSlots as k, withCtx as u, renderSlot as g, createVNode as x, createTextVNode as z, toDisplayString as A } from "vue";
const H = /* @__PURE__ */ B({
  __name: "EmailField",
  props: {
    modelValue: { default: "" },
    label: { default: "Email" },
    rules: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    hint: { default: "" },
    persistentHint: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    validateOnBlur: { type: Boolean, default: !0 },
    requiredMessage: { default: "" },
    invalidMessage: { default: "" },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue", "valid"],
  setup(l, { emit: q }) {
    const t = l, s = q, i = f(t.modelValue), n = f(!1), h = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, v = $()?.appContext.config.globalProperties.$i18n;
    function c(e, a) {
      if (e === "required" && t.requiredMessage) return t.requiredMessage;
      if (e === "invalid" && t.invalidMessage) return t.invalidMessage;
      if (v)
        try {
          const d = `validation.${e === "required" ? "required" : "invalidEmail"}`, r = v.global?.t?.(d) || v.t?.(d);
          if (r && typeof r == "string" && !r.startsWith("validation."))
            return r;
        } catch {
        }
      return a;
    }
    function o(e) {
      return !e && !t.required ? !0 : !e && t.required ? c("required", "Email is required") : h.test(e) ? !0 : c("invalid", "Invalid email format");
    }
    const V = M(() => [o, ...t.rules]);
    function b() {
      const e = o(i.value);
      n.value = e === !0, s("valid", n.value);
    }
    return m(i, (e) => {
      if (s("update:modelValue", e), !t.validateOnBlur) {
        const a = o(e);
        n.value = a === !0, s("valid", n.value);
      }
    }), m(() => t.modelValue, (e) => {
      i.value = e || "";
      const a = o(i.value);
      n.value = a === !0;
    }), (e, a) => {
      const d = p("v-icon"), r = p("v-text-field");
      return C(), E(r, {
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (y) => i.value = y),
        label: l.label,
        rules: V.value,
        disabled: l.disabled,
        hint: l.hint,
        "persistent-hint": l.persistentHint,
        required: l.required,
        variant: l.variant,
        type: "email",
        inputmode: "email",
        autocomplete: "email",
        onBlur: b
      }, k({ _: 2 }, [
        e.$slots.prepend ? {
          name: "prepend",
          fn: u(() => [
            g(e.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        e.$slots.append ? {
          name: "append",
          fn: u(() => [
            g(e.$slots, "append")
          ]),
          key: "1"
        } : void 0,
        e.$slots.prepend ? void 0 : {
          name: "prepend-inner",
          fn: u(() => [
            x(d, {
              color: n.value ? "success" : void 0
            }, {
              default: u(() => [
                z(" mdi-email" + A(n.value ? "-check" : "-outline"), 1)
              ]),
              _: 1
            }, 8, ["color"])
          ]),
          key: "2"
        }
      ]), 1032, ["modelValue", "label", "rules", "disabled", "hint", "persistent-hint", "required", "variant"]);
    };
  }
});
export {
  H as _
};
//# sourceMappingURL=inputs-EmailField-CVSShYDE.js.map

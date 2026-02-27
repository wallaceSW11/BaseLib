import { defineComponent as B, ref as c, getCurrentInstance as $, computed as x, watch as f, resolveComponent as p, createBlock as M, openBlock as E, createSlots as C, withCtx as u, renderSlot as g, createVNode as k, createTextVNode as z, toDisplayString as A } from "vue";
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
    variant: { default: "underlined" },
    maxlength: { default: 100 }
  },
  emits: ["update:modelValue", "valid"],
  setup(a, { emit: h }) {
    const t = a, s = h, i = c(t.modelValue), n = c(!1), q = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, m = $()?.appContext.config.globalProperties.$i18n;
    function v(e, l) {
      if (e === "required" && t.requiredMessage) return t.requiredMessage;
      if (e === "invalid" && t.invalidMessage) return t.invalidMessage;
      if (m)
        try {
          const d = `validation.${e === "required" ? "required" : "invalidEmail"}`, r = m.global?.t?.(d) || m.t?.(d);
          if (r && typeof r == "string" && !r.startsWith("validation."))
            return r;
        } catch {
        }
      return l;
    }
    function o(e) {
      return !e && !t.required ? !0 : !e && t.required ? v("required", "Email is required") : q.test(e) ? !0 : v("invalid", "Invalid email format");
    }
    const V = x(() => [o, ...t.rules]);
    function b() {
      const e = o(i.value);
      n.value = e === !0, s("valid", n.value);
    }
    return f(i, (e) => {
      if (s("update:modelValue", e), !t.validateOnBlur) {
        const l = o(e);
        n.value = l === !0, s("valid", n.value);
      }
    }), f(() => t.modelValue, (e) => {
      i.value = e || "";
      const l = o(i.value);
      n.value = l === !0;
    }), (e, l) => {
      const d = p("v-icon"), r = p("v-text-field");
      return E(), M(r, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (y) => i.value = y),
        label: a.label,
        rules: V.value,
        disabled: a.disabled,
        hint: a.hint,
        "persistent-hint": a.persistentHint,
        required: a.required,
        variant: a.variant,
        maxlength: a.maxlength,
        type: "email",
        inputmode: "email",
        autocomplete: "email",
        onBlur: b
      }, C({ _: 2 }, [
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
            k(d, {
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
      ]), 1032, ["modelValue", "label", "rules", "disabled", "hint", "persistent-hint", "required", "variant", "maxlength"]);
    };
  }
});
export {
  H as _
};
//# sourceMappingURL=inputs-EmailField-D2uAsb2O.js.map

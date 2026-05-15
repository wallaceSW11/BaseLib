import { defineComponent as k, ref as p, computed as o, watch as h, resolveComponent as g, createBlock as C, openBlock as O, createSlots as z, withCtx as u, renderSlot as q, createVNode as A, createTextVNode as I, toDisplayString as S } from "vue";
import { useI18n as Z } from "vue-i18n";
const H = /* @__PURE__ */ k({
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
  setup(a, { emit: V }) {
    const t = a, s = V, B = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    let r;
    try {
      const { t: e } = Z();
      r = e;
    } catch {
      r = void 0;
    }
    const n = p(t.modelValue), d = p(!1), y = o(() => !!t.hint), b = o(() => d.value ? "mdi-email-check" : "mdi-email-outline"), x = o(() => d.value ? "success" : void 0);
    function m(e, l) {
      if (e === "required" && t.requiredMessage) return t.requiredMessage;
      if (e === "invalid" && t.invalidMessage) return t.invalidMessage;
      if (!r) return l;
      const i = r(e === "required" ? "validation.required" : "validation.invalidEmail");
      return i && !i.startsWith("validation.") ? i : l;
    }
    function v(e) {
      return e ? B.test(e) ? !0 : m("invalid", "Invalid email format") : t.required ? m("required", "Email is required") : !0;
    }
    function f(e) {
      const l = v(e);
      d.value = l === !0, s("valid", d.value);
    }
    const M = o(() => [v, ...t.rules]);
    function $() {
      t.validateOnBlur && f(n.value);
    }
    return h(n, (e) => {
      s("update:modelValue", e), t.validateOnBlur || f(e);
    }), h(() => t.modelValue, (e) => {
      n.value = e;
    }), (e, l) => {
      const c = g("v-icon"), i = g("v-text-field");
      return O(), C(i, {
        modelValue: n.value,
        "onUpdate:modelValue": l[0] || (l[0] = (E) => n.value = E),
        label: a.label,
        rules: M.value,
        disabled: a.disabled,
        hint: a.hint,
        "persistent-hint": y.value,
        required: a.required,
        variant: a.variant,
        maxlength: a.maxlength,
        type: "email",
        inputmode: "email",
        autocomplete: "email",
        onBlur: $
      }, z({ _: 2 }, [
        e.$slots.prepend ? {
          name: "prepend",
          fn: u(() => [
            q(e.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        e.$slots.append ? {
          name: "append",
          fn: u(() => [
            q(e.$slots, "append")
          ]),
          key: "1"
        } : void 0,
        e.$slots.prepend ? void 0 : {
          name: "prepend-inner",
          fn: u(() => [
            A(c, { color: x.value }, {
              default: u(() => [
                I(S(b.value), 1)
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
//# sourceMappingURL=inputs-EmailField-GSslb9wC.js.map

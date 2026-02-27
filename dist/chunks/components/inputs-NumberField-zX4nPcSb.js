import { defineComponent as V, ref as D, watch as P, resolveComponent as x, createBlock as I, openBlock as B, createSlots as F, withCtx as v, renderSlot as g, nextTick as c } from "vue";
import { _ as S } from "./LanguageSelector-IS48NNS1.js";
const K = /* @__PURE__ */ V({
  __name: "NumberField",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rules: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    hint: { default: "" },
    persistentHint: { type: Boolean, default: !1 },
    decimalPlaces: { default: 0 },
    locale: { default: "pt-BR" },
    allowNegative: { type: Boolean, default: !0 },
    variant: { default: "underlined" },
    maxlength: { default: 999e6 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: h }) {
    const l = s, d = h, u = D("0");
    function r(e) {
      const n = Math.abs(e).toLocaleString(l.locale, {
        minimumFractionDigits: l.decimalPlaces,
        maximumFractionDigits: l.decimalPlaces
      });
      return e < 0 ? "-" + n : n;
    }
    function p(e) {
      const t = e.includes("-"), n = e.replace(/\D/g, "");
      if (!n) return 0;
      let m;
      if (l.decimalPlaces === 0)
        m = parseInt(n);
      else {
        const i = Math.pow(10, l.decimalPlaces);
        m = parseInt(n) / i;
      }
      const o = Number(m.toFixed(l.decimalPlaces));
      return t && l.allowNegative ? -o : o;
    }
    function b(e) {
      const t = p(e);
      d("update:modelValue", t), c(() => {
        u.value = r(t);
      });
    }
    function w(e) {
      const t = e.target;
      c(() => {
        !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function N(e) {
      const t = e.target;
      c(() => {
        !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function y(e) {
      const t = e.target;
      if (!t) return;
      const n = u.value;
      if (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(e.key) || e.ctrlKey || e.metaKey) {
        if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
          const o = n.replace(/\D/g, "");
          if (o.length > 0) {
            const i = o.slice(0, -1);
            let a;
            if (!i)
              a = 0;
            else if (l.decimalPlaces === 0)
              a = parseInt(i);
            else {
              const f = Math.pow(10, l.decimalPlaces);
              a = parseInt(i) / f;
            }
            n.startsWith("-") && l.allowNegative && a !== 0 && (a = -a), d("update:modelValue", a), u.value = r(a), c(() => {
              !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
            });
          }
        }
        return;
      }
      if (!/[\d-]/.test(e.key)) {
        e.preventDefault();
        return;
      }
      if (e.preventDefault(), e.key === "-" && l.allowNegative) {
        const i = -p(n);
        d("update:modelValue", i), u.value = r(i);
      } else if (e.key !== "-") {
        const i = n.replace(/\D/g, "") + e.key;
        let a;
        if (l.decimalPlaces === 0)
          a = parseInt(i);
        else {
          const f = Math.pow(10, l.decimalPlaces);
          a = parseInt(i) / f;
        }
        n.startsWith("-") && l.allowNegative && (a = -a), d("update:modelValue", a), u.value = r(a);
      }
      c(() => {
        !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    return P(
      () => l.modelValue,
      (e) => {
        const t = e ?? 0;
        u.value = r(t);
      },
      { immediate: !0 }
    ), (e, t) => {
      const n = x("v-text-field");
      return B(), I(n, {
        "model-value": u.value,
        "onUpdate:modelValue": b,
        label: s.label,
        rules: s.rules,
        disabled: s.disabled,
        hint: s.hint,
        "persistent-hint": s.persistentHint,
        variant: s.variant,
        maxlength: s.maxlength,
        onFocus: w,
        onClick: N,
        onKeydown: y,
        inputmode: "decimal"
      }, F({ _: 2 }, [
        e.$slots.prepend ? {
          name: "prepend",
          fn: v(() => [
            g(e.$slots, "prepend", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        e.$slots.append ? {
          name: "append",
          fn: v(() => [
            g(e.$slots, "append", {}, void 0, !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant", "maxlength"]);
    };
  }
}), M = /* @__PURE__ */ S(K, [["__scopeId", "data-v-bfe15e2f"]]);
export {
  M as N
};
//# sourceMappingURL=inputs-NumberField-zX4nPcSb.js.map

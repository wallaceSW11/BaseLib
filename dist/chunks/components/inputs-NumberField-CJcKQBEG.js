import { defineComponent as V, ref as D, watch as P, resolveComponent as I, createBlock as B, openBlock as F, createSlots as S, withCtx as v, renderSlot as g, nextTick as r } from "vue";
import { _ as K } from "./LanguageSelector-IS48NNS1.js";
const R = /* @__PURE__ */ V({
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
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: h }) {
    const a = s, d = h, o = D("0");
    function c(e) {
      const n = Math.abs(e).toLocaleString(a.locale, {
        minimumFractionDigits: a.decimalPlaces,
        maximumFractionDigits: a.decimalPlaces
      });
      return e < 0 ? "-" + n : n;
    }
    function f(e) {
      const t = e.includes("-"), n = e.replace(/\D/g, "");
      if (!n) return 0;
      let m;
      if (a.decimalPlaces === 0)
        m = parseInt(n);
      else {
        const i = Math.pow(10, a.decimalPlaces);
        m = parseInt(n) / i;
      }
      const u = Number(m.toFixed(a.decimalPlaces));
      return t && a.allowNegative ? -u : u;
    }
    function b(e) {
      const t = f(e);
      d("update:modelValue", t), r(() => {
        o.value = c(t);
      });
    }
    function w(e) {
      const t = e.target;
      r(() => {
        t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function N(e) {
      const t = e.target;
      r(() => {
        t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function y(e) {
      const t = e.target, n = o.value;
      if (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(e.key) || e.ctrlKey || e.metaKey) {
        if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
          const u = n.replace(/\D/g, "");
          if (u.length > 0) {
            const i = u.slice(0, -1);
            let l;
            if (!i)
              l = 0;
            else if (a.decimalPlaces === 0)
              l = parseInt(i);
            else {
              const p = Math.pow(10, a.decimalPlaces);
              l = parseInt(i) / p;
            }
            n.startsWith("-") && a.allowNegative && l !== 0 && (l = -l), d("update:modelValue", l), o.value = c(l), r(() => {
              t.setSelectionRange(t.value.length, t.value.length);
            });
          }
        }
        return;
      }
      if (!/[\d-]/.test(e.key)) {
        e.preventDefault();
        return;
      }
      if (e.preventDefault(), e.key === "-" && a.allowNegative) {
        const i = -f(n);
        d("update:modelValue", i), o.value = c(i);
      } else if (e.key !== "-") {
        const i = n.replace(/\D/g, "") + e.key;
        let l;
        if (a.decimalPlaces === 0)
          l = parseInt(i);
        else {
          const p = Math.pow(10, a.decimalPlaces);
          l = parseInt(i) / p;
        }
        n.startsWith("-") && a.allowNegative && (l = -l), d("update:modelValue", l), o.value = c(l);
      }
      r(() => {
        t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    return P(
      () => a.modelValue,
      (e) => {
        const t = e ?? 0;
        o.value = c(t);
      },
      { immediate: !0 }
    ), (e, t) => {
      const n = I("v-text-field");
      return F(), B(n, {
        "model-value": o.value,
        "onUpdate:modelValue": b,
        label: s.label,
        rules: s.rules,
        disabled: s.disabled,
        hint: s.hint,
        "persistent-hint": s.persistentHint,
        variant: s.variant,
        onFocus: w,
        onClick: N,
        onKeydown: y,
        inputmode: "decimal"
      }, S({ _: 2 }, [
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
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant"]);
    };
  }
}), M = /* @__PURE__ */ K(R, [["__scopeId", "data-v-b5c87239"]]);
export {
  M as N
};
//# sourceMappingURL=inputs-NumberField-CJcKQBEG.js.map

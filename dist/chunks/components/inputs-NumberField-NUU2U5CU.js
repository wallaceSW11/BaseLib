import { defineComponent as V, ref as x, watch as D, resolveComponent as P, createBlock as I, openBlock as B, createSlots as F, withCtx as v, renderSlot as g, nextTick as d } from "vue";
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
    max: { default: 999e6 },
    min: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: h }) {
    const a = u, c = h, o = x("0");
    function r(e) {
      const n = Math.abs(e).toLocaleString(a.locale, {
        minimumFractionDigits: a.decimalPlaces,
        maximumFractionDigits: a.decimalPlaces
      });
      return e < 0 ? "-" + n : n;
    }
    function p(e) {
      const t = e.includes("-"), n = e.replace(/\D/g, "");
      if (!n) return 0;
      let m;
      if (a.decimalPlaces === 0)
        m = parseInt(n);
      else {
        const i = Math.pow(10, a.decimalPlaces);
        m = parseInt(n) / i;
      }
      const s = Number(m.toFixed(a.decimalPlaces));
      return t && a.allowNegative ? -s : s;
    }
    function b(e) {
      const t = p(e);
      c("update:modelValue", t), d(() => {
        o.value = r(t);
      });
    }
    function w(e) {
      const t = e.target;
      d(() => {
        !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function N(e) {
      const t = e.target;
      d(() => {
        !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function y(e) {
      const t = e.target;
      if (!t) return;
      const n = o.value;
      if (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(e.key) || e.ctrlKey || e.metaKey) {
        if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
          const s = n.replace(/\D/g, "");
          if (s.length > 0) {
            const i = s.slice(0, -1);
            let l;
            if (!i)
              l = 0;
            else if (a.decimalPlaces === 0)
              l = parseInt(i);
            else {
              const f = Math.pow(10, a.decimalPlaces);
              l = parseInt(i) / f;
            }
            n.startsWith("-") && a.allowNegative && l !== 0 && (l = -l), c("update:modelValue", l), o.value = r(l), d(() => {
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
      if (e.preventDefault(), e.key === "-" && a.allowNegative) {
        const i = -p(n);
        if (a.min !== void 0 && i < a.min || a.max !== void 0 && i > a.max) return;
        c("update:modelValue", i), o.value = r(i);
      } else if (e.key !== "-") {
        const i = n.replace(/\D/g, "") + e.key;
        let l;
        if (a.decimalPlaces === 0)
          l = parseInt(i);
        else {
          const f = Math.pow(10, a.decimalPlaces);
          l = parseInt(i) / f;
        }
        if (n.startsWith("-") && a.allowNegative && (l = -l), a.max !== void 0 && l > a.max || a.min !== void 0 && l < a.min) return;
        c("update:modelValue", l), o.value = r(l);
      }
      d(() => {
        !t || t.value == null || t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    return D(
      () => a.modelValue,
      (e) => {
        const t = e ?? 0;
        o.value = r(t);
      },
      { immediate: !0 }
    ), (e, t) => {
      const n = P("v-text-field");
      return B(), I(n, {
        "model-value": o.value,
        "onUpdate:modelValue": b,
        label: u.label,
        rules: u.rules,
        disabled: u.disabled,
        hint: u.hint,
        "persistent-hint": u.persistentHint,
        variant: u.variant,
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
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant"]);
    };
  }
}), M = /* @__PURE__ */ S(K, [["__scopeId", "data-v-5bdd33e8"]]);
export {
  M as N
};
//# sourceMappingURL=inputs-NumberField-NUU2U5CU.js.map

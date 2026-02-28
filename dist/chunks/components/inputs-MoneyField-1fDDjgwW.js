import { defineComponent as w, ref as D, watch as R, resolveComponent as $, createBlock as x, openBlock as B, createSlots as S, withCtx as p, renderSlot as v, nextTick as d } from "vue";
import { _ as F } from "./LanguageSelector-IS48NNS1.js";
const C = /* @__PURE__ */ w({
  __name: "MoneyField",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rules: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    hint: { default: "" },
    persistentHint: { type: Boolean, default: !1 },
    currency: { default: "BRL" },
    locale: { default: "pt-BR" },
    variant: { default: "underlined" },
    max: { default: 999e6 },
    min: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: y }) {
    const n = u, m = y, o = D("R$ 0,00");
    function s(t) {
      const e = Math.abs(t), l = g(), i = e.toLocaleString(n.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return t < 0 ? `-${l} ${i}` : `${l} ${i}`;
    }
    function g() {
      return {
        BRL: "R$",
        USD: "$",
        EUR: "€",
        GBP: "£"
      }[n.currency] || n.currency;
    }
    function f(t) {
      const e = t.includes("-"), l = t.replace(/\D/g, "");
      if (!l) return 0;
      const i = parseInt(l) / 100;
      return Number((e ? -i : i).toFixed(2));
    }
    function b(t) {
      const e = f(t);
      m("update:modelValue", e), d(() => {
        o.value = s(e);
      });
    }
    function h(t) {
      const e = t.target;
      d(() => {
        !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
      });
    }
    function k(t) {
      const e = t.target;
      d(() => {
        !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
      });
    }
    function V(t) {
      const e = t.target;
      if (!e) return;
      const l = o.value;
      if (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(t.key) || t.ctrlKey || t.metaKey) {
        if (t.key === "Backspace" || t.key === "Delete") {
          t.preventDefault();
          const c = l.replace(/\D/g, "");
          if (c.length > 0) {
            const a = c.slice(0, -1), r = a ? parseInt(a) / 100 : 0;
            m("update:modelValue", r), o.value = s(r), d(() => {
              !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
            });
          }
        }
        return;
      }
      if (!/[\d-]/.test(t.key)) {
        t.preventDefault();
        return;
      }
      if (t.preventDefault(), t.key === "-") {
        const a = -f(l);
        if (n.min !== void 0 && a < n.min || n.max !== void 0 && a > n.max) return;
        m("update:modelValue", a), o.value = s(a);
      } else {
        const a = l.replace(/\D/g, "") + t.key, r = parseInt(a) / 100;
        if (n.max !== void 0 && r > n.max || n.min !== void 0 && r < n.min) return;
        m("update:modelValue", r), o.value = s(r);
      }
      d(() => {
        !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
      });
    }
    return R(
      () => n.modelValue,
      (t) => {
        const e = t ?? 0;
        o.value = s(e);
      },
      { immediate: !0 }
    ), (t, e) => {
      const l = $("v-text-field");
      return B(), x(l, {
        "model-value": o.value,
        "onUpdate:modelValue": b,
        label: u.label,
        rules: u.rules,
        disabled: u.disabled,
        hint: u.hint,
        "persistent-hint": u.persistentHint,
        variant: u.variant,
        onFocus: h,
        onClick: k,
        onKeydown: V,
        inputmode: "decimal"
      }, S({ _: 2 }, [
        t.$slots.prepend ? {
          name: "prepend",
          fn: p(() => [
            v(t.$slots, "prepend", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        t.$slots.append ? {
          name: "append",
          fn: p(() => [
            v(t.$slots, "append", {}, void 0, !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant"]);
    };
  }
}), M = /* @__PURE__ */ F(C, [["__scopeId", "data-v-cbda10bd"]]);
export {
  M
};
//# sourceMappingURL=inputs-MoneyField-1fDDjgwW.js.map

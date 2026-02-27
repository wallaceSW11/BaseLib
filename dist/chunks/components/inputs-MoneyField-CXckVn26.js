import { defineComponent as w, ref as D, watch as R, resolveComponent as $, createBlock as B, openBlock as S, createSlots as x, withCtx as p, renderSlot as g, nextTick as c } from "vue";
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
    maxlength: { default: 999e6 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: y }) {
    const d = l, m = y, a = D("R$ 0,00");
    function r(t) {
      const e = Math.abs(t), n = h(), o = e.toLocaleString(d.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return t < 0 ? `-${n} ${o}` : `${n} ${o}`;
    }
    function h() {
      return {
        BRL: "R$",
        USD: "$",
        EUR: "€",
        GBP: "£"
      }[d.currency] || d.currency;
    }
    function f(t) {
      const e = t.includes("-"), n = t.replace(/\D/g, "");
      if (!n) return 0;
      const o = parseInt(n) / 100;
      return Number((e ? -o : o).toFixed(2));
    }
    function v(t) {
      const e = f(t);
      m("update:modelValue", e), c(() => {
        a.value = r(e);
      });
    }
    function b(t) {
      const e = t.target;
      c(() => {
        !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
      });
    }
    function k(t) {
      const e = t.target;
      c(() => {
        !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
      });
    }
    function V(t) {
      const e = t.target;
      if (!e) return;
      const n = a.value;
      if (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(t.key) || t.ctrlKey || t.metaKey) {
        if (t.key === "Backspace" || t.key === "Delete") {
          t.preventDefault();
          const s = n.replace(/\D/g, "");
          if (s.length > 0) {
            const u = s.slice(0, -1), i = u ? parseInt(u) / 100 : 0;
            m("update:modelValue", i), a.value = r(i), c(() => {
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
        const u = -f(n);
        m("update:modelValue", u), a.value = r(u);
      } else {
        const u = n.replace(/\D/g, "") + t.key, i = parseInt(u) / 100;
        m("update:modelValue", i), a.value = r(i);
      }
      c(() => {
        !e || e.value == null || e.setSelectionRange(e.value.length, e.value.length);
      });
    }
    return R(
      () => d.modelValue,
      (t) => {
        const e = t ?? 0;
        a.value = r(e);
      },
      { immediate: !0 }
    ), (t, e) => {
      const n = $("v-text-field");
      return S(), B(n, {
        "model-value": a.value,
        "onUpdate:modelValue": v,
        label: l.label,
        rules: l.rules,
        disabled: l.disabled,
        hint: l.hint,
        "persistent-hint": l.persistentHint,
        variant: l.variant,
        maxlength: l.maxlength,
        onFocus: b,
        onClick: k,
        onKeydown: V,
        inputmode: "decimal"
      }, x({ _: 2 }, [
        t.$slots.prepend ? {
          name: "prepend",
          fn: p(() => [
            g(t.$slots, "prepend", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        t.$slots.append ? {
          name: "append",
          fn: p(() => [
            g(t.$slots, "append", {}, void 0, !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant", "maxlength"]);
    };
  }
}), M = /* @__PURE__ */ F(C, [["__scopeId", "data-v-0217cc37"]]);
export {
  M
};
//# sourceMappingURL=inputs-MoneyField-CXckVn26.js.map

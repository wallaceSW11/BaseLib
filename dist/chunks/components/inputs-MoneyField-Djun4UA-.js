import { defineComponent as w, ref as D, watch as R, resolveComponent as $, createBlock as B, openBlock as S, createSlots as F, withCtx as f, renderSlot as y, nextTick as i } from "vue";
import { _ as C } from "./LanguageSelector-IS48NNS1.js";
const I = /* @__PURE__ */ w({
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
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: g }) {
    const d = l, m = g, a = D("R$ 0,00");
    function r(e) {
      const t = Math.abs(e), n = b(), u = t.toLocaleString(d.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return e < 0 ? `-${n} ${u}` : `${n} ${u}`;
    }
    function b() {
      return {
        BRL: "R$",
        USD: "$",
        EUR: "€",
        GBP: "£"
      }[d.currency] || d.currency;
    }
    function p(e) {
      const t = e.includes("-"), n = e.replace(/\D/g, "");
      if (!n) return 0;
      const u = parseInt(n) / 100;
      return Number((t ? -u : u).toFixed(2));
    }
    function h(e) {
      const t = p(e);
      m("update:modelValue", t), i(() => {
        a.value = r(t);
      });
    }
    function v(e) {
      const t = e.target;
      i(() => {
        t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function k(e) {
      const t = e.target;
      i(() => {
        t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    function V(e) {
      const t = e.target, n = a.value;
      if (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(e.key) || e.ctrlKey || e.metaKey) {
        if (e.key === "Backspace" || e.key === "Delete") {
          e.preventDefault();
          const s = n.replace(/\D/g, "");
          if (s.length > 0) {
            const o = s.slice(0, -1), c = o ? parseInt(o) / 100 : 0;
            m("update:modelValue", c), a.value = r(c), i(() => {
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
      if (e.preventDefault(), e.key === "-") {
        const o = -p(n);
        m("update:modelValue", o), a.value = r(o);
      } else {
        const o = n.replace(/\D/g, "") + e.key, c = parseInt(o) / 100;
        m("update:modelValue", c), a.value = r(c);
      }
      i(() => {
        t.setSelectionRange(t.value.length, t.value.length);
      });
    }
    return R(
      () => d.modelValue,
      (e) => {
        const t = e ?? 0;
        a.value = r(t);
      },
      { immediate: !0 }
    ), (e, t) => {
      const n = $("v-text-field");
      return S(), B(n, {
        "model-value": a.value,
        "onUpdate:modelValue": h,
        label: l.label,
        rules: l.rules,
        disabled: l.disabled,
        hint: l.hint,
        "persistent-hint": l.persistentHint,
        variant: l.variant,
        onFocus: v,
        onClick: k,
        onKeydown: V,
        inputmode: "decimal"
      }, F({ _: 2 }, [
        e.$slots.prepend ? {
          name: "prepend",
          fn: f(() => [
            y(e.$slots, "prepend", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        e.$slots.append ? {
          name: "append",
          fn: f(() => [
            y(e.$slots, "append", {}, void 0, !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant"]);
    };
  }
}), N = /* @__PURE__ */ C(I, [["__scopeId", "data-v-baa1f38b"]]);
export {
  N as M
};
//# sourceMappingURL=inputs-MoneyField-Djun4UA-.js.map

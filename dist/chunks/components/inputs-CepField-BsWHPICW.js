import { defineComponent as P, computed as S, ref as W, resolveComponent as C, withDirectives as $, createBlock as j, openBlock as L, createSlots as q, withCtx as E, createVNode as z, createTextVNode as B, renderSlot as N, unref as D } from "vue";
import { useI18n as J } from "vue-i18n";
var U = Object.defineProperty, Z = (a, e, s) => e in a ? U(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s, y = (a, e, s) => Z(a, typeof e != "symbol" ? e + "" : e, s);
const I = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, x = (a, e, s) => a.replaceAll(e, "").replace(s, ".").replace("..", ".").replace(/[^.\d]/g, ""), V = (a, e, s) => {
  var t;
  return new Intl.NumberFormat(((t = s.number) == null ? void 0 : t.locale) ?? "en", {
    minimumFractionDigits: a,
    maximumFractionDigits: e,
    roundingMode: "trunc"
  });
}, H = (a, e = !0, s) => {
  var t, n, r, u;
  const p = ((t = s.number) == null ? void 0 : t.unsigned) !== !0 && a.startsWith("-") ? "-" : "", d = ((n = s.number) == null ? void 0 : n.fraction) ?? 0;
  let o = V(0, d, s);
  const f = o.formatToParts(1000.12), l = ((r = f.find((i) => i.type === "group")) == null ? void 0 : r.value) ?? " ", m = ((u = f.find((i) => i.type === "decimal")) == null ? void 0 : u.value) ?? ".", c = x(a, l, m);
  if (Number.isNaN(parseFloat(c))) return p;
  const k = c.split(".");
  if (k[1] != null && k[1].length >= 1) {
    const i = k[1].length <= d ? k[1].length : d;
    o = V(i, d, s);
  }
  let g = o.format(parseFloat(c));
  return e ? d > 0 && c.endsWith(".") && !c.slice(0, -1).includes(".") && (g += m) : g = x(g, l, m), p + g;
}, T = (a) => JSON.parse(a.replaceAll("'", '"')), G = (a, e = {}) => {
  const s = { ...e };
  a.dataset.maska != null && a.dataset.maska !== "" && (s.mask = K(a.dataset.maska)), a.dataset.maskaEager != null && (s.eager = M(a.dataset.maskaEager)), a.dataset.maskaReversed != null && (s.reversed = M(a.dataset.maskaReversed)), a.dataset.maskaTokensReplace != null && (s.tokensReplace = M(a.dataset.maskaTokensReplace)), a.dataset.maskaTokens != null && (s.tokens = Q(a.dataset.maskaTokens));
  const t = {};
  return a.dataset.maskaNumberLocale != null && (t.locale = a.dataset.maskaNumberLocale), a.dataset.maskaNumberFraction != null && (t.fraction = parseInt(a.dataset.maskaNumberFraction)), a.dataset.maskaNumberUnsigned != null && (t.unsigned = M(a.dataset.maskaNumberUnsigned)), (a.dataset.maskaNumber != null || Object.values(t).length > 0) && (s.number = t), s;
}, M = (a) => a !== "" ? !!JSON.parse(a) : !0, K = (a) => a.startsWith("[") && a.endsWith("]") ? T(a) : a, Q = (a) => {
  if (a.startsWith("{") && a.endsWith("}"))
    return T(a);
  const e = {};
  return a.split("|").forEach((s) => {
    const t = s.split(":");
    e[t[0]] = {
      pattern: F() ? new RegExp(t[1], "u") : new RegExp(t[1]),
      optional: t[2] === "optional",
      multiple: t[2] === "multiple",
      repeated: t[2] === "repeated"
    };
  }), e;
}, F = () => {
  try {
    return new RegExp("\\p{L}", "u"), !0;
  } catch {
    return !1;
  }
};
class O {
  constructor(e = {}) {
    y(this, "opts", {}), y(this, "memo", /* @__PURE__ */ new Map());
    const s = { ...e };
    if (s.tokens != null) {
      s.tokens = s.tokensReplace ? { ...s.tokens } : { ...I, ...s.tokens };
      for (const t of Object.values(s.tokens))
        typeof t.pattern == "string" && (t.pattern = F() ? new RegExp(t.pattern, "u") : new RegExp(t.pattern));
    } else
      s.tokens = I;
    Array.isArray(s.mask) && (s.mask.length > 1 ? s.mask = [...s.mask].sort((t, n) => t.length - n.length) : s.mask = s.mask[0] ?? ""), s.mask === "" && (s.mask = null), this.opts = s;
  }
  masked(e) {
    return this.process(String(e), this.findMask(String(e)));
  }
  unmasked(e) {
    return this.process(String(e), this.findMask(String(e)), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(e) {
    const s = this.findMask(String(e));
    if (this.opts.mask == null || s == null) return !1;
    const t = this.process(String(e), s).length;
    return typeof this.opts.mask == "string" ? t >= this.opts.mask.length : t >= s.length;
  }
  findMask(e) {
    const s = this.opts.mask;
    if (s == null)
      return null;
    if (typeof s == "string")
      return s;
    if (typeof s == "function")
      return s(e);
    const t = this.process(e, s.slice(-1).pop() ?? "", !1);
    return s.find((n) => this.process(e, n, !1).length >= t.length) ?? "";
  }
  escapeMask(e) {
    const s = [], t = [];
    return e.split("").forEach((n, r) => {
      n === "!" && e[r - 1] !== "!" ? t.push(r - t.length) : s.push(n);
    }), { mask: s.join(""), escaped: t };
  }
  process(e, s, t = !0) {
    if (this.opts.number != null) return H(e, t, this.opts);
    if (s == null) return e;
    const n = `v=${e},mr=${s},m=${t ? 1 : 0}`;
    if (this.memo.has(n)) return this.memo.get(n);
    const { mask: r, escaped: u } = this.escapeMask(s), p = [], d = this.opts.tokens != null ? this.opts.tokens : {}, o = this.isReversed() ? -1 : 1, f = this.isReversed() ? "unshift" : "push", l = this.isReversed() ? 0 : r.length - 1, m = this.isReversed() ? () => i > -1 && h > -1 : () => i < r.length && h < e.length, c = (b) => !this.isReversed() && b <= l || this.isReversed() && b >= l;
    let k, g = -1, i = this.isReversed() ? r.length - 1 : 0, h = this.isReversed() ? e.length - 1 : 0, w = !1;
    for (; m(); ) {
      const b = r.charAt(i), v = d[b], A = v?.transform != null ? v.transform(e.charAt(h)) : e.charAt(h);
      if (!u.includes(i) && v != null ? (A.match(v.pattern) != null ? (p[f](A), v.repeated ? (g === -1 ? g = i : i === l && i !== g && (i = g - o), l === g && (i -= o)) : v.multiple && (w = !0, i -= o), i += o) : v.multiple ? w && (i += o, h -= o, w = !1) : A === k ? k = void 0 : v.optional && (i += o, h -= o), h += o) : (t && !this.isEager() && p[f](b), A === b && !this.isEager() ? h += o : k = b, this.isEager() || (i += o)), this.isEager())
        for (; c(i) && (d[r.charAt(i)] == null || u.includes(i)); ) {
          if (t) {
            if (p[f](r.charAt(i)), e.charAt(h) === r.charAt(i)) {
              i += o, h += o;
              continue;
            }
          } else r.charAt(i) === e.charAt(h) && (h += o);
          i += o;
        }
    }
    return this.memo.set(n, p.join("")), this.memo.get(n);
  }
}
class X {
  constructor(e, s = {}) {
    y(this, "items", /* @__PURE__ */ new Map()), y(this, "eventAbortController"), y(this, "onInput", (t) => {
      if (t instanceof CustomEvent && t.type === "input" && !t.isTrusted && !t.bubbles)
        return;
      const n = t.target, r = this.items.get(n);
      if (r === void 0) return;
      const u = "inputType" in t && t.inputType.startsWith("delete"), p = r.isEager(), d = u && p && r.unmasked(n.value) === "" ? "" : n.value;
      this.fixCursor(n, u, () => this.setValue(n, d));
    }), this.options = s, this.eventAbortController = new AbortController(), this.init(this.getInputs(e));
  }
  update(e = {}) {
    this.options = { ...e }, this.init(Array.from(this.items.keys()));
  }
  updateValue(e) {
    var s;
    e.value !== "" && e.value !== ((s = this.processInput(e)) == null ? void 0 : s.masked) && this.setValue(e, e.value);
  }
  destroy() {
    this.eventAbortController.abort(), this.items.clear();
  }
  init(e) {
    const s = this.getOptions(this.options);
    for (const t of e) {
      if (!this.items.has(t)) {
        const { signal: r } = this.eventAbortController;
        t.addEventListener("input", this.onInput, { capture: !0, signal: r });
      }
      const n = new O(G(t, s));
      this.items.set(t, n), queueMicrotask(() => this.updateValue(t)), t.selectionStart === null && n.isEager() && console.warn("Maska: input of `%s` type is not supported", t.type);
    }
  }
  getInputs(e) {
    return typeof e == "string" ? Array.from(document.querySelectorAll(e)) : "length" in e ? Array.from(e) : [e];
  }
  getOptions(e) {
    const { onMaska: s, preProcess: t, postProcess: n, ...r } = e;
    return r;
  }
  fixCursor(e, s, t) {
    var n, r;
    const u = e.selectionStart, p = e.value;
    if (t(), u === null || u === p.length && !s) return;
    const d = e.value, o = p.slice(0, u), f = d.slice(0, u), l = (n = this.processInput(e, o)) == null ? void 0 : n.unmasked, m = (r = this.processInput(e, f)) == null ? void 0 : r.unmasked;
    if (l === void 0 || m === void 0) return;
    let c = u;
    o !== f && (c += s ? d.length - p.length : l.length - m.length), e.setSelectionRange(c, c);
  }
  setValue(e, s) {
    const t = this.processInput(e, s);
    t !== void 0 && (e.value = t.masked, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((n) => n(t)) : this.options.onMaska(t)), e.dispatchEvent(new CustomEvent("maska", { detail: t })), e.dispatchEvent(new CustomEvent("input", { detail: t.masked })));
  }
  processInput(e, s) {
    const t = this.items.get(e);
    if (t === void 0) return;
    let n = s ?? e.value;
    this.options.preProcess != null && (n = this.options.preProcess(n));
    let r = t.masked(n);
    return this.options.postProcess != null && (r = this.options.postProcess(r)), {
      masked: r,
      unmasked: t.unmasked(n),
      completed: t.completed(n)
    };
  }
}
const R = /* @__PURE__ */ new WeakMap(), Y = (a, e) => {
  if (a.arg == null || a.instance == null) return;
  const s = "setup" in a.instance.$.type;
  a.arg in a.instance ? a.instance[a.arg] = e : s && console.warn("Maska: please expose `%s` using defineExpose", a.arg);
}, _ = (a, e) => {
  var s;
  const t = a instanceof HTMLInputElement ? a : a.querySelector("input");
  if (t == null || t?.type === "file") return;
  let n = {};
  if (e.value != null && (n = typeof e.value == "string" ? { mask: e.value } : { ...e.value }), e.arg != null) {
    const r = (u) => {
      const p = e.modifiers.unmasked ? u.unmasked : e.modifiers.completed ? u.completed : u.masked;
      Y(e, p);
    };
    n.onMaska = n.onMaska == null ? r : Array.isArray(n.onMaska) ? [...n.onMaska, r] : [n.onMaska, r];
  }
  R.has(t) ? (s = R.get(t)) == null || s.update(n) : R.set(t, new X(t, n));
}, se = /* @__PURE__ */ P({
  __name: "CepField",
  props: {
    modelValue: { default: "" },
    label: { default: void 0 },
    rules: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    hint: { default: "" },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue", "address-found", "address-not-found"],
  setup(a, { emit: e }) {
    const s = a, t = e;
    let n;
    try {
      ({ t: n } = J({ useScope: "global" }));
    } catch {
      n = (l) => l;
    }
    const r = S(() => s.label ?? n("address.zipCode")), u = new O({ mask: "#####-###", eager: !0 }), p = S(() => u.masked(s.modelValue ?? "")), d = W(!1), o = {
      mask: "#####-###",
      eager: !0,
      onMaska: (l) => {
        t("update:modelValue", l.unmasked), l.completed && f(l.unmasked);
      }
    };
    async function f(l) {
      d.value = !0;
      try {
        const c = await (await fetch(`https://viacep.com.br/ws/${l}/json/`)).json();
        c.erro ? t("address-not-found") : t("address-found", c);
      } catch {
        t("address-not-found");
      } finally {
        d.value = !1;
      }
    }
    return (l, m) => {
      const c = C("v-icon"), k = C("v-text-field");
      return $((L(), j(k, {
        "model-value": p.value,
        label: r.value,
        rules: a.rules,
        disabled: a.disabled,
        hint: a.hint,
        "persistent-hint": !!a.hint,
        variant: a.variant,
        loading: d.value,
        inputmode: "numeric"
      }, q({
        "prepend-inner": E(() => [
          z(c, null, {
            default: E(() => [...m[0] || (m[0] = [
              B("mdi-map-marker-outline", -1)
            ])]),
            _: 1
          })
        ]),
        _: 2
      }, [
        l.$slots.prepend ? {
          name: "prepend",
          fn: E(() => [
            N(l.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        l.$slots.append ? {
          name: "append",
          fn: E(() => [
            N(l.$slots, "append")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant", "loading"])), [
        [D(_), o]
      ]);
    };
  }
});
export {
  O,
  se as _,
  _ as k
};
//# sourceMappingURL=inputs-CepField-BsWHPICW.js.map

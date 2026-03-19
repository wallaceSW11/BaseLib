import { defineComponent as P, ref as C, watch as F, resolveComponent as N, withDirectives as O, createBlock as W, openBlock as j, createSlots as L, withCtx as E, createVNode as D, createTextVNode as q, renderSlot as S, unref as B } from "vue";
var Z = Object.defineProperty, z = (a, e, s) => e in a ? Z(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s, y = (a, e, s) => z(a, typeof e != "symbol" ? e + "" : e, s);
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
}, J = (a, e = !0, s) => {
  var t, n, r, u;
  const d = ((t = s.number) == null ? void 0 : t.unsigned) !== !0 && a.startsWith("-") ? "-" : "", o = ((n = s.number) == null ? void 0 : n.fraction) ?? 0;
  let i = V(0, o, s);
  const p = i.formatToParts(1000.12), c = ((r = p.find((l) => l.type === "group")) == null ? void 0 : r.value) ?? " ", g = ((u = p.find((l) => l.type === "decimal")) == null ? void 0 : u.value) ?? ".", h = x(a, c, g);
  if (Number.isNaN(parseFloat(h))) return d;
  const v = h.split(".");
  if (v[1] != null && v[1].length >= 1) {
    const l = v[1].length <= o ? v[1].length : o;
    i = V(l, o, s);
  }
  let f = i.format(parseFloat(h));
  return e ? o > 0 && h.endsWith(".") && !h.slice(0, -1).includes(".") && (f += g) : f = x(f, c, g), d + f;
}, T = (a) => JSON.parse(a.replaceAll("'", '"')), U = (a, e = {}) => {
  const s = { ...e };
  a.dataset.maska != null && a.dataset.maska !== "" && (s.mask = H(a.dataset.maska)), a.dataset.maskaEager != null && (s.eager = M(a.dataset.maskaEager)), a.dataset.maskaReversed != null && (s.reversed = M(a.dataset.maskaReversed)), a.dataset.maskaTokensReplace != null && (s.tokensReplace = M(a.dataset.maskaTokensReplace)), a.dataset.maskaTokens != null && (s.tokens = G(a.dataset.maskaTokens));
  const t = {};
  return a.dataset.maskaNumberLocale != null && (t.locale = a.dataset.maskaNumberLocale), a.dataset.maskaNumberFraction != null && (t.fraction = parseInt(a.dataset.maskaNumberFraction)), a.dataset.maskaNumberUnsigned != null && (t.unsigned = M(a.dataset.maskaNumberUnsigned)), (a.dataset.maskaNumber != null || Object.values(t).length > 0) && (s.number = t), s;
}, M = (a) => a !== "" ? !!JSON.parse(a) : !0, H = (a) => a.startsWith("[") && a.endsWith("]") ? T(a) : a, G = (a) => {
  if (a.startsWith("{") && a.endsWith("}"))
    return T(a);
  const e = {};
  return a.split("|").forEach((s) => {
    const t = s.split(":");
    e[t[0]] = {
      pattern: $() ? new RegExp(t[1], "u") : new RegExp(t[1]),
      optional: t[2] === "optional",
      multiple: t[2] === "multiple",
      repeated: t[2] === "repeated"
    };
  }), e;
}, $ = () => {
  try {
    return new RegExp("\\p{L}", "u"), !0;
  } catch {
    return !1;
  }
};
class K {
  constructor(e = {}) {
    y(this, "opts", {}), y(this, "memo", /* @__PURE__ */ new Map());
    const s = { ...e };
    if (s.tokens != null) {
      s.tokens = s.tokensReplace ? { ...s.tokens } : { ...I, ...s.tokens };
      for (const t of Object.values(s.tokens))
        typeof t.pattern == "string" && (t.pattern = $() ? new RegExp(t.pattern, "u") : new RegExp(t.pattern));
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
    if (this.opts.number != null) return J(e, t, this.opts);
    if (s == null) return e;
    const n = `v=${e},mr=${s},m=${t ? 1 : 0}`;
    if (this.memo.has(n)) return this.memo.get(n);
    const { mask: r, escaped: u } = this.escapeMask(s), d = [], o = this.opts.tokens != null ? this.opts.tokens : {}, i = this.isReversed() ? -1 : 1, p = this.isReversed() ? "unshift" : "push", c = this.isReversed() ? 0 : r.length - 1, g = this.isReversed() ? () => l > -1 && m > -1 : () => l < r.length && m < e.length, h = (b) => !this.isReversed() && b <= c || this.isReversed() && b >= c;
    let v, f = -1, l = this.isReversed() ? r.length - 1 : 0, m = this.isReversed() ? e.length - 1 : 0, w = !1;
    for (; g(); ) {
      const b = r.charAt(l), k = o[b], A = k?.transform != null ? k.transform(e.charAt(m)) : e.charAt(m);
      if (!u.includes(l) && k != null ? (A.match(k.pattern) != null ? (d[p](A), k.repeated ? (f === -1 ? f = l : l === c && l !== f && (l = f - i), c === f && (l -= i)) : k.multiple && (w = !0, l -= i), l += i) : k.multiple ? w && (l += i, m -= i, w = !1) : A === v ? v = void 0 : k.optional && (l += i, m -= i), m += i) : (t && !this.isEager() && d[p](b), A === b && !this.isEager() ? m += i : v = b, this.isEager() || (l += i)), this.isEager())
        for (; h(l) && (o[r.charAt(l)] == null || u.includes(l)); ) {
          if (t) {
            if (d[p](r.charAt(l)), e.charAt(m) === r.charAt(l)) {
              l += i, m += i;
              continue;
            }
          } else r.charAt(l) === e.charAt(m) && (m += i);
          l += i;
        }
    }
    return this.memo.set(n, d.join("")), this.memo.get(n);
  }
}
class Q {
  constructor(e, s = {}) {
    y(this, "items", /* @__PURE__ */ new Map()), y(this, "eventAbortController"), y(this, "onInput", (t) => {
      if (t instanceof CustomEvent && t.type === "input" && !t.isTrusted && !t.bubbles)
        return;
      const n = t.target, r = this.items.get(n);
      if (r === void 0) return;
      const u = "inputType" in t && t.inputType.startsWith("delete"), d = r.isEager(), o = u && d && r.unmasked(n.value) === "" ? "" : n.value;
      this.fixCursor(n, u, () => this.setValue(n, o));
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
      const n = new K(U(t, s));
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
    const u = e.selectionStart, d = e.value;
    if (t(), u === null || u === d.length && !s) return;
    const o = e.value, i = d.slice(0, u), p = o.slice(0, u), c = (n = this.processInput(e, i)) == null ? void 0 : n.unmasked, g = (r = this.processInput(e, p)) == null ? void 0 : r.unmasked;
    if (c === void 0 || g === void 0) return;
    let h = u;
    i !== p && (h += s ? o.length - d.length : c.length - g.length), e.setSelectionRange(h, h);
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
const R = /* @__PURE__ */ new WeakMap(), X = (a, e) => {
  if (a.arg == null || a.instance == null) return;
  const s = "setup" in a.instance.$.type;
  a.arg in a.instance ? a.instance[a.arg] = e : s && console.warn("Maska: please expose `%s` using defineExpose", a.arg);
}, Y = (a, e) => {
  var s;
  const t = a instanceof HTMLInputElement ? a : a.querySelector("input");
  if (t == null || t?.type === "file") return;
  let n = {};
  if (e.value != null && (n = typeof e.value == "string" ? { mask: e.value } : { ...e.value }), e.arg != null) {
    const r = (u) => {
      const d = e.modifiers.unmasked ? u.unmasked : e.modifiers.completed ? u.completed : u.masked;
      X(e, d);
    };
    n.onMaska = n.onMaska == null ? r : Array.isArray(n.onMaska) ? [...n.onMaska, r] : [n.onMaska, r];
  }
  R.has(t) ? (s = R.get(t)) == null || s.update(n) : R.set(t, new Q(t, n));
}, ee = /* @__PURE__ */ P({
  __name: "CepField",
  props: {
    modelValue: { default: "" },
    label: { default: "ZIP Code" },
    rules: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    hint: { default: "" },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue", "address-found", "address-not-found"],
  setup(a, { emit: e }) {
    const s = a, t = e, n = C(""), r = C(!1), u = {
      mask: "#####-###",
      eager: !0,
      onMaska: (o) => {
        t("update:modelValue", o.unmasked), o.completed && d(o.unmasked);
      }
    };
    async function d(o) {
      r.value = !0;
      try {
        const p = await (await fetch(`https://viacep.com.br/ws/${o}/json/`)).json();
        p.erro ? t("address-not-found") : t("address-found", p);
      } catch {
        t("address-not-found");
      } finally {
        r.value = !1;
      }
    }
    return F(
      () => s.modelValue,
      (o) => {
        const i = (o ?? "").replace(/\D/g, "").slice(0, 8);
        if (!i) {
          n.value = "";
          return;
        }
        n.value = i.length > 5 ? `${i.slice(0, 5)}-${i.slice(5)}` : i;
      },
      { immediate: !0 }
    ), (o, i) => {
      const p = N("v-icon"), c = N("v-text-field");
      return O((j(), W(c, {
        "model-value": n.value,
        label: a.label,
        rules: a.rules,
        disabled: a.disabled,
        hint: a.hint,
        "persistent-hint": !!a.hint,
        variant: a.variant,
        loading: r.value,
        inputmode: "numeric"
      }, L({
        "prepend-inner": E(() => [
          D(p, null, {
            default: E(() => [...i[0] || (i[0] = [
              q("mdi-map-marker-outline", -1)
            ])]),
            _: 1
          })
        ]),
        _: 2
      }, [
        o.$slots.prepend ? {
          name: "prepend",
          fn: E(() => [
            S(o.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        o.$slots.append ? {
          name: "append",
          fn: E(() => [
            S(o.$slots, "append")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "label", "rules", "disabled", "hint", "persistent-hint", "variant", "loading"])), [
        [B(Y), u]
      ]);
    };
  }
});
export {
  K as O,
  ee as _,
  Y as k
};
//# sourceMappingURL=inputs-CepField-DwNeO2Ij.js.map

import { defineComponent as E, computed as u, resolveComponent as n, createBlock as m, openBlock as l, withCtx as t, createVNode as p, createElementBlock as L, Fragment as F, renderList as V, unref as v, createTextVNode as k, toDisplayString as d, createElementVNode as j, mergeProps as D } from "vue";
import { u as P } from "../composables/useLocale-CPLXo626.js";
const w = (c, i) => {
  const o = c.__vccOpts || c;
  for (const [a, _] of i)
    o[a] = _;
  return o;
}, A = ["aria-label"], I = ["aria-label"], O = /* @__PURE__ */ E({
  __name: "LanguageSelector",
  props: {
    availableLocales: {}
  },
  setup(c) {
    const i = c, { locale: o, locales: a, setLocale: _ } = P(i.availableLocales), f = u(() => a.find((r) => r.code === o.value) || a[0]), b = u(() => f.value.name), g = u(() => C(f.value.countryCode));
    function C(r) {
      return r.toUpperCase().split("").map((s) => String.fromCodePoint(127397 + s.charCodeAt(0))).join("");
    }
    return (r, s) => {
      const y = n("v-icon"), x = n("v-btn"), h = n("v-list-item-title"), N = n("v-list-item"), S = n("v-list"), B = n("v-menu");
      return l(), m(B, null, {
        activator: t(({ props: e }) => [
          p(x, D(e, {
            variant: "text",
            icon: ""
          }), {
            default: t(() => [
              g.value ? (l(), L("span", {
                key: 0,
                class: "lang-flag",
                "aria-label": b.value
              }, d(g.value), 9, A)) : (l(), m(y, { key: 1 }, {
                default: t(() => [...s[0] || (s[0] = [
                  k("mdi-earth", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }, 16)
        ]),
        default: t(() => [
          p(S, null, {
            default: t(() => [
              (l(!0), L(F, null, V(v(a), (e) => (l(), m(N, {
                key: e.code,
                active: v(o) === e.code,
                onClick: (T) => v(_)(e.code)
              }, {
                prepend: t(() => [
                  j("span", {
                    class: "lang-flag lang-flag--list",
                    "aria-label": e.name
                  }, d(C(e.countryCode)), 9, I)
                ]),
                default: t(() => [
                  p(h, null, {
                    default: t(() => [
                      k(d(e.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["active", "onClick"]))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), q = /* @__PURE__ */ w(O, [["__scopeId", "data-v-31e20070"]]);
export {
  q as L,
  w as _
};
//# sourceMappingURL=LanguageSelector-CI4QGhJx.js.map

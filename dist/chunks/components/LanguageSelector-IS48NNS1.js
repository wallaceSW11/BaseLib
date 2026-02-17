import { defineComponent as E, computed as h, resolveComponent as n, createBlock as s, openBlock as l, withCtx as e, createVNode as u, createElementBlock as m, Fragment as F, renderList as O, unref as _, createTextVNode as v, toDisplayString as R, mergeProps as D } from "vue";
import { u as G } from "../composables/useLocale-CPLXo626.js";
const N = (a, g) => {
  const o = a.__vccOpts || a;
  for (const [i, f] of g)
    o[i] = f;
  return o;
}, V = ["src", "alt"], z = ["src", "alt"], M = /* @__PURE__ */ E({
  __name: "LanguageSelector",
  props: {
    availableLocales: {}
  },
  setup(a) {
    const g = a, { locale: o, locales: i, setLocale: f } = G(g.availableLocales), p = h(() => i.find((r) => r.code === o.value) || i[0]), w = h(() => p.value.name), x = h(() => d(p.value.countryCode)), B = {
      BR: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504"><rect width="720" height="504" fill="%23009c3b"/><polygon points="360,36 684,252 360,468 36,252" fill="%23ffdf00"/><circle cx="360" cy="252" r="108" fill="%23002776"/><path d="M252,216 a108,108 0 0,1 216,36" fill="none" stroke="white" stroke-width="18"/><text x="360" y="270" text-anchor="middle" font-size="28" font-family="sans-serif" fill="white" font-weight="bold" letter-spacing="3">ORDEM E PROGRESSO</text></svg>',
      US: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504"><rect width="720" height="504" fill="white"/><rect y="0" width="720" height="38.77" fill="%23B22234"/><rect y="77.54" width="720" height="38.77" fill="%23B22234"/><rect y="155.08" width="720" height="38.77" fill="%23B22234"/><rect y="232.62" width="720" height="38.77" fill="%23B22234"/><rect y="310.15" width="720" height="38.77" fill="%23B22234"/><rect y="387.69" width="720" height="38.77" fill="%23B22234"/><rect y="465.23" width="720" height="38.77" fill="%23B22234"/><rect width="288" height="271.35" fill="%233C3B6E"/><g fill="white" font-size="30" text-anchor="middle" font-family="sans-serif"><text x="144" y="55">★ ★ ★ ★ ★ ★</text><text x="144" y="100">★ ★ ★ ★ ★</text><text x="144" y="145">★ ★ ★ ★ ★ ★</text><text x="144" y="190">★ ★ ★ ★ ★</text><text x="144" y="235">★ ★ ★ ★ ★ ★</text></g></svg>'
    };
    function d(r) {
      return B[r.toUpperCase()];
    }
    return (r, c) => {
      const y = n("v-icon"), k = n("v-btn"), L = n("v-list-item-title"), C = n("v-list-item"), S = n("v-list"), b = n("v-menu");
      return l(), s(b, null, {
        activator: e(({ props: t }) => [
          u(k, D(t, {
            variant: "text",
            icon: ""
          }), {
            default: e(() => [
              x.value ? (l(), m("img", {
                key: 0,
                src: x.value,
                alt: w.value,
                class: "lang-flag"
              }, null, 8, V)) : (l(), s(y, { key: 1 }, {
                default: e(() => [...c[0] || (c[0] = [
                  v("mdi-earth", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }, 16)
        ]),
        default: e(() => [
          u(S, null, {
            default: e(() => [
              (l(!0), m(F, null, O(_(i), (t) => (l(), s(C, {
                key: t.code,
                active: _(o) === t.code,
                onClick: (P) => _(f)(t.code)
              }, {
                prepend: e(() => [
                  d(t.countryCode) ? (l(), m("img", {
                    key: 0,
                    src: d(t.countryCode),
                    alt: t.name,
                    class: "lang-flag lang-flag--list"
                  }, null, 8, z)) : (l(), s(y, {
                    key: 1,
                    style: { "margin-right": "12px" }
                  }, {
                    default: e(() => [...c[1] || (c[1] = [
                      v("mdi-earth", -1)
                    ])]),
                    _: 1
                  }))
                ]),
                default: e(() => [
                  u(L, null, {
                    default: e(() => [
                      v(R(t.name), 1)
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
}), I = /* @__PURE__ */ N(M, [["__scopeId", "data-v-88afd078"]]);
export {
  I as L,
  N as _
};
//# sourceMappingURL=LanguageSelector-IS48NNS1.js.map

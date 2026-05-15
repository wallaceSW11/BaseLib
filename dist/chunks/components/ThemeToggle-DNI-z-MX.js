import { defineComponent as m, computed as o, resolveComponent as n, createBlock as s, openBlock as _, withCtx as c, createVNode as u, createTextVNode as h, toDisplayString as p } from "vue";
import { u as d } from "../stores/theme-CCYjaYW3.js";
const w = /* @__PURE__ */ m({
  __name: "ThemeToggle",
  setup(g) {
    const e = d(), t = o(
      () => e.isDark ? "mdi-weather-sunny" : "mdi-weather-night"
    ), i = o(
      () => e.isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
    );
    function r() {
      e.toggleTheme();
    }
    return (v, f) => {
      const a = n("v-icon"), l = n("v-btn");
      return _(), s(l, {
        icon: t.value,
        onClick: r,
        title: i.value,
        variant: "text"
      }, {
        default: c(() => [
          u(a, null, {
            default: c(() => [
              h(p(t.value), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["icon", "title"]);
    };
  }
});
export {
  w as _
};
//# sourceMappingURL=ThemeToggle-DNI-z-MX.js.map

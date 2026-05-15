import { onMounted as s, watch as u } from "vue";
import { useTheme as f } from "vuetify";
import { u as i } from "../stores/theme-CCYjaYW3.js";
function l() {
  const e = i(), t = f();
  function c() {
    if (!e.themeConfig) return;
    const r = e.currentColors;
    Object.keys(r).forEach((n) => {
      t.themes.value[e.currentMode] && (t.themes.value[e.currentMode].colors[n] = r[n]);
    });
  }
  function m() {
    t.change(e.currentMode);
  }
  function o() {
    e.themeConfig && (c(), m());
  }
  return s(() => {
    o();
  }), u(
    () => e.currentMode,
    () => {
      o();
    }
  ), u(
    () => e.currentColors,
    () => {
      o();
    },
    { deep: !0 }
  ), {
    syncTheme: o
  };
}
export {
  l as u
};
//# sourceMappingURL=useThemeSync-tsUGPlUl.js.map

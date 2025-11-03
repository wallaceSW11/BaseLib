import { getCurrentInstance as u, onMounted as f, watch as s } from "vue";
import { useTheme as a } from "vuetify";
import { u as l } from "./theme-BdyU2FZ0.js";
function g() {
  const e = u();
  if (!e)
    throw new Error("useGlobals must be called within setup()");
  const o = e.appContext.config.globalProperties.$notify, n = e.appContext.config.globalProperties.$loading, r = e.appContext.config.globalProperties.$confirm;
  return {
    notify: o,
    loading: n,
    confirm: r
  };
}
function d() {
  const e = l(), o = a();
  function n() {
    if (!e.themeConfig) return;
    const c = e.currentColors;
    Object.keys(c).forEach((i) => {
      o.themes.value[e.currentMode] && (o.themes.value[e.currentMode].colors[i] = c[i]);
    });
  }
  function r() {
    o.change(e.currentMode);
  }
  function t() {
    e.themeConfig && (n(), r());
  }
  return f(() => {
    t();
  }), s(
    () => e.currentMode,
    () => {
      t();
    }
  ), s(
    () => e.currentColors,
    () => {
      t();
    },
    { deep: !0 }
  ), {
    syncTheme: t
  };
}
export {
  d as a,
  g as u
};
//# sourceMappingURL=useThemeSync-DGC2nb7E.js.map

import { getCurrentInstance as a, onMounted as l, watch as c, computed as u } from "vue";
import { useTheme as f, useDisplay as m } from "vuetify";
import { u as p } from "./theme-CCYjaYW3.js";
function b() {
  const e = a();
  if (!e)
    throw new Error("useGlobals must be called within setup()");
  const o = e.appContext.config.globalProperties.$notify, t = e.appContext.config.globalProperties.$loading, r = e.appContext.config.globalProperties.$confirm;
  return {
    notify: o,
    loading: t,
    confirm: r
  };
}
function y() {
  const e = p(), o = f();
  function t() {
    if (!e.themeConfig) return;
    const s = e.currentColors;
    Object.keys(s).forEach((i) => {
      o.themes.value[e.currentMode] && (o.themes.value[e.currentMode].colors[i] = s[i]);
    });
  }
  function r() {
    o.change(e.currentMode);
  }
  function n() {
    e.themeConfig && (t(), r());
  }
  return l(() => {
    n();
  }), c(
    () => e.currentMode,
    () => {
      n();
    }
  ), c(
    () => e.currentColors,
    () => {
      n();
    },
    { deep: !0 }
  ), {
    syncTheme: n
  };
}
function C() {
  const e = m(), o = u(() => e.xs.value), t = u(() => e.smAndDown.value);
  return {
    isMobile: o,
    isMobileOrTablet: t
  };
}
export {
  y as a,
  C as b,
  b as u
};
//# sourceMappingURL=useBreakpoint-CyDZq0X4.js.map

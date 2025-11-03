import { defineStore as p } from "pinia";
import { ref as u, computed as r } from "vue";
const w = p("theme", () => {
  const t = u(null), a = u(!1), n = u(!0), o = r(() => a.value ? "dark" : "light"), s = r(
    () => t.value?.logo[o.value] || ""
  ), c = r(
    () => t.value?.colors[o.value] || {}
  ), m = r(
    () => t.value?.customization.appName || "Vue3 Base"
  );
  function i() {
    const e = localStorage.getItem("app-theme");
    a.value = e === "dark";
  }
  function l() {
    if (!t.value) return;
    document.documentElement.setAttribute("data-theme", o.value), window.dispatchEvent(
      new CustomEvent("theme-changed", {
        detail: {
          mode: o.value,
          colors: c.value
        }
      })
    );
  }
  async function v() {
    try {
      n.value = !0;
      const e = await fetch("/theme.json");
      if (!e.ok)
        throw new Error("Failed to load theme configuration");
      t.value = await e.json(), i(), l();
    } catch (e) {
      console.error("Error loading theme:", e);
    } finally {
      n.value = !1;
    }
  }
  function h() {
    a.value = !a.value, localStorage.setItem("app-theme", o.value), l();
  }
  function d(e) {
    a.value = e === "dark", localStorage.setItem("app-theme", e), l();
  }
  function f(e) {
    t.value && (t.value.colors[o.value] = {
      ...t.value.colors[o.value],
      ...e
    }, l());
  }
  return {
    themeConfig: t,
    isDark: a,
    isLoading: n,
    currentMode: o,
    currentLogo: s,
    currentColors: c,
    appName: m,
    loadTheme: v,
    toggleTheme: h,
    setTheme: d,
    updateThemeColors: f
  };
});
export {
  w as u
};
//# sourceMappingURL=theme-BdyU2FZ0.js.map

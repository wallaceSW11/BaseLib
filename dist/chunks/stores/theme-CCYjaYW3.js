import { defineStore as w } from "pinia";
import { ref as i, computed as n } from "vue";
const y = w("theme", () => {
  const t = i(null), a = i(!1), r = i(!0), o = n(() => a.value ? "dark" : "light"), m = n(
    () => t.value?.logo[o.value] || ""
  ), s = n(
    () => t.value?.colors[o.value] || {}
  ), v = n(
    () => t.value?.customization.appName || "Vue3 Base"
  ), u = n(() => t.value?.logo.favicon || "");
  function h() {
    const e = localStorage.getItem("app-theme");
    a.value = e === "dark";
  }
  function l() {
    if (!t.value) return;
    document.documentElement.setAttribute("data-theme", o.value), d(), window.dispatchEvent(
      new CustomEvent("theme-changed", {
        detail: {
          mode: o.value,
          colors: s.value
        }
      })
    );
  }
  function d() {
    if (!u.value) return;
    document.querySelectorAll("link[rel*='icon']").forEach((T) => T.remove());
    const c = document.createElement("link");
    c.rel = "icon", c.href = u.value, document.head.appendChild(c);
  }
  async function f() {
    try {
      r.value = !0;
      const e = await fetch("/theme.json");
      if (!e.ok)
        throw new Error("Failed to load theme configuration");
      t.value = await e.json(), h(), l();
    } catch (e) {
      console.error("Error loading theme:", e);
    } finally {
      r.value = !1;
    }
  }
  function p() {
    a.value = !a.value, localStorage.setItem("app-theme", o.value), l();
  }
  function g(e) {
    a.value = e === "dark", localStorage.setItem("app-theme", e), l();
  }
  function k(e) {
    t.value && (t.value.colors[o.value] = {
      ...t.value.colors[o.value],
      ...e
    }, l());
  }
  return {
    themeConfig: t,
    isDark: a,
    isLoading: r,
    currentMode: o,
    currentLogo: m,
    currentColors: s,
    appName: v,
    favicon: u,
    loadTheme: f,
    toggleTheme: p,
    setTheme: g,
    updateThemeColors: k
  };
});
export {
  y as u
};
//# sourceMappingURL=theme-CCYjaYW3.js.map

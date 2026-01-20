import p from "axios";
import { l as u, n as a } from "./confirm-bR2JIO3i.js";
import { A as y } from "./types-CDzRHMYF.js";
function S(e) {
  const t = e._context, s = t?.provides, i = e.config.globalProperties, c = s?.vuetify || s?.$vuetify || i?.$vuetify || i?.vuetify, o = s && Object.getOwnPropertySymbols(s).some(
    (l) => {
      const d = l.toString();
      return d.includes("vuetify") || d.includes("Vuetify");
    }
  ), n = t?.components && Object.keys(t.components).some((l) => l.startsWith("V"));
  c || o || n ? console.log("[BaseLib] ✅ Vuetify detectado com sucesso") : console.warn(
    `[BaseLib] ⚠️ Vuetify não detectado!
Certifique-se de chamar app.use(vuetify) ANTES de setupLib(app).
Exemplo:
  import { createVuetify } from 'vuetify'
  const vuetify = createVuetify()
  app.use(vuetify)
  setupLib(app)`
  );
}
function w() {
  console.group("🔍 Vuetify Debug Info");
  const e = document.querySelectorAll(".v-overlay-container");
  console.log(`📦 Overlay containers encontrados: ${e.length}`), e.forEach((o, n) => {
    console.log(`  [${n}]`, o);
  });
  const t = document.querySelectorAll(".v-application");
  console.log(`🎨 v-application encontrados: ${t.length}`), t.forEach((o, n) => {
    console.log(`  [${n}]`, o);
  });
  const s = document.querySelectorAll(".v-overlay");
  console.log(`📊 Overlays ativos: ${s.length}`), s.forEach((o, n) => {
    const f = o.classList.contains("v-overlay--active");
    console.log(`  [${n}] Active: ${f}`, o);
  });
  const i = document.querySelectorAll(".v-menu");
  console.log(`🍔 Menus encontrados: ${i.length}`), i.forEach((o, n) => {
    console.log(`  [${n}]`, o);
  });
  const c = document.querySelectorAll(".v-select");
  console.log(`📋 v-select encontrados: ${c.length}`), c.forEach((o, n) => {
    console.log(`  [${n}]`, o);
  }), e.length > 1 && console.warn(
    `⚠️ MÚLTIPLOS OVERLAY CONTAINERS DETECTADOS!
Isso indica que pode haver múltiplas instâncias do Vuetify.
Solução: Certifique-se de ter apenas uma instância do Vuetify registrada.`
  ), e.length === 0 && console.warn(
    `⚠️ NENHUM OVERLAY CONTAINER ENCONTRADO!
O Vuetify pode não estar inicializado corretamente.
Verifique se você chamou app.use(vuetify) no main.ts`
  ), console.groupEnd();
}
const m = {
  baseURL: "/api",
  timeout: y,
  showLoadingOnMutations: !0,
  showErrorNotifications: !0,
  authTokenKey: "auth_token",
  onUnauthorized: () => {
    localStorage.removeItem("auth_token"), window.location.href = "/login";
  }
};
let r = { ...m };
const h = p.create({
  baseURL: r.baseURL,
  timeout: r.timeout,
  headers: {
    "Content-Type": "application/json"
  }
});
function g(e) {
  const t = localStorage.getItem(r.authTokenKey);
  return t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e;
}
function v(e) {
  r.showLoadingOnMutations && e.method !== "get" && u.show("Processing...");
}
h.interceptors.request.use(
  (e) => (g(e), v(e), e),
  (e) => (u.hide(), Promise.reject(e))
);
function E() {
  r.showErrorNotifications && a.error("Unauthorized", "Please log in again"), r.onUnauthorized && r.onUnauthorized();
}
function b(e) {
  if (!r.showErrorNotifications)
    return;
  if (!e.response) {
    e.request ? a.error("Network Error", "Unable to connect to the server") : a.error("Error", e.message);
    return;
  }
  const t = e.response.status, s = e.response.data?.message || "An error occurred";
  switch (t) {
    case 401:
      E();
      break;
    case 403:
      a.error(
        "Forbidden",
        "You do not have permission to perform this action"
      );
      break;
    case 404:
      a.error("Not Found", "The requested resource was not found");
      break;
    case 500:
      a.error(
        "Server Error",
        "Internal server error. Please try again later."
      );
      break;
    default:
      a.error("Error", s);
  }
}
h.interceptors.response.use(
  (e) => (u.hide(), e),
  (e) => (u.hide(), b(e), Promise.reject(e))
);
export {
  h as a,
  w as d,
  S as e
};
//# sourceMappingURL=api-BYRsd6CO.js.map

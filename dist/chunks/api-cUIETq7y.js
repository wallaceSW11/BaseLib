import f from "axios";
import { l as i, n as s } from "./confirm-C2_0K_cX.js";
import { A as h } from "./types-CDzRHMYF.js";
function T(e) {
  e._context?.provides?.vuetify || console.warn(
    `[BaseLib] ⚠️ Vuetify não detectado!
Certifique-se de chamar app.use(vuetify) ANTES de app.use(BaseLib).
Exemplo:
  import { createVuetify } from 'vuetify'
  const vuetify = createVuetify()
  app.use(vuetify)
  app.use(BaseLib)`
  );
}
function b() {
  console.group("🔍 Vuetify Debug Info");
  const e = document.querySelectorAll(".v-overlay-container");
  console.log(`📦 Overlay containers encontrados: ${e.length}`), e.forEach((o, t) => {
    console.log(`  [${t}]`, o);
  });
  const n = document.querySelectorAll(".v-application");
  console.log(`🎨 v-application encontrados: ${n.length}`), n.forEach((o, t) => {
    console.log(`  [${t}]`, o);
  });
  const a = document.querySelectorAll(".v-overlay");
  console.log(`📊 Overlays ativos: ${a.length}`), a.forEach((o, t) => {
    const d = o.classList.contains("v-overlay--active");
    console.log(`  [${t}] Active: ${d}`, o);
  });
  const c = document.querySelectorAll(".v-menu");
  console.log(`🍔 Menus encontrados: ${c.length}`), c.forEach((o, t) => {
    console.log(`  [${t}]`, o);
  });
  const u = document.querySelectorAll(".v-select");
  console.log(`📋 v-select encontrados: ${u.length}`), u.forEach((o, t) => {
    console.log(`  [${t}]`, o);
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
const p = {
  baseURL: "/api",
  timeout: h,
  showLoadingOnMutations: !0,
  showErrorNotifications: !0,
  authTokenKey: "auth_token",
  onUnauthorized: () => {
    localStorage.removeItem("auth_token"), window.location.href = "/login";
  }
};
let r = { ...p };
const l = f.create({
  baseURL: r.baseURL,
  timeout: r.timeout,
  headers: {
    "Content-Type": "application/json"
  }
});
function g(e) {
  const n = localStorage.getItem(r.authTokenKey);
  return n && e.headers && (e.headers.Authorization = `Bearer ${n}`), e;
}
function m(e) {
  r.showLoadingOnMutations && e.method !== "get" && i.show("Processing...");
}
l.interceptors.request.use(
  (e) => (g(e), m(e), e),
  (e) => (i.hide(), Promise.reject(e))
);
function v() {
  r.showErrorNotifications && s.error("Unauthorized", "Please log in again"), r.onUnauthorized && r.onUnauthorized();
}
function y(e) {
  if (!r.showErrorNotifications)
    return;
  if (!e.response) {
    e.request ? s.error("Network Error", "Unable to connect to the server") : s.error("Error", e.message);
    return;
  }
  const n = e.response.status, a = e.response.data?.message || "An error occurred";
  switch (n) {
    case 401:
      v();
      break;
    case 403:
      s.error(
        "Forbidden",
        "You do not have permission to perform this action"
      );
      break;
    case 404:
      s.error("Not Found", "The requested resource was not found");
      break;
    case 500:
      s.error(
        "Server Error",
        "Internal server error. Please try again later."
      );
      break;
    default:
      s.error("Error", a);
  }
}
l.interceptors.response.use(
  (e) => (i.hide(), e),
  (e) => (i.hide(), y(e), Promise.reject(e))
);
export {
  l as a,
  b as d,
  T as e
};
//# sourceMappingURL=api-cUIETq7y.js.map

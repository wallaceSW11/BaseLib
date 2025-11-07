import f from "axios";
import { l as u, n as s } from "./confirm-C2_0K_cX.js";
import { A as h } from "./types-CDzRHMYF.js";
function w(e) {
  const o = e._context?.provides, a = o?.vuetify || o?.$vuetify, i = o && Object.getOwnPropertySymbols(o).some(
    (c) => c.toString().includes("vuetify")
  );
  !a && !i && console.warn(
    `[BaseLib] ⚠️ Vuetify não detectado!
Certifique-se de chamar app.use(vuetify) ANTES de setupLib(app).
Exemplo:
  import { createVuetify } from 'vuetify'
  const vuetify = createVuetify()
  app.use(vuetify)
  setupLib(app)`
  );
}
function O() {
  console.group("🔍 Vuetify Debug Info");
  const e = document.querySelectorAll(".v-overlay-container");
  console.log(`📦 Overlay containers encontrados: ${e.length}`), e.forEach((t, n) => {
    console.log(`  [${n}]`, t);
  });
  const o = document.querySelectorAll(".v-application");
  console.log(`🎨 v-application encontrados: ${o.length}`), o.forEach((t, n) => {
    console.log(`  [${n}]`, t);
  });
  const a = document.querySelectorAll(".v-overlay");
  console.log(`📊 Overlays ativos: ${a.length}`), a.forEach((t, n) => {
    const d = t.classList.contains("v-overlay--active");
    console.log(`  [${n}] Active: ${d}`, t);
  });
  const i = document.querySelectorAll(".v-menu");
  console.log(`🍔 Menus encontrados: ${i.length}`), i.forEach((t, n) => {
    console.log(`  [${n}]`, t);
  });
  const c = document.querySelectorAll(".v-select");
  console.log(`📋 v-select encontrados: ${c.length}`), c.forEach((t, n) => {
    console.log(`  [${n}]`, t);
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
function m(e) {
  const o = localStorage.getItem(r.authTokenKey);
  return o && e.headers && (e.headers.Authorization = `Bearer ${o}`), e;
}
function g(e) {
  r.showLoadingOnMutations && e.method !== "get" && u.show("Processing...");
}
l.interceptors.request.use(
  (e) => (m(e), g(e), e),
  (e) => (u.hide(), Promise.reject(e))
);
function y() {
  r.showErrorNotifications && s.error("Unauthorized", "Please log in again"), r.onUnauthorized && r.onUnauthorized();
}
function v(e) {
  if (!r.showErrorNotifications)
    return;
  if (!e.response) {
    e.request ? s.error("Network Error", "Unable to connect to the server") : s.error("Error", e.message);
    return;
  }
  const o = e.response.status, a = e.response.data?.message || "An error occurred";
  switch (o) {
    case 401:
      y();
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
  (e) => (u.hide(), e),
  (e) => (u.hide(), v(e), Promise.reject(e))
);
export {
  l as a,
  O as d,
  w as e
};
//# sourceMappingURL=api-DF3QCKGF.js.map

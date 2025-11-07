import i from "axios";
import { l as n, n as r } from "./confirm-C2_0K_cX.js";
import { A as u } from "./types-CDzRHMYF.js";
function g(e) {
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
const c = {
  baseURL: "/api",
  timeout: u,
  showLoadingOnMutations: !0,
  showErrorNotifications: !0,
  authTokenKey: "auth_token",
  onUnauthorized: () => {
    localStorage.removeItem("auth_token"), window.location.href = "/login";
  }
};
let t = { ...c };
const s = i.create({
  baseURL: t.baseURL,
  timeout: t.timeout,
  headers: {
    "Content-Type": "application/json"
  }
});
function d(e) {
  const o = localStorage.getItem(t.authTokenKey);
  return o && e.headers && (e.headers.Authorization = `Bearer ${o}`), e;
}
function f(e) {
  t.showLoadingOnMutations && e.method !== "get" && n.show("Processing...");
}
s.interceptors.request.use(
  (e) => (d(e), f(e), e),
  (e) => (n.hide(), Promise.reject(e))
);
function h() {
  t.showErrorNotifications && r.error("Unauthorized", "Please log in again"), t.onUnauthorized && t.onUnauthorized();
}
function p(e) {
  if (!t.showErrorNotifications)
    return;
  if (!e.response) {
    e.request ? r.error("Network Error", "Unable to connect to the server") : r.error("Error", e.message);
    return;
  }
  const o = e.response.status, a = e.response.data?.message || "An error occurred";
  switch (o) {
    case 401:
      h();
      break;
    case 403:
      r.error(
        "Forbidden",
        "You do not have permission to perform this action"
      );
      break;
    case 404:
      r.error("Not Found", "The requested resource was not found");
      break;
    case 500:
      r.error(
        "Server Error",
        "Internal server error. Please try again later."
      );
      break;
    default:
      r.error("Error", a);
  }
}
s.interceptors.response.use(
  (e) => (n.hide(), e),
  (e) => (n.hide(), p(e), Promise.reject(e))
);
export {
  s as a,
  g as e
};
//# sourceMappingURL=api-CTlbc0CG.js.map

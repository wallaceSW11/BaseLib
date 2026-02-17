import i from "axios";
import { l as n } from "./loading-D6FxCQER.js";
import { n as o } from "./notify-ChckS_Le.js";
import { A as u } from "./types-C6AEF72b.js";
const h = {
  baseURL: "/api",
  timeout: u,
  showLoadingOnMutations: !0,
  showErrorNotifications: !0,
  authTokenKey: "auth_token",
  onUnauthorized: () => {
    localStorage.removeItem("auth_token"), window.location.href = "/login";
  }
};
let r = { ...h };
const s = i.create({
  baseURL: r.baseURL,
  timeout: r.timeout,
  headers: {
    "Content-Type": "application/json"
  }
});
function d(e) {
  const t = localStorage.getItem(r.authTokenKey);
  return t && e.headers && (e.headers.Authorization = `Bearer ${t}`), e;
}
function c(e) {
  r.showLoadingOnMutations && e.method !== "get" && n.show("Processing...");
}
s.interceptors.request.use(
  (e) => (d(e), c(e), e),
  (e) => (n.hide(), Promise.reject(e))
);
function f() {
  r.showErrorNotifications && o.error("Unauthorized", "Please log in again"), r.onUnauthorized && r.onUnauthorized();
}
function m(e) {
  if (!r.showErrorNotifications)
    return;
  if (!e.response) {
    e.request ? o.error("Network Error", "Unable to connect to the server") : o.error("Error", e.message);
    return;
  }
  const t = e.response.status, a = e.response.data?.message || "An error occurred";
  switch (t) {
    case 401:
      f();
      break;
    case 403:
      o.error(
        "Forbidden",
        "You do not have permission to perform this action"
      );
      break;
    case 404:
      o.error("Not Found", "The requested resource was not found");
      break;
    case 500:
      o.error(
        "Server Error",
        "Internal server error. Please try again later."
      );
      break;
    default:
      o.error("Error", a);
  }
}
s.interceptors.response.use(
  (e) => (n.hide(), e),
  (e) => (n.hide(), m(e), Promise.reject(e))
);
export {
  s as a
};
//# sourceMappingURL=api-CK88Txy0.js.map

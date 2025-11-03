import n from "axios";
import { l as t, n as r } from "./confirm-CThT9jKh.js";
const s = n.create({
  baseURL: "/api",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
});
function i(e) {
  const o = localStorage.getItem("auth_token");
  return o && e.headers && (e.headers.Authorization = `Bearer ${o}`), e;
}
function u(e) {
  e.method !== "get" && t(!0, "Processing...");
}
s.interceptors.request.use(
  (e) => (i(e), u(e), e),
  (e) => (t(!1), Promise.reject(e))
);
function c() {
  r("error", "Unauthorized", "Please log in again"), localStorage.removeItem("auth_token"), window.location.href = "/login";
}
function d(e) {
  if (!e.response) {
    e.request ? r("error", "Network Error", "Unable to connect to the server") : r("error", "Error", e.message);
    return;
  }
  const o = e.response.status, a = e.response.data?.message || "An error occurred";
  switch (o) {
    case 401:
      c();
      break;
    case 403:
      r(
        "error",
        "Forbidden",
        "You do not have permission to perform this action"
      );
      break;
    case 404:
      r("error", "Not Found", "The requested resource was not found");
      break;
    case 500:
      r(
        "error",
        "Server Error",
        "Internal server error. Please try again later."
      );
      break;
    default:
      r("error", "Error", a);
  }
}
s.interceptors.response.use(
  (e) => (t(!1), e),
  (e) => (t(!1), d(e), Promise.reject(e))
);
export {
  s as a
};
//# sourceMappingURL=api-DufEv4lH.js.map

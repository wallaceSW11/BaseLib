import { c as s } from "./chunks/index-Bk1Elnrc.js";
import { _ as L, h as T, F as d, f as y, j as b, L as x, g as N, a as A, e as O, b as B, d as I, i as S } from "./chunks/index-Bk1Elnrc.js";
import { g as t } from "./chunks/globals-B4s2Vnzp.js";
import { e as r } from "./chunks/api-CTlbc0CG.js";
import { a as E } from "./chunks/api-CTlbc0CG.js";
import { c as h, l as C, n as P, b as F, a as G, u as M } from "./chunks/confirm-C2_0K_cX.js";
import { A as j, a as v, L as U, N as Q } from "./chunks/types-CDzRHMYF.js";
import { u as V, a as k } from "./chunks/useThemeSync-CUrReiLu.js";
import { defaultAvailableLocales as w, defaultLocale as z, defaultMessages as H } from "./locales/index.js";
import { u as K } from "./chunks/theme-CCYjaYW3.js";
const n = s;
function i(o) {
  Object.entries(n).forEach(([a, e]) => {
    o.component(a, e);
  });
}
function u(o) {
  o.use(t);
}
function c(o) {
  r(o), i(o), u(o);
}
export {
  j as API_TIMEOUT,
  L as BaseButton,
  T as ConfirmDialog,
  d as FloatingNotify,
  y as IconToolTip,
  v as LOADING_CONTENT_DELAY,
  U as LOADING_DELAY,
  b as LanguageSelector,
  x as LoadingOverlay,
  N as ModalBase,
  Q as NOTIFY_DURATION,
  A as PrimaryButton,
  O as QuartenaryButton,
  B as SecondaryButton,
  I as TertiaryButton,
  S as ThemeToggle,
  E as api,
  n as components,
  h as confirm,
  i as default,
  w as defaultAvailableLocales,
  z as defaultLocale,
  H as defaultMessages,
  r as ensureVuetify,
  t as globalsPlugin,
  C as loading,
  P as notify,
  u as registerLibPlugins,
  c as setupLib,
  F as useConfirmStore,
  V as useGlobals,
  G as useLoadingStore,
  M as useNotifyStore,
  K as useThemeStore,
  k as useThemeSync
};
//# sourceMappingURL=index.js.map

import { c as s } from "./chunks/index-N6kyopHj.js";
import { _ as g, h as p, F as L, f as T, j as d, L as b, g as x, a as y, e as N, b as A, d as O, i as B } from "./chunks/index-N6kyopHj.js";
import { g as t } from "./chunks/globals-B4s2Vnzp.js";
import { c as S, l as D, n as E, b as _, a as h, u as C } from "./chunks/confirm-C2_0K_cX.js";
import { a as F } from "./chunks/api-BsR2dtOX.js";
import { A as M, a as Y, L as j, N as v } from "./chunks/types-CDzRHMYF.js";
import { u as Q, a as R } from "./chunks/useThemeSync-CUrReiLu.js";
import { defaultAvailableLocales as q, defaultLocale as w, defaultMessages as z } from "./locales/index.js";
import { u as J } from "./chunks/theme-CCYjaYW3.js";
const r = s;
function n(o) {
  Object.entries(r).forEach(([a, e]) => {
    o.component(a, e);
  });
}
function i(o) {
  o.use(t);
}
function l(o) {
  n(o), i(o);
}
export {
  M as API_TIMEOUT,
  g as BaseButton,
  p as ConfirmDialog,
  L as FloatingNotify,
  T as IconToolTip,
  Y as LOADING_CONTENT_DELAY,
  j as LOADING_DELAY,
  d as LanguageSelector,
  b as LoadingOverlay,
  x as ModalBase,
  v as NOTIFY_DURATION,
  y as PrimaryButton,
  N as QuartenaryButton,
  A as SecondaryButton,
  O as TertiaryButton,
  B as ThemeToggle,
  F as api,
  r as components,
  S as confirm,
  n as default,
  q as defaultAvailableLocales,
  w as defaultLocale,
  z as defaultMessages,
  t as globalsPlugin,
  D as loading,
  E as notify,
  i as registerLibPlugins,
  l as setupLib,
  _ as useConfirmStore,
  Q as useGlobals,
  h as useLoadingStore,
  C as useNotifyStore,
  J as useThemeStore,
  R as useThemeSync
};
//# sourceMappingURL=index.js.map

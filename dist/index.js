import { c as s } from "./chunks/index-2lMjARev.js";
import { g, F as p, e as d, i as b, L as y, f as L, _ as x, d as S, a as T, b as h, h as B } from "./chunks/index-2lMjARev.js";
import { g as t } from "./chunks/globals-1j72WMze.js";
import { c as P, l as v, n as E, b as F, a as M, u as N } from "./chunks/confirm-CThT9jKh.js";
import { a as j } from "./chunks/api-DufEv4lH.js";
import { u as D, a as G } from "./chunks/useThemeSync-DGC2nb7E.js";
import { defaultAvailableLocales as Q, defaultLocale as _, defaultMessages as k } from "./locales/index.js";
import { u as w } from "./chunks/theme-BdyU2FZ0.js";
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
  g as ConfirmDialog,
  p as FloatingNotify,
  d as IconToolTip,
  b as LanguageSelector,
  y as LoadingOverlay,
  L as ModalBase,
  x as PrimaryButton,
  S as QuartenaryButton,
  T as SecondaryButton,
  h as TertiaryButton,
  B as ThemeToggle,
  j as api,
  r as components,
  P as confirm,
  n as default,
  Q as defaultAvailableLocales,
  _ as defaultLocale,
  k as defaultMessages,
  t as globalsPlugin,
  v as loading,
  E as notify,
  i as registerLibPlugins,
  l as setupLib,
  F as useConfirmStore,
  D as useGlobals,
  M as useLoadingStore,
  N as useNotifyStore,
  w as useThemeStore,
  G as useThemeSync
};
//# sourceMappingURL=index.js.map

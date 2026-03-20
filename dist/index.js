import { c as t } from "./chunks/index-b9IhtsOB.js";
import { globalsPlugin as a } from "./plugins/index.js";
import { e as s } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { d as M } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { n as h, u as G } from "./chunks/utils/notify-ChckS_Le.js";
import { l as v, u as U } from "./chunks/utils/loading-D6FxCQER.js";
import { c as k, u as q } from "./chunks/utils/confirm-Ch-Sbg4M.js";
import { a as R } from "./chunks/utils/api-CK88Txy0.js";
import { A as z, L as H, a as J, N as K } from "./chunks/utils/types-C6AEF72b.js";
import { u as X } from "./chunks/composables/useGlobals-B6-x1anC.js";
import { u as $ } from "./chunks/composables/useThemeSync-tsUGPlUl.js";
import { u as eo } from "./chunks/composables/useBreakpoint-DnFIVluv.js";
import { a as to, b as ao, d as so } from "./chunks/composables/useLocale-DGKqGiq_.js";
import { u as io } from "./chunks/stores/theme-CCYjaYW3.js";
import { VProgressCircular as m, VMenu as i, VListItemTitle as f, VListItem as n, VList as p, VTooltip as u, VTextField as l, VSpacer as x, VIcon as d, VDialog as c, VCardTitle as V, VCardText as g, VCardActions as L, VCard as T, VBtn as _, VAlert as y } from "vuetify/components";
import { _ as no } from "./chunks/components/buttons-BaseButton-C-EjUsje.js";
import { _ as uo } from "./chunks/components/buttons-PrimaryButton-BaTmTBaj.js";
import { _ as xo } from "./chunks/components/buttons-SecondaryButton-DnTTGtbG.js";
import { _ as Vo } from "./chunks/components/buttons-TertiaryButton-CBcRj3Fi.js";
import { _ as Lo } from "./chunks/components/buttons-QuartenaryButton-7Yzi0ypA.js";
import { _ as _o } from "./chunks/components/buttons-IconToolTip-gYYUyGZi.js";
import { _ as Ao } from "./chunks/components/modals-ModalBase-D7zgXC38.js";
import { _ as Io } from "./chunks/components/messages-ConfirmDialog-ayb2mMNY.js";
import { _ as bo } from "./chunks/components/ThemeToggle-DNI-z-MX.js";
import { _ as Bo } from "./chunks/components/inputs-EmailField-D2uAsb2O.js";
import { _ as So } from "./chunks/components/inputs-PhoneField-CAEWuhMw.js";
import { _ as Eo } from "./chunks/components/inputs-CepField-D19j-V9y.js";
import { _ as Po } from "./chunks/components/inputs-FullAddress-CzQrn6sz.js";
import { F as Go } from "./chunks/components/messages-FloatingNotify-cKFaQH3Q.js";
import { L as vo } from "./chunks/components/LoadingOverlay-BAVdifrH.js";
import { L as jo } from "./chunks/components/LanguageSelector-DBq94ijx.js";
import { M as qo } from "./chunks/components/inputs-MoneyField-47VGxZ6j.js";
import { N as Ro } from "./chunks/components/inputs-NumberField-DBzprQg6.js";
const O = {
  VAlert: y,
  VBtn: _,
  VCard: T,
  VCardActions: L,
  VCardText: g,
  VCardTitle: V,
  VDialog: c,
  VIcon: d,
  VSpacer: x,
  VTextField: l,
  VTooltip: u,
  VList: p,
  VListItem: n,
  VListItemTitle: f,
  VMenu: i,
  VProgressCircular: m
}, A = t;
function C(o) {
  Object.entries(A).forEach(([e, r]) => {
    o.component(e, r);
  });
}
function I(o) {
  o.use(a);
}
function S(o) {
  s(o), C(o), I(o);
}
export {
  z as API_TIMEOUT,
  no as BaseButton,
  Eo as CepField,
  Io as ConfirmDialog,
  Bo as EmailField,
  Go as FloatingNotify,
  Po as FullAddress,
  _o as IconToolTip,
  H as LOADING_CONTENT_DELAY,
  J as LOADING_DELAY,
  jo as LanguageSelector,
  vo as LoadingOverlay,
  Ao as ModalBase,
  qo as MoneyField,
  K as NOTIFY_DURATION,
  Ro as NumberField,
  So as PhoneField,
  uo as PrimaryButton,
  Lo as QuartenaryButton,
  xo as SecondaryButton,
  Vo as TertiaryButton,
  bo as ThemeToggle,
  R as api,
  A as components,
  k as confirm,
  M as debugVuetifyInstances,
  C as default,
  to as defaultAvailableLocales,
  ao as defaultLocale,
  so as defaultMessages,
  s as ensureVuetify,
  a as globalsPlugin,
  v as loading,
  h as notify,
  I as registerLibPlugins,
  O as requiredVuetifyComponents,
  S as setupLib,
  eo as useBreakpoint,
  q as useConfirmStore,
  X as useGlobals,
  U as useLoadingStore,
  G as useNotifyStore,
  io as useThemeStore,
  $ as useThemeSync
};
//# sourceMappingURL=index.js.map

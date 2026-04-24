import { c as t } from "./chunks/index-BtLN1JWj.js";
import { globalsPlugin as a } from "./plugins/index.js";
import { e as s } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { d as G } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { n as v, u as R } from "./chunks/utils/notify-ChckS_Le.js";
import { l as j, u as k } from "./chunks/utils/loading-D6FxCQER.js";
import { c as w, u as Q } from "./chunks/utils/confirm-Ch-Sbg4M.js";
import { a as H } from "./chunks/utils/api-CK88Txy0.js";
import { A as K, L as W, a as X, N as Z } from "./chunks/utils/types-C6AEF72b.js";
import { u as oo } from "./chunks/composables/useGlobals-B6-x1anC.js";
import { u as ro } from "./chunks/composables/useThemeSync-tsUGPlUl.js";
import { u as ao } from "./chunks/composables/useBreakpoint-DnFIVluv.js";
import { a as mo, b as io, d as fo } from "./chunks/composables/useLocale-DGKqGiq_.js";
import { u as po } from "./chunks/stores/theme-CCYjaYW3.js";
import { VListItemTitle as m, VListItem as i, VList as f, VTooltip as n, VTextField as p, VSpacer as u, VSelect as l, VRow as x, VProgressCircular as c, VMenu as d, VIcon as V, VDialog as g, VCol as L, VCardTitle as T, VCardText as _, VCardActions as y, VCard as C, VBtn as A, VAlert as I } from "vuetify/components";
import { _ as lo } from "./chunks/components/buttons-BaseButton-C-EjUsje.js";
import { _ as co } from "./chunks/components/buttons-PrimaryButton-BaTmTBaj.js";
import { _ as go } from "./chunks/components/buttons-SecondaryButton-DnTTGtbG.js";
import { _ as To } from "./chunks/components/buttons-TertiaryButton-CBcRj3Fi.js";
import { _ as yo } from "./chunks/components/buttons-QuartenaryButton-7Yzi0ypA.js";
import { _ as Ao } from "./chunks/components/buttons-IconToolTip-gYYUyGZi.js";
import { _ as No } from "./chunks/components/modals-ModalBase-D7zgXC38.js";
import { _ as Fo } from "./chunks/components/messages-ConfirmDialog-ayb2mMNY.js";
import { _ as So } from "./chunks/components/ThemeToggle-DNI-z-MX.js";
import { _ as Do } from "./chunks/components/inputs-EmailField-D2uAsb2O.js";
import { _ as Mo } from "./chunks/components/inputs-PhoneField-D8R9Uo_g.js";
import { _ as ho } from "./chunks/components/inputs-CepField-BsWHPICW.js";
import { _ as Yo } from "./chunks/components/inputs-FullAddress-lZYmBQM3.js";
import { F as Ro } from "./chunks/components/messages-FloatingNotify-cKFaQH3Q.js";
import { L as jo } from "./chunks/components/LoadingOverlay-BAVdifrH.js";
import { L as qo } from "./chunks/components/LanguageSelector-DBq94ijx.js";
import { M as Qo } from "./chunks/components/inputs-MoneyField-47VGxZ6j.js";
import { N as Ho } from "./chunks/components/inputs-NumberField-DBzprQg6.js";
const E = {
  VAlert: I,
  VBtn: A,
  VCard: C,
  VCardActions: y,
  VCardText: _,
  VCardTitle: T,
  VCol: L,
  VDialog: g,
  VIcon: V,
  VMenu: d,
  VProgressCircular: c,
  VRow: x,
  VSelect: l,
  VSpacer: u,
  VTextField: p,
  VTooltip: n,
  VList: f,
  VListItem: i,
  VListItemTitle: m
}, N = t;
function b(o) {
  Object.entries(N).forEach(([e, r]) => {
    o.component(e, r);
  });
}
function F(o) {
  o.use(a);
}
function M(o) {
  s(o), b(o), F(o);
}
export {
  K as API_TIMEOUT,
  lo as BaseButton,
  ho as CepField,
  Fo as ConfirmDialog,
  Do as EmailField,
  Ro as FloatingNotify,
  Yo as FullAddress,
  Ao as IconToolTip,
  W as LOADING_CONTENT_DELAY,
  X as LOADING_DELAY,
  qo as LanguageSelector,
  jo as LoadingOverlay,
  No as ModalBase,
  Qo as MoneyField,
  Z as NOTIFY_DURATION,
  Ho as NumberField,
  Mo as PhoneField,
  co as PrimaryButton,
  yo as QuartenaryButton,
  go as SecondaryButton,
  To as TertiaryButton,
  So as ThemeToggle,
  H as api,
  N as components,
  w as confirm,
  G as debugVuetifyInstances,
  b as default,
  mo as defaultAvailableLocales,
  io as defaultLocale,
  fo as defaultMessages,
  s as ensureVuetify,
  a as globalsPlugin,
  j as loading,
  v as notify,
  F as registerLibPlugins,
  E as requiredVuetifyComponents,
  M as setupLib,
  ao as useBreakpoint,
  Q as useConfirmStore,
  oo as useGlobals,
  k as useLoadingStore,
  R as useNotifyStore,
  po as useThemeStore,
  ro as useThemeSync
};
//# sourceMappingURL=index.js.map

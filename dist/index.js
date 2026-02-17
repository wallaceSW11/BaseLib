import { c as t } from "./chunks/index-BjuxVtvZ.js";
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
import { a as to, b as ao, d as so } from "./chunks/composables/useLocale-CPLXo626.js";
import { u as mo } from "./chunks/stores/theme-CCYjaYW3.js";
import { VProgressCircular as i, VMenu as m, VListItemTitle as n, VListItem as f, VList as u, VTooltip as p, VTextField as l, VSpacer as x, VIcon as c, VDialog as d, VCardTitle as V, VCardText as g, VCardActions as L, VCard as T, VBtn as _, VAlert as y } from "vuetify/components";
import { _ as fo } from "./chunks/components/buttons-BaseButton-C-EjUsje.js";
import { _ as po } from "./chunks/components/buttons-PrimaryButton-BaTmTBaj.js";
import { _ as xo } from "./chunks/components/buttons-SecondaryButton-DnTTGtbG.js";
import { _ as Vo } from "./chunks/components/buttons-TertiaryButton-CBcRj3Fi.js";
import { _ as Lo } from "./chunks/components/buttons-QuartenaryButton-7Yzi0ypA.js";
import { _ as _o } from "./chunks/components/buttons-IconToolTip-Dbe7ijX5.js";
import { _ as Io } from "./chunks/components/modals-ModalBase-C2iRr0Xc.js";
import { _ as bo } from "./chunks/components/messages-ConfirmDialog-CB_fX9va.js";
import { _ as Co } from "./chunks/components/ThemeToggle-DNI-z-MX.js";
import { _ as Oo } from "./chunks/components/inputs-EmailField-CVSShYDE.js";
import { F as Do } from "./chunks/components/messages-FloatingNotify-QpHsqJgj.js";
import { L as Fo } from "./chunks/components/LoadingOverlay-C3rZd3ZV.js";
import { L as Po } from "./chunks/components/LanguageSelector-IS48NNS1.js";
import { M as Go } from "./chunks/components/inputs-MoneyField-Djun4UA-.js";
import { N as vo } from "./chunks/components/inputs-NumberField-CJcKQBEG.js";
const S = {
  VAlert: y,
  VBtn: _,
  VCard: T,
  VCardActions: L,
  VCardText: g,
  VCardTitle: V,
  VDialog: d,
  VIcon: c,
  VSpacer: x,
  VTextField: l,
  VTooltip: p,
  VList: u,
  VListItem: f,
  VListItemTitle: n,
  VMenu: m,
  VProgressCircular: i
}, I = t;
function N(o) {
  Object.entries(I).forEach(([e, r]) => {
    o.component(e, r);
  });
}
function b(o) {
  o.use(a);
}
function D(o) {
  s(o), N(o), b(o);
}
export {
  z as API_TIMEOUT,
  fo as BaseButton,
  bo as ConfirmDialog,
  Oo as EmailField,
  Do as FloatingNotify,
  _o as IconToolTip,
  H as LOADING_CONTENT_DELAY,
  J as LOADING_DELAY,
  Po as LanguageSelector,
  Fo as LoadingOverlay,
  Io as ModalBase,
  Go as MoneyField,
  K as NOTIFY_DURATION,
  vo as NumberField,
  po as PrimaryButton,
  Lo as QuartenaryButton,
  xo as SecondaryButton,
  Vo as TertiaryButton,
  Co as ThemeToggle,
  R as api,
  I as components,
  k as confirm,
  M as debugVuetifyInstances,
  N as default,
  to as defaultAvailableLocales,
  ao as defaultLocale,
  so as defaultMessages,
  s as ensureVuetify,
  a as globalsPlugin,
  v as loading,
  h as notify,
  b as registerLibPlugins,
  S as requiredVuetifyComponents,
  D as setupLib,
  eo as useBreakpoint,
  q as useConfirmStore,
  X as useGlobals,
  U as useLoadingStore,
  G as useNotifyStore,
  mo as useThemeStore,
  $ as useThemeSync
};
//# sourceMappingURL=index.js.map

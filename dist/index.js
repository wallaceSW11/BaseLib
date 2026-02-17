import { c as t } from "./chunks/index-BjuxVtvZ.js";
import { globalsPlugin as a } from "./plugins/index.js";
import { e as s } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { d as F } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { n as h, u as P } from "./chunks/utils/notify-ChckS_Le.js";
import { l as Y, u as v } from "./chunks/utils/loading-D6FxCQER.js";
import { c as j, u as k } from "./chunks/utils/confirm-Ch-Sbg4M.js";
import { a as Q } from "./chunks/utils/api-CK88Txy0.js";
import { A as w, L as z, a as H, N as J } from "./chunks/utils/types-C6AEF72b.js";
import { u as W } from "./chunks/composables/useGlobals-B6-x1anC.js";
import { u as Z } from "./chunks/composables/useThemeSync-tsUGPlUl.js";
import { u as oo } from "./chunks/composables/useBreakpoint-DnFIVluv.js";
import { a as ro, b as to, d as ao } from "./chunks/composables/useLocale-CPLXo626.js";
import { u as mo } from "./chunks/stores/theme-CCYjaYW3.js";
import { VMenu as m, VListItemTitle as i, VListItem as n, VList as f, VTooltip as u, VTextField as p, VSpacer as l, VIcon as x, VDialog as c, VCardTitle as d, VCardText as L, VCardActions as T, VCard as V, VBtn as g, VAlert as _ } from "vuetify/components";
import { _ as no } from "./chunks/components/buttons-BaseButton-C-EjUsje.js";
import { _ as uo } from "./chunks/components/buttons-PrimaryButton-BaTmTBaj.js";
import { _ as lo } from "./chunks/components/buttons-SecondaryButton-DnTTGtbG.js";
import { _ as co } from "./chunks/components/buttons-TertiaryButton-CBcRj3Fi.js";
import { _ as To } from "./chunks/components/buttons-QuartenaryButton-7Yzi0ypA.js";
import { _ as go } from "./chunks/components/buttons-IconToolTip-Dbe7ijX5.js";
import { _ as yo } from "./chunks/components/modals-ModalBase-C2iRr0Xc.js";
import { _ as No } from "./chunks/components/messages-ConfirmDialog-CB_fX9va.js";
import { _ as Ao } from "./chunks/components/ThemeToggle-DNI-z-MX.js";
import { _ as Co } from "./chunks/components/inputs-EmailField-CVSShYDE.js";
import { F as So } from "./chunks/components/messages-FloatingNotify-QpHsqJgj.js";
import { L as Eo } from "./chunks/components/LoadingOverlay-C3rZd3ZV.js";
import { L as Mo } from "./chunks/components/LanguageSelector-IS48NNS1.js";
import { M as Po } from "./chunks/components/inputs-MoneyField-Djun4UA-.js";
import { N as Yo } from "./chunks/components/inputs-NumberField-CJcKQBEG.js";
const O = {
  VAlert: _,
  VBtn: g,
  VCard: V,
  VCardActions: T,
  VCardText: L,
  VCardTitle: d,
  VDialog: c,
  VIcon: x,
  VSpacer: l,
  VTextField: p,
  VTooltip: u,
  VList: f,
  VListItem: n,
  VListItemTitle: i,
  VMenu: m
}, y = t;
function I(o) {
  Object.entries(y).forEach(([e, r]) => {
    o.component(e, r);
  });
}
function N(o) {
  o.use(a);
}
function S(o) {
  s(o), I(o), N(o);
}
export {
  w as API_TIMEOUT,
  no as BaseButton,
  No as ConfirmDialog,
  Co as EmailField,
  So as FloatingNotify,
  go as IconToolTip,
  z as LOADING_CONTENT_DELAY,
  H as LOADING_DELAY,
  Mo as LanguageSelector,
  Eo as LoadingOverlay,
  yo as ModalBase,
  Po as MoneyField,
  J as NOTIFY_DURATION,
  Yo as NumberField,
  uo as PrimaryButton,
  To as QuartenaryButton,
  lo as SecondaryButton,
  co as TertiaryButton,
  Ao as ThemeToggle,
  Q as api,
  y as components,
  j as confirm,
  F as debugVuetifyInstances,
  I as default,
  ro as defaultAvailableLocales,
  to as defaultLocale,
  ao as defaultMessages,
  s as ensureVuetify,
  a as globalsPlugin,
  Y as loading,
  h as notify,
  N as registerLibPlugins,
  O as requiredVuetifyComponents,
  S as setupLib,
  oo as useBreakpoint,
  k as useConfirmStore,
  W as useGlobals,
  v as useLoadingStore,
  P as useNotifyStore,
  mo as useThemeStore,
  Z as useThemeSync
};
//# sourceMappingURL=index.js.map

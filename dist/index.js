import { c as t } from "./chunks/index-BjuxVtvZ.js";
import { globalsPlugin as a } from "./plugins/index.js";
import { e as s } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { d as g } from "./chunks/utils/vuetify-check-CzEpmek9.js";
import { n as L, u as _ } from "./chunks/utils/notify-ChckS_Le.js";
import { l as y, u as N } from "./chunks/utils/loading-D6FxCQER.js";
import { c as A, u as B } from "./chunks/utils/confirm-Ch-Sbg4M.js";
import { a as O } from "./chunks/utils/api-CK88Txy0.js";
import { A as S, L as D, a as F, N as M } from "./chunks/utils/types-C6AEF72b.js";
import { u as C } from "./chunks/composables/useGlobals-B6-x1anC.js";
import { u as G } from "./chunks/composables/useThemeSync-tsUGPlUl.js";
import { u as v } from "./chunks/composables/useBreakpoint-DnFIVluv.js";
import { a as V, b as j, d as k } from "./chunks/composables/useLocale-CPLXo626.js";
import { u as R } from "./chunks/stores/theme-CCYjaYW3.js";
import { _ as w } from "./chunks/components/buttons-BaseButton-C-EjUsje.js";
import { _ as H } from "./chunks/components/buttons-PrimaryButton-BaTmTBaj.js";
import { _ as K } from "./chunks/components/buttons-SecondaryButton-DnTTGtbG.js";
import { _ as X } from "./chunks/components/buttons-TertiaryButton-CBcRj3Fi.js";
import { _ as $ } from "./chunks/components/buttons-QuartenaryButton-7Yzi0ypA.js";
import { _ as eo } from "./chunks/components/buttons-IconToolTip-Dbe7ijX5.js";
import { _ as to } from "./chunks/components/modals-ModalBase-C2iRr0Xc.js";
import { _ as so } from "./chunks/components/messages-ConfirmDialog-CB_fX9va.js";
import { _ as mo } from "./chunks/components/ThemeToggle-DNI-z-MX.js";
import { _ as io } from "./chunks/components/inputs-EmailField-CVSShYDE.js";
import { F as po } from "./chunks/components/messages-FloatingNotify-QpHsqJgj.js";
import { L as lo } from "./chunks/components/LoadingOverlay-C3rZd3ZV.js";
import { L as go } from "./chunks/components/LanguageSelector-IS48NNS1.js";
import { M as _o } from "./chunks/components/inputs-MoneyField-Djun4UA-.js";
import { N as yo } from "./chunks/components/inputs-NumberField-CJcKQBEG.js";
const f = t;
function m(o) {
  Object.entries(f).forEach(([e, r]) => {
    o.component(e, r);
  });
}
function n(o) {
  o.use(a);
}
function x(o) {
  s(o), m(o), n(o);
}
export {
  S as API_TIMEOUT,
  w as BaseButton,
  so as ConfirmDialog,
  io as EmailField,
  po as FloatingNotify,
  eo as IconToolTip,
  D as LOADING_CONTENT_DELAY,
  F as LOADING_DELAY,
  go as LanguageSelector,
  lo as LoadingOverlay,
  to as ModalBase,
  _o as MoneyField,
  M as NOTIFY_DURATION,
  yo as NumberField,
  H as PrimaryButton,
  $ as QuartenaryButton,
  K as SecondaryButton,
  X as TertiaryButton,
  mo as ThemeToggle,
  O as api,
  f as components,
  A as confirm,
  g as debugVuetifyInstances,
  m as default,
  V as defaultAvailableLocales,
  j as defaultLocale,
  k as defaultMessages,
  s as ensureVuetify,
  a as globalsPlugin,
  y as loading,
  L as notify,
  n as registerLibPlugins,
  x as setupLib,
  v as useBreakpoint,
  B as useConfirmStore,
  C as useGlobals,
  N as useLoadingStore,
  _ as useNotifyStore,
  R as useThemeStore,
  G as useThemeSync
};
//# sourceMappingURL=index.js.map

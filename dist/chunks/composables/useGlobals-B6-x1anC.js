import { getCurrentInstance as i } from "vue";
function s() {
  const o = i();
  if (!o)
    throw new Error("useGlobals must be called within setup()");
  const n = o.appContext.config.globalProperties.$notify, t = o.appContext.config.globalProperties.$loading, e = o.appContext.config.globalProperties.$confirm;
  return {
    notify: n,
    loading: t,
    confirm: e
  };
}
export {
  s as u
};
//# sourceMappingURL=useGlobals-B6-x1anC.js.map

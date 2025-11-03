import { defineStore as s } from "pinia";
import { ref as r } from "vue";
const a = s("notify", () => {
  const o = r(null);
  return {
    setNotifyRef: (n) => {
      o.value = n;
    },
    notify: (n, i, f) => {
      o.value && o.value.show(n, i, f);
    }
  };
}), g = (o, e, t) => {
  a().notify(o, e, t);
}, l = s("loading", () => {
  const o = r(null);
  return {
    setLoadingRef: (n) => {
      o.value = n;
    },
    loading: (n, i) => {
      o.value && (n ? o.value.show(i) : o.value.hide());
    }
  };
}), d = (o, e) => {
  l().loading(o, e);
}, c = s("confirm", {
  state: () => ({
    confirmRef: null
  }),
  actions: {
    setConfirmRef(o) {
      this.confirmRef = o;
    }
  }
});
function y(o, e) {
  const n = c().confirmRef;
  return !n || !n.ConfirmDialog ? (console.error("ConfirmDialog component is not registered"), Promise.resolve(!1)) : n.ConfirmDialog(o, e);
}
export {
  l as a,
  c as b,
  y as c,
  d as l,
  g as n,
  a as u
};
//# sourceMappingURL=confirm-CThT9jKh.js.map

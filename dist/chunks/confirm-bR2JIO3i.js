import { defineStore as r } from "pinia";
import { ref as a } from "vue";
const i = r("notify", () => {
  const o = a(null);
  return {
    setNotifyRef: (t) => {
      o.value = t;
    },
    notify: (t, e, c) => {
      o.value && o.value.show(t, e, c);
    }
  };
}), g = {
  success: (o, n) => {
    i().notify("success", o, n);
  },
  error: (o, n) => {
    i().notify("error", o, n);
  },
  warning: (o, n) => {
    i().notify("warning", o, n);
  },
  info: (o, n) => {
    i().notify("info", o, n);
  }
}, f = r("loading", () => {
  const o = a(null);
  return {
    setLoadingRef: (e) => {
      o.value = e;
    },
    showLoading: (e) => {
      o.value && o.value.show(e);
    },
    hideLoading: () => {
      o.value && o.value.hide();
    }
  };
}), m = {
  show: (o) => {
    f().showLoading(o);
  },
  hide: () => {
    f().hideLoading();
  }
}, l = r("confirm", {
  state: () => ({
    confirmRef: null
  }),
  actions: {
    setConfirmRef(o) {
      this.confirmRef = o;
    }
  }
}), h = {
  show: (o, n, s) => {
    const e = l().confirmRef;
    return !e || !e.ConfirmDialog ? (console.error("ConfirmDialog component is not registered"), Promise.resolve(!1)) : e.ConfirmDialog(o, n, s);
  }
};
export {
  f as a,
  l as b,
  h as c,
  m as l,
  g as n,
  i as u
};
//# sourceMappingURL=confirm-bR2JIO3i.js.map

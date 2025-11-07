import { defineStore as r } from "pinia";
import { ref as a } from "vue";
const i = r("notify", () => {
  const o = a(null);
  return {
    setNotifyRef: (e) => {
      o.value = e;
    },
    notify: (e, t, c) => {
      o.value && o.value.show(e, t, c);
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
    setLoadingRef: (t) => {
      o.value = t;
    },
    showLoading: (t) => {
      o.value && o.value.show(t);
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
  show: (o, n) => {
    const e = l().confirmRef;
    return !e || !e.ConfirmDialog ? (console.error("ConfirmDialog component is not registered"), Promise.resolve(!1)) : e.ConfirmDialog(o, n);
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
//# sourceMappingURL=confirm-C2_0K_cX.js.map

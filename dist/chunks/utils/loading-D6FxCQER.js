import { defineStore as s } from "pinia";
import { ref as t } from "vue";
const n = s("loading", () => {
  const o = t(null);
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
}), l = {
  show: (o) => {
    n().showLoading(o);
  },
  hide: () => {
    n().hideLoading();
  }
};
export {
  l,
  n as u
};
//# sourceMappingURL=loading-D6FxCQER.js.map

import { defineStore as i } from "pinia";
import { ref as c } from "vue";
const s = i("notify", () => {
  const o = c(null);
  return {
    setNotifyRef: (e) => {
      o.value = e;
    },
    notify: (e, r, f) => {
      o.value && o.value.show(e, r, f);
    }
  };
}), a = {
  success: (o, t) => {
    s().notify("success", o, t);
  },
  error: (o, t) => {
    s().notify("error", o, t);
  },
  warning: (o, t) => {
    s().notify("warning", o, t);
  },
  info: (o, t) => {
    s().notify("info", o, t);
  }
};
export {
  a as n,
  s as u
};
//# sourceMappingURL=notify-ChckS_Le.js.map

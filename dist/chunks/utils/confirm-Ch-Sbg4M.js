import { defineStore as i } from "pinia";
const s = i("confirm", {
  state: () => ({
    confirmRef: null
  }),
  actions: {
    setConfirmRef(o) {
      this.confirmRef = o;
    }
  }
}), c = {
  show: (o, e, n) => {
    const r = s().confirmRef;
    return !r || !r.ConfirmDialog ? (console.error("ConfirmDialog component is not registered"), Promise.resolve(!1)) : r.ConfirmDialog(o, e, n);
  }
};
export {
  c,
  s as u
};
//# sourceMappingURL=confirm-Ch-Sbg4M.js.map

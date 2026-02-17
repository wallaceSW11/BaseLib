import { computed as s } from "vue";
import { useDisplay as i } from "vuetify";
function u() {
  const o = i(), e = s(() => o.xs.value), t = s(() => o.smAndDown.value);
  return {
    isMobile: e,
    isMobileOrTablet: t
  };
}
export {
  u
};
//# sourceMappingURL=useBreakpoint-DnFIVluv.js.map

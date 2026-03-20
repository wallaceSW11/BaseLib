import { defineComponent as g, computed as c, reactive as y, ref as F, watch as V, resolveComponent as f, createBlock as G, openBlock as B, withCtx as i, createVNode as d } from "vue";
import { useI18n as E } from "vue-i18n";
import { _ as h } from "./inputs-CepField-D19j-V9y.js";
const x = /* @__PURE__ */ g({
  __name: "FullAddress",
  props: {
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    disabledFields: { type: Boolean, default: !1 },
    labels: { default: () => ({}) },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: p }) {
    const n = a, A = p;
    let u;
    try {
      ({ t: u } = E());
    } catch {
      u = (o) => o;
    }
    const m = c(() => ({
      zipCode: n.labels.zipCode ?? u("address.zipCode"),
      street: n.labels.street ?? u("address.street"),
      number: n.labels.number ?? u("address.number"),
      complement: n.labels.complement ?? u("address.complement"),
      neighborhood: n.labels.neighborhood ?? u("address.neighborhood"),
      city: n.labels.city ?? u("address.city"),
      state: n.labels.state ?? u("address.state")
    })), e = y({
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      ...n.modelValue
    }), v = F(!1), b = c(() => n.disabledFields && v.value);
    function P(o) {
      e.street = o.logradouro ?? "", e.neighborhood = o.bairro ?? "", e.city = o.localidade ?? "", e.state = o.uf ?? "", v.value = !0;
    }
    function R() {
      v.value = !1;
    }
    V(
      () => n.modelValue,
      (o) => Object.assign(e, o),
      { deep: !0 }
    ), V(
      e,
      (o) => A("update:modelValue", { ...o }),
      { deep: !0 }
    );
    const S = [
      { uf: "AC", name: "AC - Acre" },
      { uf: "AL", name: "AL - Alagoas" },
      { uf: "AP", name: "AP - Amapá" },
      { uf: "AM", name: "AM - Amazonas" },
      { uf: "BA", name: "BA - Bahia" },
      { uf: "CE", name: "CE - Ceará" },
      { uf: "DF", name: "DF - Distrito Federal" },
      { uf: "ES", name: "ES - Espírito Santo" },
      { uf: "GO", name: "GO - Goiás" },
      { uf: "MA", name: "MA - Maranhão" },
      { uf: "MT", name: "MT - Mato Grosso" },
      { uf: "MS", name: "MS - Mato Grosso do Sul" },
      { uf: "MG", name: "MG - Minas Gerais" },
      { uf: "PA", name: "PA - Pará" },
      { uf: "PB", name: "PB - Paraíba" },
      { uf: "PR", name: "PR - Paraná" },
      { uf: "PE", name: "PE - Pernambuco" },
      { uf: "PI", name: "PI - Piauí" },
      { uf: "RJ", name: "RJ - Rio de Janeiro" },
      { uf: "RN", name: "RN - Rio Grande do Norte" },
      { uf: "RS", name: "RS - Rio Grande do Sul" },
      { uf: "RO", name: "RO - Rondônia" },
      { uf: "RR", name: "RR - Roraima" },
      { uf: "SC", name: "SC - Santa Catarina" },
      { uf: "SP", name: "SP - São Paulo" },
      { uf: "SE", name: "SE - Sergipe" },
      { uf: "TO", name: "TO - Tocantins" }
    ];
    return (o, l) => {
      const s = f("v-col"), r = f("v-text-field"), C = f("v-select"), M = f("v-row");
      return B(), G(M, null, {
        default: i(() => [
          d(s, {
            cols: "12",
            md: "4"
          }, {
            default: i(() => [
              d(h, {
                modelValue: e.zipCode,
                "onUpdate:modelValue": l[0] || (l[0] = (t) => e.zipCode = t),
                disabled: a.disabled,
                onAddressFound: P,
                onAddressNotFound: R
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }),
          d(s, {
            cols: "12",
            md: "8"
          }, {
            default: i(() => [
              d(r, {
                modelValue: e.street,
                "onUpdate:modelValue": l[1] || (l[1] = (t) => e.street = t),
                label: m.value.street,
                disabled: a.disabled || b.value,
                variant: a.variant
              }, null, 8, ["modelValue", "label", "disabled", "variant"])
            ]),
            _: 1
          }),
          d(s, {
            cols: "12",
            md: "3"
          }, {
            default: i(() => [
              d(r, {
                modelValue: e.number,
                "onUpdate:modelValue": l[2] || (l[2] = (t) => e.number = t),
                label: m.value.number,
                disabled: a.disabled,
                variant: a.variant
              }, null, 8, ["modelValue", "label", "disabled", "variant"])
            ]),
            _: 1
          }),
          d(s, {
            cols: "12",
            md: "5"
          }, {
            default: i(() => [
              d(r, {
                modelValue: e.complement,
                "onUpdate:modelValue": l[3] || (l[3] = (t) => e.complement = t),
                label: m.value.complement,
                disabled: a.disabled,
                variant: a.variant
              }, null, 8, ["modelValue", "label", "disabled", "variant"])
            ]),
            _: 1
          }),
          d(s, {
            cols: "12",
            md: "4"
          }, {
            default: i(() => [
              d(r, {
                modelValue: e.neighborhood,
                "onUpdate:modelValue": l[4] || (l[4] = (t) => e.neighborhood = t),
                label: m.value.neighborhood,
                disabled: a.disabled || b.value,
                variant: a.variant
              }, null, 8, ["modelValue", "label", "disabled", "variant"])
            ]),
            _: 1
          }),
          d(s, {
            cols: "12",
            md: "6"
          }, {
            default: i(() => [
              d(r, {
                modelValue: e.city,
                "onUpdate:modelValue": l[5] || (l[5] = (t) => e.city = t),
                label: m.value.city,
                disabled: a.disabled || b.value,
                variant: a.variant
              }, null, 8, ["modelValue", "label", "disabled", "variant"])
            ]),
            _: 1
          }),
          d(s, {
            cols: "12",
            md: "6"
          }, {
            default: i(() => [
              d(C, {
                modelValue: e.state,
                "onUpdate:modelValue": l[6] || (l[6] = (t) => e.state = t),
                label: m.value.state,
                items: S,
                "item-title": "name",
                "item-value": "uf",
                disabled: a.disabled || b.value,
                variant: a.variant
              }, null, 8, ["modelValue", "label", "disabled", "variant"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  x as _
};
//# sourceMappingURL=inputs-FullAddress-CzQrn6sz.js.map

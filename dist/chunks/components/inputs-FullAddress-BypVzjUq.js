import { defineComponent as C, reactive as p, ref as M, computed as F, watch as b, resolveComponent as s, createBlock as G, openBlock as g, withCtx as t, createVNode as n } from "vue";
import { _ as B } from "./inputs-CepField-DwNeO2Ij.js";
const N = /* @__PURE__ */ C({
  __name: "FullAddress",
  props: {
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    disabledFields: { type: Boolean, default: !1 },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: v }) {
    const r = a, V = v, e = p({
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      ...r.modelValue
    }), f = M(!1), m = F(() => r.disabledFields && f.value);
    function c(o) {
      e.street = o.logradouro ?? "", e.neighborhood = o.bairro ?? "", e.city = o.localidade ?? "", e.state = o.uf ?? "", f.value = !0;
    }
    function A() {
      f.value = !1;
    }
    b(
      () => r.modelValue,
      (o) => Object.assign(e, o),
      { deep: !0 }
    ), b(
      e,
      (o) => V("update:modelValue", { ...o }),
      { deep: !0 }
    );
    const P = [
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
      const u = s("v-col"), i = s("v-text-field"), S = s("v-select"), R = s("v-row");
      return g(), G(R, null, {
        default: t(() => [
          n(u, {
            cols: "12",
            sm: "4"
          }, {
            default: t(() => [
              n(B, {
                modelValue: e.zipCode,
                "onUpdate:modelValue": l[0] || (l[0] = (d) => e.zipCode = d),
                label: "ZIP Code",
                rules: [],
                disabled: a.disabled,
                onAddressFound: c,
                onAddressNotFound: A
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
          }),
          n(u, {
            cols: "12",
            sm: "8"
          }, {
            default: t(() => [
              n(i, {
                modelValue: e.street,
                "onUpdate:modelValue": l[1] || (l[1] = (d) => e.street = d),
                label: "Street",
                disabled: a.disabled || m.value,
                variant: a.variant
              }, null, 8, ["modelValue", "disabled", "variant"])
            ]),
            _: 1
          }),
          n(u, {
            cols: "12",
            sm: "3"
          }, {
            default: t(() => [
              n(i, {
                modelValue: e.number,
                "onUpdate:modelValue": l[2] || (l[2] = (d) => e.number = d),
                label: "Number",
                disabled: a.disabled,
                variant: a.variant
              }, null, 8, ["modelValue", "disabled", "variant"])
            ]),
            _: 1
          }),
          n(u, {
            cols: "12",
            sm: "5"
          }, {
            default: t(() => [
              n(i, {
                modelValue: e.complement,
                "onUpdate:modelValue": l[3] || (l[3] = (d) => e.complement = d),
                label: "Complement",
                disabled: a.disabled,
                variant: a.variant
              }, null, 8, ["modelValue", "disabled", "variant"])
            ]),
            _: 1
          }),
          n(u, {
            cols: "12",
            sm: "4"
          }, {
            default: t(() => [
              n(i, {
                modelValue: e.neighborhood,
                "onUpdate:modelValue": l[4] || (l[4] = (d) => e.neighborhood = d),
                label: "Neighborhood",
                disabled: a.disabled || m.value,
                variant: a.variant
              }, null, 8, ["modelValue", "disabled", "variant"])
            ]),
            _: 1
          }),
          n(u, {
            cols: "12",
            sm: "6"
          }, {
            default: t(() => [
              n(i, {
                modelValue: e.city,
                "onUpdate:modelValue": l[5] || (l[5] = (d) => e.city = d),
                label: "City",
                disabled: a.disabled || m.value,
                variant: a.variant
              }, null, 8, ["modelValue", "disabled", "variant"])
            ]),
            _: 1
          }),
          n(u, {
            cols: "12",
            sm: "6"
          }, {
            default: t(() => [
              n(S, {
                modelValue: e.state,
                "onUpdate:modelValue": l[6] || (l[6] = (d) => e.state = d),
                label: "State",
                items: P,
                "item-title": "name",
                "item-value": "uf",
                disabled: a.disabled || m.value,
                variant: a.variant
              }, null, 8, ["modelValue", "disabled", "variant"])
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
  N as _
};
//# sourceMappingURL=inputs-FullAddress-BypVzjUq.js.map

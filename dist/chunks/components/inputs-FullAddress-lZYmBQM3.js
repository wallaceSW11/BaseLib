import { defineComponent as C, computed as V, reactive as M, ref as g, watch as c, createBlock as y, openBlock as F, unref as d, withCtx as m, createVNode as t } from "vue";
import { useI18n as G } from "vue-i18n";
import { VRow as B, VCol as s, VTextField as b, VSelect as E } from "vuetify/components";
import { _ as h } from "./inputs-CepField-BsWHPICW.js";
const N = /* @__PURE__ */ C({
  __name: "FullAddress",
  props: {
    modelValue: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    disabledFields: { type: Boolean, default: !1 },
    labels: { default: () => ({}) },
    variant: { default: "underlined" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: A }) {
    const u = a, S = A;
    let i;
    try {
      ({ t: i } = G({ useScope: "global" }));
    } catch {
      i = (n) => n;
    }
    const r = V(() => ({
      zipCode: u.labels.zipCode ?? i("address.zipCode"),
      street: u.labels.street ?? i("address.street"),
      number: u.labels.number ?? i("address.number"),
      complement: u.labels.complement ?? i("address.complement"),
      neighborhood: u.labels.neighborhood ?? i("address.neighborhood"),
      city: u.labels.city ?? i("address.city"),
      state: u.labels.state ?? i("address.state")
    })), e = M({
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      ...u.modelValue
    }), v = g(!1), f = V(() => u.disabledFields && v.value);
    function P(n) {
      e.street = n.logradouro ?? "", e.neighborhood = n.bairro ?? "", e.city = n.localidade ?? "", e.state = n.uf ?? "", v.value = !0;
    }
    function R() {
      v.value = !1;
    }
    c(
      () => u.modelValue,
      (n) => Object.assign(e, n),
      { deep: !0 }
    ), c(
      e,
      (n) => S("update:modelValue", { ...n }),
      { deep: !0 }
    );
    const p = [
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
    return (n, l) => (F(), y(d(B), null, {
      default: m(() => [
        t(d(s), {
          cols: "12",
          md: "4"
        }, {
          default: m(() => [
            t(h, {
              modelValue: e.zipCode,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => e.zipCode = o),
              disabled: a.disabled,
              onAddressFound: P,
              onAddressNotFound: R
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        t(d(s), {
          cols: "12",
          md: "8"
        }, {
          default: m(() => [
            t(d(b), {
              modelValue: e.street,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => e.street = o),
              label: r.value.street,
              disabled: a.disabled || f.value,
              variant: a.variant
            }, null, 8, ["modelValue", "label", "disabled", "variant"])
          ]),
          _: 1
        }),
        t(d(s), {
          cols: "12",
          md: "3"
        }, {
          default: m(() => [
            t(d(b), {
              modelValue: e.number,
              "onUpdate:modelValue": l[2] || (l[2] = (o) => e.number = o),
              label: r.value.number,
              disabled: a.disabled,
              variant: a.variant
            }, null, 8, ["modelValue", "label", "disabled", "variant"])
          ]),
          _: 1
        }),
        t(d(s), {
          cols: "12",
          md: "5"
        }, {
          default: m(() => [
            t(d(b), {
              modelValue: e.complement,
              "onUpdate:modelValue": l[3] || (l[3] = (o) => e.complement = o),
              label: r.value.complement,
              disabled: a.disabled,
              variant: a.variant
            }, null, 8, ["modelValue", "label", "disabled", "variant"])
          ]),
          _: 1
        }),
        t(d(s), {
          cols: "12",
          md: "4"
        }, {
          default: m(() => [
            t(d(b), {
              modelValue: e.neighborhood,
              "onUpdate:modelValue": l[4] || (l[4] = (o) => e.neighborhood = o),
              label: r.value.neighborhood,
              disabled: a.disabled || f.value,
              variant: a.variant
            }, null, 8, ["modelValue", "label", "disabled", "variant"])
          ]),
          _: 1
        }),
        t(d(s), {
          cols: "12",
          md: "6"
        }, {
          default: m(() => [
            t(d(b), {
              modelValue: e.city,
              "onUpdate:modelValue": l[5] || (l[5] = (o) => e.city = o),
              label: r.value.city,
              disabled: a.disabled || f.value,
              variant: a.variant
            }, null, 8, ["modelValue", "label", "disabled", "variant"])
          ]),
          _: 1
        }),
        t(d(s), {
          cols: "12",
          md: "6"
        }, {
          default: m(() => [
            t(d(E), {
              modelValue: e.state,
              "onUpdate:modelValue": l[6] || (l[6] = (o) => e.state = o),
              label: r.value.state,
              items: p,
              "item-title": "name",
              "item-value": "uf",
              disabled: a.disabled || f.value,
              variant: a.variant
            }, null, 8, ["modelValue", "label", "disabled", "variant"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  N as _
};
//# sourceMappingURL=inputs-FullAddress-lZYmBQM3.js.map

import { computed as s } from "vue";
import { useI18n as d } from "vue-i18n";
const m = {
  common: {
    loading: "Carregando...",
    save: "Salvar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    delete: "Excluir",
    edit: "Editar",
    close: "Fechar",
    back: "Voltar",
    next: "Próximo",
    yes: "Sim",
    no: "Não"
  },
  validation: {
    required: "Este campo é obrigatório",
    invalidEmail: "Formato de e-mail inválido"
  },
  address: {
    zipCode: "CEP",
    street: "Logradouro",
    number: "Número",
    complement: "Complemento",
    neighborhood: "Bairro",
    city: "Cidade",
    state: "Estado"
  }
}, u = {
  common: {
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    close: "Close",
    back: "Back",
    next: "Next",
    yes: "Yes",
    no: "No"
  },
  validation: {
    required: "This field is required",
    invalidEmail: "Invalid email format"
  },
  address: {
    zipCode: "ZIP Code",
    street: "Street",
    number: "Number",
    complement: "Complement",
    neighborhood: "Neighborhood",
    city: "City",
    state: "State"
  }
}, f = {
  "pt-BR": m,
  "en-US": u
}, v = [
  { code: "pt-BR", name: "Português (Brasil)", countryCode: "BR" },
  { code: "en-US", name: "English (US)", countryCode: "US" }
], S = "pt-BR";
function g(a) {
  const e = localStorage.getItem("locale");
  return e && a.some((t) => t.code === e) ? e : null;
}
function b(a) {
  const { locale: e, t } = d(), l = a || v, n = s({
    get: () => e.value,
    set: (o) => {
      e.value = o, localStorage.setItem("locale", o);
    }
  }), r = l, i = (o) => {
    n.value = o;
  }, c = g(l);
  return c && (e.value = c), {
    locale: n,
    locales: r,
    setLocale: i,
    t
  };
}
export {
  v as a,
  S as b,
  f as d,
  b as u
};
//# sourceMappingURL=useLocale-DGKqGiq_.js.map

import { computed as r } from "vue";
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
  }
}, L = {
  "pt-BR": m,
  "en-US": u
}, v = [
  { code: "pt-BR", name: "Português (Brasil)", countryCode: "BR" },
  { code: "en-US", name: "English (US)", countryCode: "US" }
], p = "pt-BR";
function f(o) {
  const e = localStorage.getItem("locale");
  return e && o.some((l) => l.code === e) ? e : null;
}
function C(o) {
  const { locale: e, t: l } = d(), t = o || v, c = r({
    get: () => e.value,
    set: (a) => {
      e.value = a, localStorage.setItem("locale", a);
    }
  }), i = t, s = (a) => {
    c.value = a;
  }, n = f(t);
  return n && (e.value = n), {
    locale: c,
    locales: i,
    setLocale: s,
    t: l
  };
}
export {
  v as a,
  p as b,
  L as d,
  C as u
};
//# sourceMappingURL=useLocale-CPLXo626.js.map

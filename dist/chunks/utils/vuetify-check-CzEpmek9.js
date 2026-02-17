function u(t) {
  const s = t._context, n = s?.provides, c = t.config.globalProperties, i = n?.vuetify || n?.$vuetify || c?.$vuetify || c?.vuetify, e = n && Object.getOwnPropertySymbols(n).some(
    (l) => {
      const r = l.toString();
      return r.includes("vuetify") || r.includes("Vuetify");
    }
  ), o = s?.components && Object.keys(s.components).some((l) => l.startsWith("V"));
  i || e || o ? console.log("[BaseLib] ✅ Vuetify detectado com sucesso") : console.warn(
    `[BaseLib] ⚠️ Vuetify não detectado!
Certifique-se de chamar app.use(vuetify) ANTES de setupLib(app).
Exemplo:
  import { createVuetify } from 'vuetify'
  const vuetify = createVuetify()
  app.use(vuetify)
  setupLib(app)`
  );
}
function f() {
  console.group("🔍 Vuetify Debug Info");
  const t = document.querySelectorAll(".v-overlay-container");
  console.log(`📦 Overlay containers encontrados: ${t.length}`), t.forEach((e, o) => {
    console.log(`  [${o}]`, e);
  });
  const s = document.querySelectorAll(".v-application");
  console.log(`🎨 v-application encontrados: ${s.length}`), s.forEach((e, o) => {
    console.log(`  [${o}]`, e);
  });
  const n = document.querySelectorAll(".v-overlay");
  console.log(`📊 Overlays ativos: ${n.length}`), n.forEach((e, o) => {
    const a = e.classList.contains("v-overlay--active");
    console.log(`  [${o}] Active: ${a}`, e);
  });
  const c = document.querySelectorAll(".v-menu");
  console.log(`🍔 Menus encontrados: ${c.length}`), c.forEach((e, o) => {
    console.log(`  [${o}]`, e);
  });
  const i = document.querySelectorAll(".v-select");
  console.log(`📋 v-select encontrados: ${i.length}`), i.forEach((e, o) => {
    console.log(`  [${o}]`, e);
  }), t.length > 1 && console.warn(
    `⚠️ MÚLTIPLOS OVERLAY CONTAINERS DETECTADOS!
Isso indica que pode haver múltiplas instâncias do Vuetify.
Solução: Certifique-se de ter apenas uma instância do Vuetify registrada.`
  ), t.length === 0 && console.warn(
    `⚠️ NENHUM OVERLAY CONTAINER ENCONTRADO!
O Vuetify pode não estar inicializado corretamente.
Verifique se você chamou app.use(vuetify) no main.ts`
  ), console.groupEnd();
}
export {
  f as d,
  u as e
};
//# sourceMappingURL=vuetify-check-CzEpmek9.js.map

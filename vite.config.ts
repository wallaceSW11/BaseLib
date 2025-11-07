import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    // vite-plugin-vuetify removido do build da lib
    // O Vuetify deve ser fornecido pelo projeto host
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "components/index": resolve(__dirname, "src/components/index.ts"),
        "composables/index": resolve(__dirname, "src/composables/index.ts"),
        "utils/index": resolve(__dirname, "src/utils/index.ts"),
        "stores/index": resolve(__dirname, "src/stores/index.ts"),
        "locales/index": resolve(__dirname, "src/locales/index.ts"),
        "plugins/index": resolve(__dirname, "src/plugins/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-i18n",
        "vuetify",
        "vuetify/components",
        "vuetify/directives",
        "pinia",
        "axios",
        "@mdi/font",
      ],
      output: {
        globals: {
          vue: "Vue",
          "vue-i18n": "VueI18n",
          vuetify: "Vuetify",
          pinia: "Pinia",
          axios: "axios",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name || "";
        },
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

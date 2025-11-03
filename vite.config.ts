import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "BaseLib",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
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
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

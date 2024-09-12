import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mini-browser-start-page/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  // },
});

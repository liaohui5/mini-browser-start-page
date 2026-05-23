import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],

  resolve: {
    // 路径别名配置
    alias: {
      "@": "/src/",
    },
  },

  build: {
    // 打包相关配置: https://cn.vite.dev/config/build-options
    target: "es2020",
    cssTarget: "chrome80",
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1024,
  },
});

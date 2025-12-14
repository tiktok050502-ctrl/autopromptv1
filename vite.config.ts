/// <reference types="node" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// 👇 Cấu hình chuẩn không lỗi đỏ
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    base: "./", // ⚠️ Bắt buộc cho Electron (tránh trắng màn)
    build: {
      outDir: "dist",
    },
    define: {
      "process.env": {}, // tránh lỗi "process is not defined"
    },
  };
});

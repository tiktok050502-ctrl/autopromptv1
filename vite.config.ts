/// <reference types="node" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// ⚙️ Cấu hình Vite tương thích Electron + GitHub Pages
export default defineConfig(({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Khi build (deploy) thì mode = "production"
  const isBuildForWeb = mode === "production";

  return {
    plugins: [react()],
    // ✅ Base cho GitHub Pages (chạy trên /autopromptv1/)
    base: isBuildForWeb ? "/autopromptv1/" : "./",
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
    define: {
      "process.env": {},
    },
  };
});

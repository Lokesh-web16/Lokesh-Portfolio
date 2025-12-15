// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  // This must match your repo name: Lokesh-Portfolio
  base: command === "serve" ? "/" : "/Lokesh-Portfolio/", // ✅ Correct
  plugins: [react()],
}));
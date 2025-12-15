import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  // This says: "If I'm running locally, use '/'. If I'm building, use '/Lokesh-Portfolio/'"
  base: command === "serve" ? "/" : "/Lokesh-Portfolio/",
  plugins: [react()],
}));

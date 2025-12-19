import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Base path must match your repository name: Lokesh-Portfolio-Web
  base: "/Lokesh-Portfolio/",
  plugins: [react()],
});
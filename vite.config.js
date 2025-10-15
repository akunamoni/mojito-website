// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// ✅ Use export default instead of module.exports
export default defineConfig({
  plugins: [tailwindcss()],
});
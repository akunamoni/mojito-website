// vite.config.js
import crypto from "node:crypto";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

if (!crypto.hash) {
  crypto.hash = (alg, data) =>
    crypto.createHash(alg).update(data).digest("hex");
}


// ✅ Use export default instead of module.exports
export default defineConfig({
  plugins: [tailwindcss()],
});
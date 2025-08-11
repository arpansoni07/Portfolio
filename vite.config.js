import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace below with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/arpan_portfolio/", // important!
});

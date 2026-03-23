import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    // If we are deploying to GitHub (production mode), use /portfolio/
    // Otherwise (Vercel or Local), use /
    base: mode === "production" ? "/portfolio/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

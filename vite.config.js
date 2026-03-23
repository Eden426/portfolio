import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    // If we are on GitHub Actions (deploying to GitHub), use /portfolio/
    // If we are on Vercel or Local, use /
    base: process.env.GITHUB_ACTIONS === "true" ? "/portfolio/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global `test` and `expect`
    environment: "jsdom", // Use jsdom for testing React components
    setupFiles: "./vitest.setup.js", // Path to the setup file
    css: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // exit if port 3000 is in use (to avoid CORS errors; server expects port 3000)
    strict: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file created earlier
    setupFiles: "./src/setup.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here because often people want to parse CSS in tests.
    css: true,
  },
});

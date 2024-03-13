import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mrbc-evangelism/",
  build: {
    outDir: "./_site",
  },
});

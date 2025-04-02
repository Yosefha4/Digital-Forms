import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/devapi": {
        target: "https://ol-dev-app1:30600/rest/api/submit-job/",
        rewrite: (path) => path.replace(/^\/devapi/, ""),
        secure: false,
      },
    },
  },
});

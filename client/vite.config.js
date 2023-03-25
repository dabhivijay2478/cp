import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/signupserver": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/loginserver": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/addnewuser": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/addnewclub": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/addnewevent": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/data": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/upload": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/fileinfo": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/pdfs": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/addmutilpe": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});

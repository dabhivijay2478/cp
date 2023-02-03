import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/loginuser": {
        target: "http://localhost:5000/loginuser",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/loginuser/, ''),
      },"/register": {
        target: "http://localhost:5000/register",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/register/, ''),
      },
      "/admindash": {
        target: "http://localhost:5000/admindash",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/admindash/, ''),
      },
      
    }
  },
  plugins: [react()],
});

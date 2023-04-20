import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/signupserver": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/loginserver": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/addnewuser": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/addnewclub": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/addnewevent": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/data": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/upload": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/fileinfo": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/pdfs": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/addmutilpe": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/sendemail": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/Contactus": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/contactusreport": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/Eventreport": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/users": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/changepassword": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/lastevent": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/registerstudentevent": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/lastregisterstudent": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/lastcontactus": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/certificates": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/ClubStudentReport": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/deleteuser": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
      "/updateuser": {
        target: "https://cpserver.onrender.com",
        changeOrigin: true,
      },
    },
  },
});

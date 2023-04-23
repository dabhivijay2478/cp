import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/signupserver": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/loginserver": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/addnewuser": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/addnewclub": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/addnewevent": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/data": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/upload": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/fileinfo": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/pdfs": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/addmutilpe": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/sendemail": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/Contactus": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/contactusreport": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/Eventreport": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/clubreport": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/users": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/changepassword": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/lastevent": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/registerstudentevent": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/lastregisterstudent": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/lastcontactus": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/certificates": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/ClubStudentReport": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/deleteuser": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/updateuser": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/deleteevents": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/deleteContactus": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
      "/deleteClubName": {
        target: " http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});

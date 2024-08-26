import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],

  define: {
    "process.env.VITE_IP_API_KEY": JSON.stringify(process.env.VITE_IP_API_KEY),
  },
});

import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),svgr({
      // svgr options
      svgrOptions: { icon: true }
    })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})


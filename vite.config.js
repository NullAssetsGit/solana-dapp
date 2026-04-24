# Обновить vite.config.js:
'import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
export default defineConfig({
  plugins: [react()],
  build: { 
    rollupOptions: { 
      external: [
        "rpc-websockets",
        "i18next",
        "react-i18next"
      ] 
    } 
  }
})' | Out-File -FilePath vite.config.js -Encoding utf8

npm run build
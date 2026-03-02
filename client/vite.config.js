import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss(),],
  server: {
    allowedHosts: ['5d01db25e227.ngrok-free.app'],
  }
})

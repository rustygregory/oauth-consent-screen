import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Override for GitHub Pages: VITE_BASE=/oauth-consent-screen/ npm run build
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite settings: React support + Tailwind support
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
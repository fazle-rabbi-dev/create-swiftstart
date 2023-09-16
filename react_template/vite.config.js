import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      context: "/src/context-api",
      utils: "/src/utils",
      hooks: "/src/hooks",
      styles: "/src/styles",
    },
  }
})

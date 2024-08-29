import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfig from 'vite-tsconfig-paths'

import tailwindcss from 'tailwindcss'

const contemberPackages = ['@contember/interface', '@contember/react-uploader']

export default defineConfig({
  base: '/plate-content-editor/',
  optimizeDeps: {
    exclude: contemberPackages,
  },
  build: {
    minify: 'terser',
    emptyOutDir: true,
  },

  plugins: [react(), tsconfig()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})

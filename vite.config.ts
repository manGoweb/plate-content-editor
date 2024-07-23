import path from 'path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import tsconfig from 'vite-tsconfig-paths'

export default defineConfig({
  
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.tsx'),
      name: 'editor',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [react(), tsconfig(), dts({ rollupTypes: true, outDir: 'dist' })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})

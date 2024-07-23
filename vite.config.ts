import path from 'path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import tsconfig from 'vite-tsconfig-paths'

const contemberPackages = ['@contember/interface', '@contember/react-uploader']
export default defineConfig({
  optimizeDeps: {
    exclude: contemberPackages,
  },
  build: {
    rollupOptions: {
      input: [
        path.resolve(__dirname, 'lib/plate.tsx'),
        path.resolve(__dirname, 'lib/contember/plate-contember.tsx'),
      ],
      external: ['react', 'react-dom', 'tailwindcss', ...contemberPackages],
      output: {
        format: 'es',
        dir: 'dist',
        assetFileNames: '[name][extname]',
        entryFileNames: '[name].js',
        preserveModules: false,
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

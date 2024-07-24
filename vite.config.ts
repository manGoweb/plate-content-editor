import path from 'path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfig from 'vite-tsconfig-paths'

import tailwindcss from 'tailwindcss'

const contemberPackages = ['@contember/interface', '@contember/react-uploader']

const entries = {
  plate: path.resolve(__dirname, 'lib/plate.tsx'),

  'plate-contember': path.resolve(__dirname, 'lib/plate-contember.tsx'),

  'plate-readonly': path.resolve(__dirname, 'lib/plate-readonly.tsx'),
}

export default defineConfig({
  optimizeDeps: {
    exclude: contemberPackages,
  },
  build: {
    lib: {
      entry: entries,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', ...contemberPackages],
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

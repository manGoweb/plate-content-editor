import path from 'path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfig from 'vite-tsconfig-paths'

import preserveDirectives from 'rollup-plugin-preserve-directives'

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
    minify: 'terser',
    terserOptions: {
      compress: {
        directives: false,
      },
    },
    lib: {
      entry: entries,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', ...contemberPackages],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('node_modules')) {
            return chunkInfo.name.replace('node_modules', 'external') + '.js'
          }

          return '[name].js'
        },
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
  plugins: [react(), tsconfig(), dts({ rollupTypes: true, outDir: 'dist' }), preserveDirectives()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})

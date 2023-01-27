import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'openVectorEditor',
      fileName: 'index',
    },
    rollupOptions: {
      external: [],
      output: {},
    },
  },
  resolve: {
    alias: {
      stream: 'stream-browserify',
    }
  },
  server: {
    host: 'localhost',
    port: 3344,
    open: true
  }
})
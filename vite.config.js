import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'openVectorEditor',
      fileName: 'index',
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
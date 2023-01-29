import { resolve } from 'path'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'openVectorEditor',
      fileName: 'index',
    },
    target: 'esnext',
    rollupOptions: {
      external: ['react', 'react-dom', 'redux', 'react-redux'],
    }
  },
  plugins: [
    nodePolyfills({ protocolImports: true }),
  ],
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
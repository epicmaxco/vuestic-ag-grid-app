import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '~@ag-grid-community': require('path').resolve(__dirname, 'node_modules/@ag-grid-community'),
    },
  },
})

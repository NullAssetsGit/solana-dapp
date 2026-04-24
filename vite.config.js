import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  build: {
    rollupOptions: {
      external: [
        'rpc-websockets',
        'i18next',
        '@solana/web3.js',
        'buffer',
        'crypto',
        'stream'
      ]
    }
  },
  optimizeDeps: {
    exclude: ['@solana/web3.js']
  }
})

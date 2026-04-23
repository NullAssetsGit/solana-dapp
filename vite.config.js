// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  

  define: {
    global: 'globalThis',
    'process.env': {}
  },

  
  build: {
    rollupOptions: {
      external: [
        
        'rpc-websockets',
        'rpc-websockets/dist/lib/client',
        'rpc-websockets/dist/lib/client/websocket.browser',
        'rpc-websockets/dist/lib/client/websocket.node',
        
        
        'buffer',
        'crypto',
        'stream',
        'events',
        'util',
        'assert',
        
       
        '@solana/web3.js/nodewalletAdapter'
      ]
    },
    target: 'esnext' 
  },

 
  optimizeDeps: {
    exclude: [
      'rpc-websockets',
      '@solana/web3.js'
    ]
  },

  
  resolve: {
    alias: {
      
      'buffer': 'buffer'
    }
  }
})
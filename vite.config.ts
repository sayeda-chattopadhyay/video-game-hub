import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — changes least often, cached longest
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Chakra UI + its peer deps (framer-motion, emotion)
          'vendor-chakra': [
            '@chakra-ui/react',
            '@emotion/react',
            '@emotion/styled',
            'framer-motion',
          ],
          // Data fetching
          'vendor-query': ['@tanstack/react-query'],
          // HTTP client
          'vendor-axios': ['axios'],
        },
      },
    },
  },
})

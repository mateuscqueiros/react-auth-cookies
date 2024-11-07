import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
>>>>>>> bba05ded4e7efdd6f9061c76be16fd3a2121e647
})

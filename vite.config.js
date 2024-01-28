import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../tarello_back_amir_greenberg/public',
    emptyOutDir: true
  }
})

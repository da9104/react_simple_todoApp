import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/react_simple_todoApp",
  plugins: [react()],
})

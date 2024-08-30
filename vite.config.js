import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://myshyt32.github.io/react-stubs/',
  plugins: [react()],
  assetsInclude: ["**/*.*"]
})

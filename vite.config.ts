import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      // Injecting the specific API Key provided by the user
      'process.env': {
        API_KEY: 'AIzaSyDrt4wdJ5BZijpLJPwRIm5wT5d80A6Mg6s'
      }
    }
  }
})
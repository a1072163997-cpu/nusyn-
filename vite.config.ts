import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // By defining 'process.env' as an object, we prevent "ReferenceError: process is not defined"
      // which is the most common cause of the "White Screen" in Vite apps using legacy Node.js patterns.
      // We also ensure API_KEY is at least an empty string if not found, to prevent build/runtime undefined errors.
      'process.env': {
        API_KEY: env.API_KEY || ''
      }
    }
  }
})
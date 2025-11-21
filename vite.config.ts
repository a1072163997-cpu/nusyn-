import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量，允许读取 .env 文件中的 API_KEY
  // Fix: Cast process to any to handle missing type definition for cwd()
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // 这里的关键作用是：在构建时，把代码里的 "process.env.API_KEY" 
      // 直接替换成环境变量里的真实值，防止浏览器报错 "process is not defined"
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
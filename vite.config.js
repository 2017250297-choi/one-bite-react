import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port : 3000,
    // https://velog.io/@goeun23/vitedocker-%EC%84%9C%EB%B2%84-%EB%9D%84%EC%9A%B0%EA%B8%B0
    host: "0.0.0.0",
  }

})

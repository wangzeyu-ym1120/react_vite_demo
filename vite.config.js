import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig(mode => ({
  root: process.cwd(),
  base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
  publicDir: 'public',
  resolve: {
    alias: [
      { find: '@', replacement: resolve(process.cwd(), 'src') },
      { find: 'pages', replacement: resolve(process.cwd(), 'src/pages') },
      { find: 'store', replacement: resolve(process.cwd(), 'src/store') },
      { find: 'utils', replacement: resolve(process.cwd(), 'src/utils') },
      { find: 'assets', replacement: resolve(process.cwd(), 'src/assets') },
      { find: 'components', replacement: resolve(process.cwd(), 'src/components') }
    ]
  },
  plugins: [
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/css/style.css';`
      }
    },
  }
}))

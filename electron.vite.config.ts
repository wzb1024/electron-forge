import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  main: {
    build: {
      outDir: 'out/main',
      lib: {
        entry: 'electron/main.cjs'
      },
      rollupOptions: {
        external: ['electron']
      }
    }
  },
  preload: {
    build: {
      outDir: 'out/preload',
      lib: {
        entry: 'electron/preload.cjs'
      },
      rollupOptions: {
        external: ['electron']
      }
    }
  },
  renderer: {
    root: '.',
    base: './',
    server: {
      port: 5173
    },
    build: {
      outDir: 'out/renderer',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html')
        }
      }
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}) 
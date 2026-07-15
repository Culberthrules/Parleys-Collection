import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_IMAGES_DIR = path.join(__dirname, 'public/images')
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i
const VIRTUAL_MODULE_ID = 'virtual:public-images'
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`

function readPublicImageFiles() {
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) return []

  return fs
    .readdirSync(PUBLIC_IMAGES_DIR)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
}

/** Exposes every image in public/images/ to the app — no manual manifest needed. */
function publicImagesPlugin() {
  return {
    name: 'public-images-catalog',
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_VIRTUAL_MODULE_ID
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return `export default ${JSON.stringify(readPublicImageFiles())}`
      }
    },
    configureServer(server) {
      server.watcher.add(PUBLIC_IMAGES_DIR)

      const refreshCatalog = (file) => {
        if (!file.startsWith(PUBLIC_IMAGES_DIR) || !IMAGE_EXT.test(file)) return

        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.on('add', refreshCatalog)
      server.watcher.on('unlink', refreshCatalog)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), publicImagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@context': path.resolve(__dirname, './src/context'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Vite 8 / Rolldown expects a function, not an object map
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('react-router-dom') || id.includes('react-router')) {
            return 'router-vendor'
          }
          if (id.includes('react-dom') || id.includes('/react/')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})

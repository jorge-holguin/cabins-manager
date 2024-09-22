import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define la carpeta de salida de la compilación
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)), // Resuelve la ruta de 'index.html'
      },
      output: {
        manualChunks: undefined, // Opcional: Evita fragmentos adicionales si no son necesarios
      },
    },
    emptyOutDir: true, // Limpia la carpeta dist antes de cada build
  },
  server: {
    port: 3000, // Define el puerto para el entorno de desarrollo si es necesario
  },
})

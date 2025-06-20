import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open in browser
    port: 5173  // Default port (change if needed)
  },
  build: {
    outDir: 'dist', // Default output folder
    sourcemap: true // Helpful for debugging production issues
  },
  resolve: {
    alias: {
      '@': '/src', // Allows imports like "@/components/MyComponent"
    }
  }
});

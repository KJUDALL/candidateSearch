import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './',  // Ensure it looks in the correct directory for your .env files
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: parseInt(process.env.VITE_PORT || '3001'), // Access the VITE_PORT variable from .env
  },
  preview: {
    host: '0.0.0.0', // Same for the preview server
    port: parseInt(process.env.VITE_PORT || '3001'),
  },
});

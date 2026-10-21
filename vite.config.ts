import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `/api` always goes to the serverless function in development. `npm run dev`
// starts it on 8787 and sets DEV_API_PROXY; `npm run dev:web` uses the default.
const apiTarget = process.env.DEV_API_PROXY ?? 'http://127.0.0.1:8787';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { target: apiTarget, changeOrigin: true },
    },
  },
});

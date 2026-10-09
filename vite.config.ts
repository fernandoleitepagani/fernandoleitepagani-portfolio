import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiProxy = process.env.DEV_API_PROXY;

export default defineConfig({
  plugins: [react()],
  server: apiProxy
    ? {
        proxy: {
          '/api': { target: apiProxy, changeOrigin: true },
        },
      }
    : undefined,
});

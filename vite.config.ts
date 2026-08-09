import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      Sitemap({
        hostname: 'https://glimsimagingcenter1.com',
        dynamicRoutes: ['/services', '/prep', '/about', '/contact'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR can be disabled by setting DISABLE_HMR=true.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

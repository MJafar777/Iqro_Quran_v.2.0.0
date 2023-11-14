import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    // ---------- Local server ----------
    // __API__: JSON.stringify('http://localhost:8000'),

    // ---------- Real server ----------
    __API__: JSON.stringify('http://iqro-quran.uz/backend/api/v2'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});

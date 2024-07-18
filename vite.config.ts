import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.140.247.31',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});

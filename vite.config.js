import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/app/components'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@layout': path.resolve(__dirname, './src/app/layout'),
      '@navigator': path.resolve(__dirname, './src/app/navigator'),
      '@constant': path.resolve(__dirname, './src/app/constant'),
      '@assets': path.resolve(__dirname, './assets'),
      '@utils': path.resolve(__dirname, './utils'),
      '@hooks': path.resolve(__dirname, './utils/hooks')
    }
  }
});

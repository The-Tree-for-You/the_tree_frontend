import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  //server: {
    //https: {
      //key: fs.readFileSync(path.resolve(__dirname, process.env.SSL_KEY_PATH)),
      //cert: fs.readFileSync(path.resolve(__dirname, process.env.SSL_CERT_PATH)),
    //}
  //},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

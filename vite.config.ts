import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
   resolve: {
      alias: {
         '~': resolve(__dirname, 'src'),
         '@assets': resolve(__dirname, 'src/assets'),
         '@styles': resolve(__dirname, 'src/assets/styles')
      }
   },

   plugins: [Vue()],

   build: {
      lib: {
         name: 'VueNextMasonry',
         fileName: 'lib',
         entry: resolve(__dirname, 'src/lib/main.ts')
      },

      rollupOptions: {
         external: ['vue'],
         output: {
            globals: {
               vue: 'Vue'
            }
         }
      }
   }
});

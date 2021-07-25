import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
   resolve: {
      alias: {
         '~': resolve(__dirname, 'src'),
         '@assets': resolve(__dirname, 'src/assets'),
         '@styles': resolve(__dirname, 'src/assets/styles')
      }
   },

   plugins: [
      Vue(),
      typescript({
         target: 'es2020',
         declaration: true,
         rootDir: 'src',
         declarationDir: 'dist',
         include: ['src/index.ts', 'src/lib/**'],
         allowSyntheticDefaultImports: true
      })
   ],

   build: {
      lib: {
         name: 'index',
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

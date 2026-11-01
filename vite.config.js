import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue({ template: { transformAssetUrls: false } })], // public/ images use relative paths
  base: '/XR_Dev/', // IMPORTANT for GitHub Pages
 
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   define: {
//     'process.env': process.env
//   }
// })
// // 

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_chat_application/', // Change this to your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // This should be where Vite outputs the built files
    rollupOptions: {
      input: {
        main: 'index.html' // Ensure this points to your main HTML file
      }
    }
  }
});

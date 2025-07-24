import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// import { createHtmlPlugin } from 'vite-plugin-html';
// import { VitePWA } from 'vite-plugin-pwa';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss(),
    //   createHtmlPlugin({
    //   minify: true,
    //   inject: {
    //     data: {
    //       title: 'SoloWebinar | Webinars en Vivo Gratuitos',
    //       description:
    //         'Accede a webinars gratuitos sobre marketing, emprendimiento y desarrollo personal. Aprende en vivo cada semana.',
    //     },
    //   },
    // }),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.svg', 'robots.txt'],
    //   manifest: {
    //     name: 'SoloWebinar',
    //     short_name: 'SoloWebinar',
    //     description: 'Webinars semanales gratuitos sobre marketing, emprendimiento y desarrollo personal.',
    //     theme_color: '#0f172a',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     icons: [
    //       {
    //         src: '/logo-192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    // }),
    ],
})

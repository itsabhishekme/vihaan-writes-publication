import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'icons/icon-192.png',
        'icons/icon-512.png'
      ],

      manifest: {
        name: 'Vihaan Writes',
        short_name: 'Vihaan',

        description:
          'Soulful books, spiritual storytelling, karmic reflections and meaningful writing.',

        theme_color: '#000000',
        background_color: '#ffffff',

        display: 'standalone',

        scope: '/',
        start_url: '/',

        orientation: 'portrait',

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
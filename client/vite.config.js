import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'
import sitemap from 'vite-plugin-sitemap'
import compression from 'vite-plugin-compression'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Gzip compression for production
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),

    // Brotli compression for better compression ratio
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),

    sitemap({
      hostname: 'https://hungryghost.dev',
      generateRobotsTxt: true,
    }),

    // TEMPORARILY DISABLED WHILE DEBUGGING PRODUCTION
    // Re-enable after the useRef crash is fixed and cache issues are ruled out.
    /*
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon-192.png', 'favicon-512.png', 'robots.txt'],
      manifest: {
        name: 'Hungry Ghost DEV',
        short_name: 'Hungry Ghost',
        description: 'Brand, Web & Graphic Design Studio',
        theme_color: '#0b0b0b',
        background_color: '#0b0b0b',
        display: 'standalone',
        icons: [
          {
            src: 'favicon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'favicon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }),
    */
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react', 'react-dom'],
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.{test,spec}.{js,jsx}'],
    mode: 'development',
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy': process.env.NODE_ENV === 'development'
        ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://r2cdn.perplexity.ai; font-src 'self' https://fonts.gstatic.com https://r2cdn.perplexity.ai; img-src 'self' data: https:; connect-src 'self' ws://localhost:* http://localhost:* https://www.google-analytics.com https://analytics.google.com; frame-ancestors 'none';"
        : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://r2cdn.perplexity.ai; img-src 'self' data: https:; connect-src 'self' ws://localhost:* http://localhost:* https://www.google-analytics.com https://analytics.google.com; frame-ancestors 'none';",
    },
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },

    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,

    // TURN ON WHILE DEBUGGING PROD
    sourcemap: true,

    minify: 'esbuild',
    target: 'es2020',
    reportCompressedSize: true,
    cssMinify: true,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: [],
  },

  assetsInclude: ['**/*.webp', '**/*.avif'],
})
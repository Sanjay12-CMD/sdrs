import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { getChennaiRates } from './server/goldRates/service.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-chennai-rates-api',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const requestUrl = req.url || ''

          if (!requestUrl.startsWith('/api/v1/gold-rates/chennai')) {
            return next()
          }

          try {
            const forceRefresh = requestUrl.includes('refresh=true')
            const { payload, source } = await getChennaiRates({ forceRefresh })
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            res.setHeader('X-Rate-Source', source)
            res.statusCode = 200
            res.end(JSON.stringify(payload))
          } catch (error) {
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 500
            res.end(JSON.stringify({ message: 'Failed to load Chennai market rates' }))
          }
        })
      },
    },
  ],
  server: {
    proxy: {
      '/api/v1/certificates': {
        target: 'https://sdrsapi.sdrsgoldfinance.com',
        changeOrigin: true,
      },
    },
  },
})

import { FastifyCorsOptions } from '@fastify/cors'

export const corsOptions: FastifyCorsOptions = {
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Disposition'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  origin: (origin, cb) => {
    if (origin) {
      const hostname = new URL(origin).hostname

      if (hostname === 'localhost') {
        cb(null, true)
        return
      }
    }

    cb(new Error('Not allowed'), false)
  },
}
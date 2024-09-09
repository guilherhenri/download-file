import path from 'node:path'

import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import { routes } from './routes'

export const app = fastify()

app.register(fastifyStatic, {
  root: path.join(process.cwd(), 'tmp'),
})

app.register(cors, {
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
})

app.register(routes)
import path from 'node:path'

import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import { downloadRoutes } from './download-routes'
import { routes } from './routes'

export const app = fastify()

app.register(fastifyStatic, {
  root: path.join(process.cwd(), 'tmp'),
})

app.register(routes)
app.register(downloadRoutes)
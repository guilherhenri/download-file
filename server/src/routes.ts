import { FastifyInstance } from 'fastify';
import { downloadFile } from './download-file';
import cors from '@fastify/cors'
import { corsOptions } from './cors';

export async function routes(app: FastifyInstance) {
  app.register(cors, corsOptions)
  
  app.get('/download-file', downloadFile)
}
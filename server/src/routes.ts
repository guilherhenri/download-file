import { FastifyInstance } from 'fastify';
import { downloadFile } from './download-file';

export async function routes(app: FastifyInstance) {
  app.get('/download-file', downloadFile)
}
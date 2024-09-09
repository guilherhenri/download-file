import { FastifyInstance } from 'fastify';
import { downloadFile } from './download-file';

export async function downloadRoutes(app: FastifyInstance) {
  app.get('/file-download', downloadFile)
}
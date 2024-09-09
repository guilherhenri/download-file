import { FastifyReply, FastifyRequest } from 'fastify'

export async function downloadFile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  reply.header('Content-Disposition', `attachment; filename=teste.png`)
  return reply.download(`/teste.png`)
}

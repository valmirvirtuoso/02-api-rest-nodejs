import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// localhost:3333/hello

// Plugins - Cuidar para que a ordem seja correta, pois isso interfere na execução das rotas.
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

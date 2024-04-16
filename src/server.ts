import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// localhost:3333/hello

// Plugins - Cuidar para que a ordem seja correta, pois isso interfere na execução das rotas.
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

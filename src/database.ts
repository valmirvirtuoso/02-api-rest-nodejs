import { knex as stupKnex } from 'knex'

export const knex = stupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})

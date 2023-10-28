import { knex as setupKnex, Knex } from 'knex';

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './database/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
};
export const knex = setupKnex(config);

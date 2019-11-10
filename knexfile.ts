import { Config } from 'knex';
import './babel-register';

const baseConfig: Config = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: './db/migrations',
    extension: 'ts',
    stub: './db/migration.stub.ts',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './db/seeds',
    extension: 'ts',
    stub: './db/seed.stub.ts',
  } as any, // FIXME: https://github.com/knex/knex/pull/3531
};

const knexfile: { [k in typeof process.env.NODE_ENV]: Config } = {
  development: baseConfig,
  test: baseConfig,
  production: {
    ...baseConfig,
    pool: {
      min: 2,
      max: 10,
    },
  },
};

module.exports = knexfile;

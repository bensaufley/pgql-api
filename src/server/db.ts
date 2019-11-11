import knex, { Config } from 'knex';

const baseConfig: Config = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  debug: process.env.NODE_ENV === 'development',
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

export const configs: { [k in typeof process.env.NODE_ENV]: Config } = {
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

export default knex(configs[process.env.NODE_ENV]);

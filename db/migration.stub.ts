import Knex from 'knex';

export const up = async (knex: Knex) => {
  await knex.schema.createTable('my_table', (table) => {
    table.text('my_column');
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTable('my_table');
};

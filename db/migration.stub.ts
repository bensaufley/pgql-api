import Knex from 'knex';

export const up = async (knex: Knex) => {
  knex.schema.createTable('my_table', (table) => {
    table.text('my_column');
  });
};

export const down = async (knex: Knex) => {
  knex.schema.dropTable('my_table');
};

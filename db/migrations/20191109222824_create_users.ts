import Knex from 'knex';

export const up = async (knex: Knex) => {
  await knex.schema.createTable('users', function createUsersTable(table) {
    table.increments();

    table
      .string('username')
      .unique()
      .notNullable()
      .index();
    table
      .string('email')
      .unique()
      .index();
    table.string('password_hash').notNullable();
    table.string('password_salt').notNullable();

    table.timestamps();
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTable('users');
};

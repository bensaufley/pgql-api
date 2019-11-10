import Knex from 'knex';

/* eslint-disable import/prefer-default-export */
export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  await knex('table_name').del();

  // Inserts seed entries
  return knex('table_name').insert([
    { id: 1, colName: 'rowValue1' },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' },
  ]);
};

// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('ingredients').insert([
    { amount: 2.0, name: 'pound of chicken' },
    { amount: 1.0, name: 'cup shredded cheese' },
  ]);
};
// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('recipes').insert([
    { dish_id: 2, style: 'breaded' },
    { dish_id: 2, style: 'dijon' },
    { dish_id: 1, style: 'deep dish' },
    { dish_id: 1, style: 'thin crust' },
    { dish_id: 3, style: "bro's" },
  ]);
};
// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('recipes_ingredients').insert([
    { recipe_id: 5 , ingredient_id: 1 },
    { recipe_id: 5 , ingredient_id: 2 },
    { recipe_id: 4, ingredient_id: 2},
  ]);
};
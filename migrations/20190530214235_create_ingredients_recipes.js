exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', function(tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments(); // pass the name if you wanted to be called anything other than id
    tbl
    .integer('recipe_id')
    .notNullable()
    .references('id')
    .inTable('recipes');
    tbl
    .integer('ingredient_id')
    .notNullable()
    .references('id')
    .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_ingredients');
};
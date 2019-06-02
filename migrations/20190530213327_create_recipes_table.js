exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments(); // pass the name if you wanted to be called anything other than id
    tbl
      .string('style')
      .notNullable()
      .unique();
    tbl
    .integer('dish_id')
    .notNullable()
    .references('id')
    .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
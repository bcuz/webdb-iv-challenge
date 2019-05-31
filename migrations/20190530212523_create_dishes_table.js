exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments(); // pass the name if you wanted to be called anything other than id
    tbl
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
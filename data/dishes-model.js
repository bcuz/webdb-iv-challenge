const db = require('./dbConfig');

module.exports = {
  get,
  // getById,
  // getCohortStudents,
  addDish,
  getRecipes
  // update,
  // remove,
};

function get() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
  .insert(dish)
  .then(ids => {
    return ids[0]
  });
}

function getRecipes() {
  return db('recipes');
}

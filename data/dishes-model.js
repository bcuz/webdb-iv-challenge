const db = require('./dbConfig');

module.exports = {
  get,
  // getById,
  // getCohortStudents,
  addDish,
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
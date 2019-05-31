const db = require('./dbConfig');

module.exports = {
  get,
  // getById,
  // getCohortStudents,
  // insert,
  // update,
  // remove,
};

function get() {
  return db('dishes');
}
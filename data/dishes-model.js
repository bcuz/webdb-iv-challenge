const db = require('./dbConfig');

module.exports = {
  get,
  addDish,
  getDish,
  getRecipes,
  addRecipe
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

function getDish(id) {
  return db('recipes')
  .join('dishes', 'dishes.id', 'recipes.dish_id')

    // just going to leave it this way
    .select(
      'dishes.name',
      // The group_concat() function returns a string which is the concatenation of all non-NULL values of X
      db.raw('group_concat(recipes.style) as recipes')
    )
    .where('dishes.id', id);
}


function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes')
  .insert(recipe)
  .then(ids => {
    return ids[0]
  });
}
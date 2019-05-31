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
    // .select('dishes.name', 'recipes.style')
    // .where('dishes.id', 1);

    // just going to leave it this way
    .select([
      'dishes.name',
      db.raw('group_concat(recipes.style) as recipes')
    ])
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
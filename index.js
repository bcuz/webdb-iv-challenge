const express = require('express');

const Dishes = require('./data/dishes-model');

const server = express();

server.use(express.json());

server.get('/dishes', async (req, res) => {
  try {
      const dishes = await Dishes.get();
    res.status(200).json(dishes);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the dishes',
    });
  }
});

server.get('/dishes/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);

    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'dish not found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the dish',
    });
  }
});

server.post('/dishes', async (req, res) => {
  try {
    const dish = await Dishes.addDish(req.body);
    res.status(201).json(dish);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error adding the dish',
    });
  }
});

server.get('/recipes', async (req, res) => {
  try {
      const recipes = await Dishes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the recipes',
    });
  }
});

server.post('/recipes', async (req, res) => {
  try {
    const recipe = await Dishes.addRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error adding the recipe',
    });
  }
});

const port = 5001;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
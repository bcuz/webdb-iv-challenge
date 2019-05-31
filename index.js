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

const port = 5001;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
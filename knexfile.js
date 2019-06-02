module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipe.db3', // the folder will be created when we run the migrations
    },
  },
};

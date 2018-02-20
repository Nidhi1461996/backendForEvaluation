const models = require('../models');

const addBooksToDatabase = books => new Promise(() => {
  models.books.destroy({ truncate: true });
  models.books.bulkCreate(books);
}).then(() => {
  console.log('added data to database');
});

module.exports = addBooksToDatabase;

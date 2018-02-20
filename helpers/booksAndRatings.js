const request = require('request-promise');
const models = require('../models');

function booksAndRatings(booksInput) {
  const books = booksInput.map(book => ({
    id: book.id,
    bookId: book.id,
    author: book.Author,
    name: book.Name,

  }));

  const bookids = booksInput.map(book => ({
    id: book.id,

  }));
  // create empty likes table
  models.likes.destroy({ truncate: true });
  models.likes.bulkCreate(bookids);
  const ratings = [];
  books.forEach((book) => {
    const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.bookId}`;

    const requestRating = request(url);
    ratings.push(requestRating);
  });
  Promise.all(ratings).then((rating) => {
    for (let i = 0; i < books.length; i += 1) {
      books[i].rating = JSON.parse(rating[i]).rating;
    }
  });
  return new Promise((resolve) => {
    resolve(books);
  });
}
module.exports = booksAndRatings;

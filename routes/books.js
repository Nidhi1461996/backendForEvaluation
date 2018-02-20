const request = require('request-promise');
const booksAndRatings = require('../helpers/booksAndRatings');


const getRatings = function getRatings(booksInput, res) {
  return new Promise((resolve) => {
    booksAndRatings(booksInput).then((books) => {
      // console.log(books);
      resolve(books);
      const groupedBooks = books.reduce((acc, book) => {
        if (acc[book.author] === undefined) {
          acc[book.author] = [];
        }
        acc[book.author].push(book);
        return acc;
      }, {});
      // resolve(groupedBooks);
      res(groupedBooks);
    });
  });
};

module.exports = {
  getRatings,
  route: [{
    path: '/books',
    method: 'GET',
    handler: (req, res) => {
      request({
        url: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks',
        method: 'GET',
      }).then(books => getRatings(JSON.parse(books).books, res)).then((books) => {
        console.log(books);
      });
    },
  },
  ],
};

const request = require('request-promise');
const insertBooksToDatabase = require('../helpers/insertBooksToDb');
const booksAndRatings = require('../helpers/booksAndRatings');

module.exports = {
  route: [{
    path: '/insert',
    method: 'GET',
    handler: (req, res) => {
      request({
        url: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks',
        method: 'GET',
      }).then(books => booksAndRatings(JSON.parse(books).books)).then((books) => {
        // console.log(books);
        insertBooksToDatabase(books);
        res(books);
      });
    },
  },
  ],
};

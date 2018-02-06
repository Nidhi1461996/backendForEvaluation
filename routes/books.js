const request = require('request-promise');


const getRatings = function getRatings(booksInput) {
  return new Promise((resolve) => {
    const books = booksInput.map(book => ({
      bookId: book.id,
      author: book.Author,
      name: book.Name,

    }));

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
    }).then(() => {
      // console.log(books);
      // resolve(books);
      const groupedBooks = books.reduce((acc, book) => {
        if (acc[book.author] === undefined) {
          acc[book.author] = [];
        }
        acc[book.author].push(book);
        return acc;
      }, {});
      resolve(groupedBooks);
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
      }).then((books) => {
        getRatings(JSON.parse(books).books).then((b) => {
          res(b);
        });
      });
    },
  },
  ],
};

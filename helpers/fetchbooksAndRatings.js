const Models = require('../../models');

const fetchBooksAndRatings = () => Models.books.findAll();

module.exports = [
  {
    method: 'GET',
    path: '/books/all',
    handler: (request, response) => {
      fetchBooksAndRatings().then((bookObjects) => {
        const formattedBookObjects = [];
        bookObjects.forEach((bookObject) => {
          formattedBookObjects.push({
            id: bookObject.id,
            author: bookObject.author,
            name: bookObject.name,
            rating: bookObject.rating,
          });
        });
        response({
          statusCode: 200,
          message: `${formattedNoteObjects.length} notes fetched`,
          notes: formattedNoteObjects,
        });
      }).catch((err) => {
        response({
          statusCode: 200,
          message: err,
        });
      });
    },
  },
];

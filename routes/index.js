const servertest = require('./serverRoute');
const books = require('./books');
const likes = require('./like');
const unlikes = require('./unlike');
const insert = require('./insertToDb');

module.exports = []
  .concat(books.route)
  .concat(insert.route)
  .concat(servertest.route)
  .concat(likes.route)
  .concat(unlikes.route);

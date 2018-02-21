const servertest = require('./serverRoute');
const books = require('./books');
const likes = require('./like');
const unlikes = require('./unlike');
const insert = require('./insertToDb');
const api3 = require('./api3');

module.exports = []
  .concat(books.route)
  .concat(insert.route)
  .concat(servertest.route)
  .concat(likes.route)
  .concat(unlikes.route)
  .concat(api3);

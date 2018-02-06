const servertest = require('./serverRoute');
const books = require('./books');
const likes = require('./like');

module.exports = [].concat(books.route).concat(servertest.route).concat(likes.route);

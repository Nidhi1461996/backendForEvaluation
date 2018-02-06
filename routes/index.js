const servertest = require('./serverRoute');
const books = require('./books');
const likes = require('./like');
const unlikes = require('./unlike');

module.exports = [].concat(books.route).concat(servertest.route).concat(likes.route).concat(unlikes.route);

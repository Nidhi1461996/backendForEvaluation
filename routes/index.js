const servertest = require('./serverRoute');
const books = require('./books');

module.exports = [].concat(books.route).concat(servertest.route);

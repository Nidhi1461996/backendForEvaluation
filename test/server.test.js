const Server = require('../server');

describe('test the server', () => {
  test('checking the  status code to be 200', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('checking the  status code to be 200 for 1st question', (done) => {
    Server.inject('/books', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('checking the  status code to be 200 for 1st question', (done) => {
    Server.inject('/books', (response) => {
      const result = {
        'J K Rowling': [{
          bookId: 1, author: 'J K Rowling', name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
        }, {
          bookId: 2, author: 'J K Rowling', name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
        }, {
          bookId: 3, author: 'J K Rowling', name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
        }, {
          bookId: 4, author: 'J K Rowling', name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
        }, {
          bookId: 5, author: 'J K Rowling', name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
        }, {
          bookId: 6, author: 'J K Rowling', name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
        }, {
          bookId: 7, author: 'J K Rowling', name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
        }],
        'Sidney Sheldon': [{
          bookId: 8, author: 'Sidney Sheldon', name: 'If Tomorrow Comes (Tracy Whitney Series, #1)', rating: 4.02,
        }, {
          bookId: 10, author: 'Sidney Sheldon', name: 'Tell Me Your Dreams', rating: 3.93,
        }, {
          bookId: 9, author: 'Sidney Sheldon', name: 'Master of the Game', rating: 4.1,
        }, {
          bookId: 11, author: 'Sidney Sheldon', name: 'The Other Side of Midnight (Midnight #1)', rating: 3.9,
        }, {
          bookId: 12, author: 'Sidney Sheldon', name: 'Rage of Angels', rating: 3.92,
        }],
      };
      expect(response.result).toEqual(result);
      done();
    });
  });
});

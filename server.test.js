const Server = require('./server');
const model = require('./models');

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

  test('checking the  result for 1st question', (done) => {
    Server.inject('/books', (response) => {
      const result = {
        'J K Rowling': [{
          id: 1, bookId: 1, author: 'J K Rowling', name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
        }, {
          id: 2, bookId: 2, author: 'J K Rowling', name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
        }, {
          id: 3, bookId: 3, author: 'J K Rowling', name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
        }, {
          id: 4, bookId: 4, author: 'J K Rowling', name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
        }, {
          id: 5, bookId: 5, author: 'J K Rowling', name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
        }, {
          id: 6, bookId: 6, author: 'J K Rowling', name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
        }, {
          id: 7, bookId: 7, author: 'J K Rowling', name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
        }],
        'Sidney Sheldon': [{
          id: 8, bookId: 8, author: 'Sidney Sheldon', name: 'If Tomorrow Comes (Tracy Whitney Series, #1)', rating: 4.02,
        }, {
          id: 10, bookId: 10, author: 'Sidney Sheldon', name: 'Tell Me Your Dreams', rating: 3.93,
        }, {
          id: 9, bookId: 9, author: 'Sidney Sheldon', name: 'Master of the Game', rating: 4.1,
        }, {
          id: 11, bookId: 11, author: 'Sidney Sheldon', name: 'The Other Side of Midnight (Midnight #1)', rating: 3.9,
        }, {
          id: 12, bookId: 12, author: 'Sidney Sheldon', name: 'Rage of Angels', rating: 3.92,
        }],
      };
      expect(response.result).toEqual(result);
      done();
    });
  });


  test('checking the  result for 3rd question when the id exists-like', (done) => {
    Server.inject('/books/like/8', (response) => {
      expect(response.result).toBe('liked');
      done();
    });
  });


  test('checking the  result for 3rd question when the id does not exists-like', (done) => {
    Server.inject('/books/like/800', (response) => {
      expect(response.result).toBe('Could not find book with id: 800.');
      done();
    });
  });


  test('checking the  result for 3rd question when the id does not exists-unlike', (done) => {
    Server.inject('/books/like/800', (response) => {
      expect(response.result).toBe('Could not find book with id: 800.');
      done();
    });
  });

  test('checking the  result for 3rd question when the id exists-unlike', (done) => {
    Server.inject('/books/unlike/8', (response) => {
      expect(response.result).toBe('Unliked');
      done();
    });
  });
});

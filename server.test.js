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
          id: 10, bookId: 10, author: 'J K Rowling', name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
        }, {
          id: 20, bookId: 20, author: 'J K Rowling', name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
        }, {
          id: 30, bookId: 30, author: 'J K Rowling', name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
        }, {
          id: 40, bookId: 40, author: 'J K Rowling', name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
        }, {
          id: 50, bookId: 50, author: 'J K Rowling', name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
        }, {
          id: 60, bookId: 60, author: 'J K Rowling', name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
        }, {
          id: 70, bookId: 70, author: 'J K Rowling', name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
        }],
        'Sidney Sheldon': [{
          id: 80, bookId: 80, author: 'Sidney Sheldon', name: 'If Tomorrow Comes (Tracy Whitney Series, #1)', rating: 4.02,
        }, {
          id: 100, bookId: 100, author: 'Sidney Sheldon', name: 'Tell Me Your Dreams', rating: 3.93,
        }, {
          id: 90, bookId: 90, author: 'Sidney Sheldon', name: 'Master of the Game', rating: 4.1,
        }, {
          id: 110, bookId: 110, author: 'Sidney Sheldon', name: 'The Other Side of Midnight (Midnight #1)', rating: 3.9,
        }, {
          id: 120, bookId: 120, author: 'Sidney Sheldon', name: 'Rage of Angels', rating: 3.92,
        }],
      };
      expect(response.result).toEqual(result);
      done();
    });
  });


  test('checking the  result for 3rd question when the id exists-like', (done) => {
    Server.inject('/books/like/80', (response) => {
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
    Server.inject('/books/unlike/80', (response) => {
      expect(response.result).toBe('Unliked');
      done();
    });
  });
  const books = {
    books: [{
      id: 10, author: 'J K Rowling', name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
    }, {
      id: 20, author: 'J K Rowling', name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
    }, {
      id: 80, author: 'Sidney Sheldon', name: 'If Tomorrow Comes (Tracy Whitney Series, #1)', rating: 4.02,
    }, {
      id: 100, author: 'Sidney Sheldon', name: 'Tell Me Your Dreams', rating: 3.93,
    }, {
      id: 30, author: 'J K Rowling', name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
    }, {
      id: 40, author: 'J K Rowling', name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
    }, {
      id: 90, author: 'Sidney Sheldon', name: 'Master of the Game', rating: 4.1,
    }, {
      id: 110, author: 'Sidney Sheldon', name: 'The Other Side of Midnight (Midnight #1)', rating: 3.9,
    }, {
      id: 50, author: 'J K Rowling', name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
    }, {
      id: 60, author: 'J K Rowling', name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
    }, {
      id: 70, author: 'J K Rowling', name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
    }, {
      id: 120, author: 'Sidney Sheldon', name: 'Rage of Angels', rating: 3.92,
    }],
  };
  test('checking third api', (done) => {
    Server.inject('/books/all', (response) => {
      expect(response.result).toBe(books);
      done();
    });
  });
});

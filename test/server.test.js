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
});

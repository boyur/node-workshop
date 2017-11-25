const request = require('supertest');
const app = require('./app');

test('hello world', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/plain/)
    .end((error, response) => {
      expect(error).toBeFalsy();
      expect(response.text).toEqual(expect.stringMatching(/Hello World!/));
      done();
    });
});

const request = require('supertest');
const app = require('./app');

describe('GET /sum', () => {
  test('adds 1 + 2 to equal 3', (done) => {
    request(app)
      .get('/sum?a=1&b=2')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ sum: 3 });
        done();
      });
  });

  test('adds 0 + 42 to equal 42', (done) => {
    request(app)
      .get('/sum?a=0&b=42')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ sum: 42 });
        done();
      });
  });

  test('adds 10 + (-20) to equal -10', (done) => {
    request(app)
      .get('/sum?a=10&b=-20')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ sum: -10 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .get('/sum?a=42')
      .expect(400)
      .expect('Content-Type', /text\/plain/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        expect(response.text).toEqual(expect.stringMatching(/Bad Request/));
        done();
      });
  });
});

describe('POST /sum', () => {
  test('adds 1 + 2 to equal 3', (done) => {
    request(app)
      .post('/sum')
      .send({ a: 1, b: 2 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ sum: 3 });
        done();
      });
  });

  test('adds 0 + 42 to equal 42', (done) => {
    request(app)
      .post('/sum')
      .send({ a: 0, b: 42 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ sum: 42 });
        done();
      });
  });

  test('adds 10 + (-20) to equal -10', (done) => {
    request(app)
      .post('/sum')
      .send({ a: 10, b: -20 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ sum: -10 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .post('/sum')
      .send({ a: 42 })
      .expect(400)
      .expect('Content-Type', /text\/plain/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        expect(response.text).toEqual(expect.stringMatching(/Bad Request/));
        done();
      });
  });
});

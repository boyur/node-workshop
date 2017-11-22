const test = require('tape');
const request = require('supertest');
const app = require('./app');

test('GET /sum', (t) => {
  t.plan(7);

  request(app)
    .get('/sum?a=1&b=2')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .end((error, response) => {
      t.error(error);
      const body = JSON.parse(response.text);
      t.deepEqual(body, { sum: 3 });
    });

  request(app)
    .get('/sum?a=0&b=42')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .end((error, response) => {
      t.error(error);
      const body = JSON.parse(response.text);
      t.deepEqual(body, { sum: 42 });
    });

  request(app)
    .get('/sum?a=10&b=-20')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .end((error, response) => {
      t.error(error);
      const body = JSON.parse(response.text);
      t.deepEqual(body, { sum: -10 });
    });

  request(app)
    .get('/sum?a=42')
    .expect(400)
    .end((error) => {
      t.error(error);
    });
});

test('POST /sum', (t) => {
  t.plan(7);

  request(app)
    .post('/sum')
    .send({ a: 1, b: 2 })
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .end((error, response) => {
      t.error(error);
      const body = JSON.parse(response.text);
      t.deepEqual(body, { sum: 3 });
    });

  request(app)
    .post('/sum')
    .send({ a: 0, b: 42 })
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .end((error, response) => {
      t.error(error);
      const body = JSON.parse(response.text);
      t.deepEqual(body, { sum: 42 });
    });

  request(app)
    .post('/sum')
    .send({ a: 10, b: -20 })
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .end((error, response) => {
      t.error(error);
      const body = JSON.parse(response.text);
      t.deepEqual(body, { sum: -10 });
    });

  request(app)
    .post('/sum')
    .send({ a: 42 })
    .expect(400)
    .end((error) => {
      t.error(error);
    });
});

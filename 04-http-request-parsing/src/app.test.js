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

describe('GET /difference', () => {
  test('difference 1 - 2 to equal -1', (done) => {
    request(app)
      .get('/difference?a=1&b=2')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ difference: -1 });
        done();
      });
  });

  test('difference 0 - 42 to equal -42', (done) => {
    request(app)
      .get('/difference?a=0&b=42')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ difference: -42 });
        done();
      });
  });

  test('difference 10 - (-20) to equal 30', (done) => {
    request(app)
      .get('/difference?a=10&b=-20')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ difference: 30 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .get('/difference?a=42')
      .expect(400)
      .expect('Content-Type', /text\/plain/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        expect(response.text).toEqual(expect.stringMatching(/Bad Request/));
        done();
      });
  });
});

describe('POST /difference', () => {
  test('difference 1 - 2 to equal -1', (done) => {
    request(app)
      .post('/difference')
      .send({ a: 1, b: 2 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ difference: -1 });
        done();
      });
  });

  test('difference 0 - 42 to equal -42', (done) => {
    request(app)
      .post('/difference')
      .send({ a: 0, b: 42 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ difference: -42 });
        done();
      });
  });

  test('difference 10 - (-20) to equal -10', (done) => {
    request(app)
      .post('/difference')
      .send({ a: 10, b: -20 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ difference: 30 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .post('/difference')
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

describe('GET /multiply', () => {
  test('multiply 1 * 2 to equal 2', (done) => {
    request(app)
      .get('/multiply?a=1&b=2')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ multiply: 2 });
        done();
      });
  });

  test('multiply 0 * 42 to equal 0', (done) => {
    request(app)
      .get('/multiply?a=0&b=42')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ multiply: 0 });
        done();
      });
  });

  test('multiply 10 * (-20) to equal -200', (done) => {
    request(app)
      .get('/multiply?a=10&b=-20')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ multiply: -200 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .get('/multiply?a=42')
      .expect(400)
      .expect('Content-Type', /text\/plain/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        expect(response.text).toEqual(expect.stringMatching(/Bad Request/));
        done();
      });
  });
});

describe('POST /multiply', () => {
  test('multiply 1 * 2 to equal 2', (done) => {
    request(app)
      .post('/multiply')
      .send({ a: 1, b: 2 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ multiply: 2 });
        done();
      });
  });

  test('multiply 0 * 42 to equal 0', (done) => {
    request(app)
      .post('/multiply')
      .send({ a: 0, b: 42 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ multiply: 0 });
        done();
      });
  });

  test('multiply 10 * (-20) to equal -200', (done) => {
    request(app)
      .post('/multiply')
      .send({ a: 10, b: -20 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ multiply: -200 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .post('/multiply')
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

describe('GET /divide', () => {
  test('divide 1 / 2 to equal 0.5', (done) => {
    request(app)
      .get('/divide?a=1&b=2')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ divide: 0.5 });
        done();
      });
  });

  test('divide 0 / 42 to equal 0', (done) => {
    request(app)
      .get('/divide?a=0&b=42')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ divide: 0 });
        done();
      });
  });

  test('divide 10 / (-20) to equal -0.5', (done) => {
    request(app)
      .get('/divide?a=10&b=-20')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ divide: -0.5 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .get('/divide?a=42')
      .expect(400)
      .expect('Content-Type', /text\/plain/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        expect(response.text).toEqual(expect.stringMatching(/Bad Request/));
        done();
      });
  });
});

describe('POST /divide', () => {
  test('divide 1 / 2 to equal 0.5', (done) => {
    request(app)
      .post('/divide')
      .send({ a: 1, b: 2 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ divide: 0.5 });
        done();
      });
  });

  test('divide 0 / 42 to equal 0', (done) => {
    request(app)
      .post('/divide')
      .send({ a: 0, b: 42 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ divide: 0 });
        done();
      });
  });

  test('divide 10 / (-20) to equal -0.5', (done) => {
    request(app)
      .post('/divide')
      .send({ a: 10, b: -20 })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end((error, response) => {
        expect(error).toBeFalsy();
        const body = JSON.parse(response.text);
        expect(body).toEqual({ divide: -0.5 });
        done();
      });
  });

  test('400 Bad Request on invalid syntax', (done) => {
    request(app)
      .post('/divide')
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

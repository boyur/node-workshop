const url = require('url');

const sum = (params) => {
  const a = parseInt(params.a, 10);
  const b = parseInt(params.b, 10);

  if (!Number.isNaN(a) && !Number.isNaN(b)) {
    return { sum: a + b };
  }

  return null;
};

const app = (req, res) => {
  // handle different request methods
  if (req.method === 'GET') {
    // parse request url
    const { query } = url.parse(req.url, true);
    const result = sum(query);
    if (result) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result, null, 2), 'utf8');
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.writeHead(400);
      res.end('Bad Request');
    }
  } else if (req.method === 'POST') {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      const result = sum(JSON.parse(body));
      if (result) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result, null, 2), 'utf8');
      } else {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(400);
        res.end('Bad Request');
      }
    });
  }
};

module.exports = app;

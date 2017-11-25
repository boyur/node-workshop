// https://nodejs.org/api/http.html
const http = require('http');
const app = require('./src/app');

// create the http.Server object
// https://nodejs.org/api/http.html#http_class_http_server
const server = http.createServer(app);

// start server listening for connections on port 3000.
server.listen(3000, '0.0.0.0', () => {
  const { address, port } = server.address();
  console.log(`Server started at ${address}:${port}`);
});

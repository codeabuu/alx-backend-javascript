const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': 'text/plain'});

  res.end('Hello Holberton School!\n');
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
});

module.exports = app;

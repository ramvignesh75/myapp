var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'yaml/plain'});
  res.end('Hola  World!!');
}).listen(8070);

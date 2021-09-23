var http = require('http').createServer(handler);
var html = require('fs').readFileSync('views/index.html');

function handler(request, response) {
  response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
  response.end(html);
}

http.listen(3000);



var http = require('http');
var myArgs = process.argv.slice(2);
var handleRequest = function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(myArgs.join(' '));
}
var www = http.createServer(handleRequest);
www.listen(8080);

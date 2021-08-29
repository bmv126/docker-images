var http = require('http');
var myArgs = process.argv.slice(2);
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end(myArgs[0]);
}
var www = http.createServer(handleRequest);
www.listen(8080);

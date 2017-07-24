//
// Kwik web server
//
var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/public'));
var port = 80;
console.log("Listening on port "+port);
server.listen(port);

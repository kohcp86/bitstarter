var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var fs = require('fs');
  var buf = new Buffer(256);
  //buf.write(fs.readFileSync('index.html'));
	buf = fs.readFileSync('index.html);
  response.send(buf.toString());
  //response.send(buf.toString('utf8', fs.readFileSync("index.html")));//});
  //response.send('Test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

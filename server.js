var express = require("express");

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', function (request, response) {  
  response.sendfile('index.html');
});

app.listen(port, function() {
  console.log(`App is now listening to port ${port}!`);
});



var express = require("express");

var app = express();

app.set('port', 5678);

app.use(express.static(__dirname));

app.get('/', function (request, response) {  
  response.sendfile('index.html');
});

app.listen(app.get('port'), function() {
  console.log(`App is now listening to port ${app.get('port')}!`);
});



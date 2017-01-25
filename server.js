var express = require("express");
// var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

// var mongodbUri = 'mongodb://localhost/test';

// heroku_2q6wjlfp:lng84bh1dusi3l7esdjepiruus@ds035543.mlab.com:35543/heroku_2q6wjlfp

// mongoose.connect(mongodbUri);

// var db = mongoose.connection;

// db.once('open', function callback () {

//   console.log("connection made!")
  
//   var querySchema = mongoose.Schema({
//     time : Date,
//     query : String
//   });

//   var historySchema = mongoose.Schema({
//     time : Date,
//     link : String
//   });

//   var Queries = mongoose.model('Queries', querySchema);
//   var History = mongoose.model('History', historySchema);

// })

app.get('/', function (request, response) {  
  response.sendfile('index.html');
});

// app.get('/history', function (request, response) {
//   console.log("we made it");
//   response.end();
// })

app.listen(port, function() {
  console.log(`App is now listening to port ${port}!`);
});



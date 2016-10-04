var config = require('./config');
var fetch = require('node-fetch');
var http = require('http');

// Use production rest API
var wproot = config.wpapi.local;


var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());

//app.use('/css', express.static(__dirname + '/public'));




app.get('/fetch', function(req,res){

  var url = wproot + 'posts?per_page=5';
  fetch(url)
  .then(function(resp){
    return resp.json();
  }).then(function(json) {
      res.json(json);
  });

});


// JSX endpoints


app.listen(3000);
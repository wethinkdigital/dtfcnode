var config = require('./config');
var wproot = config.wpapi.local;

require('babel-register');


var React = require('react');
var fetch = require('node-fetch');
var ReactDOMStream = require('react-dom-stream/server');
var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());

// CORS

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



/*----------------------------------*\
|
|  JSON endpoints
|  Add streaming where possible
|
\*----------------------------------*/

// Home posts

app.get('/api/homeposts', function(req,res){

    fetch(wproot + 'posts?per_page=54')
    .then(function(wp){
        return wp.json();
    }).then(function(json) {
        res.json(json);
    });

});

// Category

app.get('/api/category/:cat', function(req,res){

    fetch(wproot + 'posts?per_page=54&filter[category_name]=' + req.params.cat)
    .then(function(wp){
        return wp.json();
    }).then(function(json) {
        res.json(json);
    });

});

// Top Videos

app.get('/api/topvideos/:count', function(req,res){

    fetch(wproot + 'posts?per_page='+req.params.count+'&filter[category_name]=videos')
    .then(function(wp){
      return wp.json();
    }).then(function(json){
      res.json(json);
    });

});

// Newsticker




/*----------------------------------*\
|
|  JSX endpoints
|
\*----------------------------------*/


// News ticker

app.get('/api/newsticker/:source', function(req,res){

    var source = req.params.source;

    if(source == 'wp'){
  
        fetch(wproot + 'postmeta?title=home&metakey=page-options')
        .then(function(wp){
            return wp.json();
        }).then(function(json){

            var Newsticker = React.createFactory(require('./views/newsticker')); 

            var stream = ReactDOMStream.renderToString(Newsticker(json['news-ticker']));
            stream.pipe(res, {end: false});
            stream.on("end", function() {
            res.end();
        });

        });

    } else {

        var Newsticker = React.createFactory(require('./views/newsticker')); 

        var stream = ReactDOMStream.renderToString(Newsticker({"ticker-title":"static title","ticker-link":"http://www.apple.com"}));
        stream.pipe(res, {end: false});
        stream.on("end", function() {
        res.end();
        });

    }
});

app.get('/api/testitem', function(req,res){

    res.send('<h2>A headline</h2>','utf-8');

});

app.listen(13370);
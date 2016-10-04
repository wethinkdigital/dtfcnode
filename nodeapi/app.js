var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/css', express.static(__dirname + '/public'));


// Routing
app.get('/', require('./routes').frontpage);
app.get('/post/:id', require('./routes').single);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.listen(3000);
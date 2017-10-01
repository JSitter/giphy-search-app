/****************************************************
 *  GIPHY SEARCH APP 
 *      WEB 2
 *      v1.0
 ***************************************************/
var express = require('express');
var exphbs  = require('express-handlebars');
var http = require('http');
var giphy = require('giphy-api')();

//initialize express
var app = express();

//Tell Express static files will live in folder public
app.use(express.static('public'));

//setup home page
app.get('/', function (req, res) {
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

//Setup handlebars to work with express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Define main route
app.get('/:username', function (req, res) {
  // Here you would look up the user from the database
  // Then render the template to display the users's info
});

app.get('/hello-gif', function (req, res) {
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
});

app.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.render('greetings', {name: name});
});

//listen on port 3001
app.listen(3001, function () {
  console.log('Gif Search listening on port localhost:3001!');
});
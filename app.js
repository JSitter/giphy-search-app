/****************************************************
 *  GIPHY SEARCH APP 
 *      WEB 2
 *      v1.0
 ***************************************************/
var express = require('express');
var exphbs  = require('express-handlebars');

//initialize express
var app = express();

//Setup handlebars to work with express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Define main route
app.get('/:username', function (req, res) {
  // Here you would look up the user from the database
  // Then render the template to display the users's info
})

//listen on port 3001
app.listen(3001, function () {
  console.log('Gif Search listening on port localhost:3001!');
});
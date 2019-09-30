const express = require('express');
const app = express();


// root route
// Express automatically looks for EJS files in a dir called views
app.get('/', function(request, response){
    response.render('home.ejs');
});

// fallinlovewith/cheesepuppy
app.get('/fallinlovewith/:thing', function(request, response){
    let thing = request.params.thing;
    response.render('love.ejs');
});



























//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});
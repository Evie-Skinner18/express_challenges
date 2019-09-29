// require express
const express = require('express');
const app = express();


// define your routes
app.get('/', function(request, response){
    response.send('Hello and welcome to the Express challenge!');
    console.log('Someone has made a request to /');
    console.log(request.params);
});

// params
app.get('/speak/:animalName', function(request, response){
    let animal = request.params.animalName;
    response.send(`Welcome to the ${subreddit} sub reddit!`);
    console.log(request.params);
});

// put the wildcard route at the bottom as a catch all
app.get('*', function(request, response){
    response.send('You are a STAR');
    console.log('Yeah you are');
});




//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});
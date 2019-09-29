// require express
const express = require('express');
const app = express();


// define your routes
app.get('/', function(request, response){
    response.send('Hello!');
    console.log('Someone has made a request to /');
    console.log(request.params);
});

// params
app.get('/r/:subredditName', function(request, response){
    let subreddit = request.params.subredditName;
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
const express = require('express');
const app = express();

// need to tell express explicitly to use /public dir for all the styles etc
app.use(express.static('public'));
// tell express that we're using .ejs files as the views so you don't have to include the .ejs extension later on
app.set('view engine', 'ejs');


// root route
// Express automatically looks for EJS files in a dir called views
app.get('/', function(request, response){
    response.render('home');
});

// fallinlovewith/cheesepuppy
app.get('/fallinlovewith/:thing', function(request, response){
    let thing = request.params.thing;
    // pass in an object to render so it knows to pass the value stored in thing to thingVar which is the var
    // we have set up to be rendered in love.ejs
    response.render('love', {thingVar: thing});
});

app.get('/posts', function(request, response){
  // posts is an array of objects. We will pass this data to the view and in the view we'll loop through it
    let posts = [
      {title: "Cheese Post", author: "Barry Cheeseman"},
      {title: "Beer Post", author: "Lionel Van Der Kriek"},
      {title: "Drums Post", author: "Youssef Dayes"}
    ];
// pass the posts array as a parameter to the render function
    response.render('posts', {posts: posts});
});



























//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});
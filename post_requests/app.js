const express = require('express');
const app = express();

// tell express to use public dir for styles
app.use(express.static('public'));
// tell it to use EJS for views
app.set('view engine', 'ejs');

// root route
app.get('/', function(request, response){
  response.render('home');
});

app.get('/friends', function(request, response){
  let friends = ['Dibby', 'Adam', 'Maja', 'Patrick', 'Foofoo', 'Bikesh'];
  // the object we send specifies a property, friends, that is populated by an array var friends that
  // we've just made
  response.render('friends', {friends: friends});
});

app.post('/addfriend', function(request,response){
  response.send('You have reached the POST route!');
});


//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});

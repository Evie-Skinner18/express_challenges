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
  response.render('friends');
});


//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});

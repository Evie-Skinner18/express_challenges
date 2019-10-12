const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// tell expressto use body parser so we can extract data from the body of the request
app.use(bodyParser.urlencoded({extended: true}));

// tell express to use public dir for styles
app.use(express.static('public'));
// tell it to use EJS for views
app.set('view engine', 'ejs');

// friends array which is like a mini non-persisting DB for now :P
let friends = ['Dibby', 'Adam', 'Maja', 'Patrick', 'Foofoo', 'Bikesh'];


// root route
app.get('/', function(request, response){
  response.render('home');
});

app.get('/friends', function(request, response){
  // the object we send specifies a property, friends, that is populated by an array var friends that
  // we've made. This array is up there so it's in scope to all the route functions
  response.render('friends', {friends: friends});
});

app.post('/addfriend', function(request,response){
  // print everything in the body of the request. BodyPArser package tells Express to turn the body
  // of the request into a JS bject that you can see. Anytime we are taking input from the user in a form,
  // we will need body-parser so we can extract the data from the body on the server side
  // save the new friend the user has added using the form to a var
  let newFriend = request.body.newfriend;
  // push the new friend into the friends array defined up above
  friends.push(newFriend);
  // view all the friends inc new one
  response.render('friends', {friends: friends});
});


//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});

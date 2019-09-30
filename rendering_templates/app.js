const express = require('express');
const app = express();


// routes
app.get('/', function(request, response){
    response.render('home.ejs');
});



























//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});
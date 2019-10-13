const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// bodyParser

// use public for stylesheets
app.use('public');
// use EJS for views


// 




//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});


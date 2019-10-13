const request = require('request');

// make a simple GET request to the Punk API. To do anything with the info that comes back,
// we need callback function
request('https://api.punkapi.com/v2/beers/random', function(error, response, body){
  // how are you going to handle the different types of response?
    if(error){
      console.log('There is an error:', error);
    }
    else if(!error && response.statusCode == 200){
      console.log(response.statusCode);
      console.log(body);  
    }
    else{
      console.log(response.statusCode);
    }
});





// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// bodyParser

// use public for stylesheets
// app.use('public');
// use EJS for vieŸws


// 




//start the node server
// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log('Server Has Started!');
// });


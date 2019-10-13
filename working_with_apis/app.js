const request = require('request');

// make a simple GET request to the Punk API. To do anything with the info that comes back,
// we need callback function
request('https://api.punkapi.com/v2/beers/random', function(error, response, body){
  // how are you going to handle the different types of response?
    if(!error && response.statusCode == 200){
      // REMEMBER: a JSON object is nOT an obejct: it's actually just a massive string!
      console.log(response.statusCode);
      // now we don't want the whole body of response just want to extract this beer's name.
      // JS comes with a method to turn the massive string response into a real JS object
      let parsedResponseBody = JSON.parse(body);
      // Punk API response comes in an array of beer objects: first one is an object with general deets e.g
      // beer name and desc. Second one is ingredients etc.
      console.log
      (`My favourite beer is ${parsedResponseBody[0].name} and I love to drink it with a tasty dinner
        of ${parsedResponseBody[0].food_pairing[0]}`);  
    }
    else if(error){
      console.log('There is an error:', error);
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


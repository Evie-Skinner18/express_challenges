const express = require('express');
const app = express();
// request the NPM package should be the only thing called 'request'. Call other requests 'res' instead
const request = require('request');


// tell express to use public dir for styles
app.use(express.static('public'));
// tell it to use EJS for views
app.set('view engine', 'ejs');

// root route
app.get('/', (req, res)=> {
    res.send('Hello!');
});

// display the results of the beer search
app.get('/results', (req, res)=> {
    // call the Punk API using request
    request('https://api.punkapi.com/v2/beers?&beer_name=dog', (error, response, body)=> {
        if(!error && response.statusCode == 200){
            const parsedBody = JSON.parse(body);
            // this needs to be res not response because it's the Express route res doing the actual responding
            // res.send(parsedBody[0]);
            res.render('results', {beerResults: parsedBody});
        }
        else if(error){
            console.log('There is an error:', error);
          }
          else{
            console.log(response.statusCode);
          }
    });
});

// to make a search of all the beers by name use an endpoint like this:
// https://api.punkapi.com/v2/beers?&beer_name=dog



//start the node server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Beer app has started!');
});
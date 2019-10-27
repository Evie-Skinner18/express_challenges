// require express
const express = require('express');
const app = express();


// define your routes
app.get('/', function(request, response){
    response.send('Hello and welcome to the Express challenge!');
    console.log('Someone has made a request to /');
    console.log(request.params);
});

// params
app.get('/speak/:animalName', function(request, response){
    let animal = request.params.animalName;
    let noise = chooseAnimalNoise(animal);

    response.send(`The ${animal} goes ${noise}`);
    console.log(request.params);
});

app.get('/repeat/:word/:number', function(request, response){
    let word = request.params.word;
    let number = request.params.number;
    response.send(repeatWord(word, number)); 
});

// put the wildcard route at the bottom as a catch all
app.get('*', function(request, response){
    response.send('Sorry, I can\'t find that page... What are you doing with your life?');
    console.log('Yeah you are nice though cutie pie');
});

// decide which animal noise to return
function chooseAnimalNoise(animal){
    switch (animal) {
        case 'pig': 
            return 'oink!';
            break;
        case 'cow':
            return 'MOO';
            break;
        case 'dog':
            return 'woof!';
            break;
        default: 'default noise';
            break;
    }
}

// decide how many hellos to return
function repeatWord(word, numberOfTimes) {
    let wordRepeated = '';
    numberOfTimes = parseInt(numberOfTimes);

    for (let i = 0; i < numberOfTimes; i++) {
        wordRepeated = `${wordRepeated} ${word}`;
    }
    return wordRepeated;
}


//start the node server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});
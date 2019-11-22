const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27107/blogApp', {useNewUrlParser: true, useUnifiedTopology: true});
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    dateCreated: Date
});
const Blog = mongoose.model('Blog', blogSchema);


app.set('view engine', 'ejs');
app.use(express.static, ('public'));
app.use(bodyParser.urlencoded, ({extended: true}));

app.get('/', (req, res)=> {
    res.send('ROOT ROUTE');
});




//start the node server
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log('Blog App has started!');
});
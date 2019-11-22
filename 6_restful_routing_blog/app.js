const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/blogApp', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/yelpCamp', {useNewUrlParser: true, useUnifiedTopology: true});

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    dateCreated: {type: Date, default: Date.now}
});
const Blog = mongoose.model('Blog', blogSchema);
// Blog.create({
//     title: 'Why I Love Real Ale',
//     image: 'https://www.stroudbrewery.co.uk/wp-content/uploads/2018/11/Bottle-Hop-Drop.jpg',
//     body: 'I love real ale because it\'s tasty and fun to drink. Every beer is different and special.'
// });


app.get('/', (req, res)=> {
    res.redirect('/blogs');
});

app.get('/blogs', (req, res)=> {
    Blog.find({}, (err, foundBlogs)=> {
        if(err){
            res.send('Sorry couldn\'t find any blogs!');
        }
        else{
            res.render('index', {blogs: foundBlogs});
        }
    });
});




//start the node server
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log('Blog App has started!');
});
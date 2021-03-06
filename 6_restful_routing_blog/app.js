const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const sanitiser = require('express-sanitizer');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(sanitiser());

mongoose.connect('mongodb://localhost:27017/blogApp', {useNewUrlParser: true, useUnifiedTopology: true});

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    dateCreated: {type: Date, default: Date.now},
    breweryWebsite: {type: String, default: ''},
    whereToBuy: {type: String, default: ''}
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

// NEW render the create form
app.get('/blogs/new', (req, res)=> {
    res.render('new');
});

// CREATE new blog
app.post('/blogs', (req, res)=> {
    // sanitise the body text of new blog and then replace old body with sanitised version   
    let sanitisedBlogBody = req.sanitize(req.body.blog.body);
    req.body.blog.body = sanitisedBlogBody;
    // create a new blog from the data that comes in through the POST form in the body of the request
    Blog.create(req.body.blog, (err, newBlog)=>{
        if(err){
            res.render('new');
        }
        else{
            res.redirect('/blogs');
        }    
    });
});

// SHOW a blog post in more detail
app.get('/blogs/:id', (req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=> {
        if(err){
            res.redirect('/blogs');
        }
        else{
            res.render('show', {blog: foundBlog});
        }
    });
});

// EDIT
app.get('/blogs/:id/edit', (req, res)=> {
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err){
            res.redirect('/blogs');
        }
        else{
            res.render('edit', {blog: foundBlog});
        }
    });
});

// final two routes use method-override npm pkg

// UPDATE
app.put('/blogs/:id', (req, res)=> {
    // sanitise the body text of new blog and then replace old body with sanitised version   
    let sanitisedBlogBody = req.sanitize(req.body.blog.body);
    req.body.blog.body = sanitisedBlogBody;
    // set useFindAndModify to false to get rid of mongoose deprecation warning
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, {useFindAndModify: false}, (err, updatedBlog)=> {
        if(err){
            res.redirect('/blogs');
        }
        else{
            res.redirect(`/blogs/${req.params.id}`);
        }
    });
});

// DELETE
app.delete('/blogs/:id', (req, res)=> {
    Blog.findByIdAndRemove(req.params.id, (err, deletedBlog)=> {
        if(err){
            res.redirect('/blogs');
        }
        else{
            res.render('destroy', {destroyedBlog: deletedBlog});
        }
    });
});



//start the node server
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log('Blog App has started!');
});
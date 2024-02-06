const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost.js');

const app = express(); // Remove 'new' from express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join for path concatenation

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    const blogposts = await BlogPost.find({});
    res.render('index', { blogposts });
    // console.log(blogPosts);
});

app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/about.html'));
    res.render('about');
});

app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/contact.html'));
    res.render('contact');
});

app.get('/post/:id', async (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/post.html'));
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', { blogpost });
});

app.get('/posts/new', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/create.html'))
    res.render('create');
});

app.post('/posts/store', (req, res) => {
    // console.log(req.body);
    BlogPost.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
 
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});

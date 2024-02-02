const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express(); // Remove 'new' from express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join for path concatenation

mongoose.connect('mongodb://localhost/your_database', { useNewUrlParser: true });

app.use(express.static('public'));

 app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'));
    res.render('index');
 })

app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/about.html'));
    res.render('about');
})

app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/contact.html'));
    res.render('contact');
})

app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/post.html'));
    res.render('post');
})

app.get('/posts/new', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'views/create.html'))
    res.render('create');
})

app.post('/posts/store', (req, res) => {
    // 
})
app.listen(4000, () => {
    console.log("Server started on port 4000");
})
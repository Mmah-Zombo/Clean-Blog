const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');
const homeController = require('./controllers/home');
const newPostController = require('./controllers/newPost');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');

const app = express(); // Remove 'new' from express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join for path concatenation

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fileUpload = require('express-fileupload');
app.use(fileUpload());

const validateMiddleWare = (req, res, next) => {
    if (req.files == null || req.body.title == null || req.body.body == null) {
        return res.redirect('/posts/new');
    }
    next();
}
app.use('/posts/store', validateMiddleWare);

app.get('/', homeController);

app.get('/post/:id', getPostController);

app.get('/posts/new', newPostController);

app.post('/posts/store', storePostController);

app.listen(4000, () => {
    console.log("Server started on port 4000");
});

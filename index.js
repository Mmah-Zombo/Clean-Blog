const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const homeController = require('./controllers/home');
const newPostController = require('./controllers/newPost');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const newUserController = require('./controllers/newUserController');
const storeUserController = require('./controllers/storeUserController');
const loginController = require('./controllers/loginController');
const loginUserController = require('./controllers/userLogin');
const logoutController = require('./controllers/logoutController');
const expressSession = require('express-session');
const validateMiddleWare = require('./middleware/validationMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticatedMiddleware');

const app = express(); // Remove 'new' from express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join for path concatenation

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use('/posts/store', validateMiddleWare);

app.use(expressSession({
    secret: 'keyboard cat'
}));

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

app.use(flash());

app.get('/', homeController);

app.get('/post/:id', getPostController);

app.get('/posts/new', authMiddleware, newPostController);

app.post('/posts/store',authMiddleware, storePostController);

app.get('/auth/register', redirectIfAuthenticated, newUserController);

app.post('/users/register', redirectIfAuthenticated, storeUserController);

app.get('/auth/login', redirectIfAuthenticated, loginController);

app.post('/users/login', redirectIfAuthenticated, loginUserController);

app.get('/auth/logout', logoutController);

app.use((req, res) => res.render('notFound'));

app.listen(4000, () => {
    console.log("Server started on port 4000");
});

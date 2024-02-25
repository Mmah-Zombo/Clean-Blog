const bycrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const {username, password} = req.body;

    User.findOne({username: username})
    .then(user => {
        if (user) {
            bycrypt.compare(password, user.password)
            .then(same => {
                if (same) {
                    const successMessage = "You have successfully logged in to your account";
                    req.flash('successMessage', successMessage);
                    req.session.userId = user._id;
                    res.redirect('/');
                } else {
                    const validationErrors = "Invalid password";
                    req.flash('validationErrors', validationErrors);
                    req.flash('data', req.body);
                    res.redirect('/auth/login');
                }
            })
            .catch(err => { throw err })
        } else {
            const validationErrors = "Invalid username";
            req.flash('validationErrors', validationErrors);
            req.flash('data', req.body);
            res.redirect('/auth/login');
        }
    })
    .catch(err => {
        throw err;
    })
}

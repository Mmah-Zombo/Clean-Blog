const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body)
    .then((user) => {
        const successMessage = "You have successfully created an account";
        req.flash('successMessage', successMessage);
        req.session.userId = user._id;
        res.redirect('/');
    })
    .catch(err => {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        return res.redirect('/auth/register');
    });
};

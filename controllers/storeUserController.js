const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        return res.redirect('/auth/register');
    });
};

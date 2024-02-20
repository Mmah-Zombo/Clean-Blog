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
                    req.session.userId = user._id;
                    res.redirect('/');
                } else {
                    res.redirect('/auth/login');
                }
            })
            .catch(err => { throw err })
        } else {
            res.redirect('/auth/login');
        }
    })
    .catch(err => {
        throw err;
    })
}

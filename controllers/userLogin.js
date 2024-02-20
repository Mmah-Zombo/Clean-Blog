const bycrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const [username, password] = req.dody;

    User.findOne({username: username})
    .then(user => {
        if (user) {
            bycrypt.compare(password, user.password)
            .then(same => {
                if (same) {
                    res.redirect('/');
                } else {
                    res.redirect('auth/login');
                }
            })
            .catch(err => { throw err })
        }
    })
    .catch(err => {
        throw err;
    })
}

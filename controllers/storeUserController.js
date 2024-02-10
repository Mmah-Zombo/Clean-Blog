const User = require('../models/User');

module.exports = (req, res) => {
    User.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => {
        console.log(err)
        res.redirect('/auth/register');
    });
}
 
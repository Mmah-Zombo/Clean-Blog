module.exports = (req, res) => {
    if (req.session.userId) {

        return res.render('create',  { errors: req.flash('validationErrors'), createPost: true});
    }

    res.redirect('/auth/login');
}

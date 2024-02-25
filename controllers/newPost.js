module.exports = (req, res) => {
    if (req.session.userId) {
        // const data = req.flash('data')[0];
        // let title = "";
        // let body = "";
        // let image = "";
        // if (data) {
        //     title = data.title;
        //     body = data.body;
        //     image = data.image;
        // }
        return res.render('create',  { errors: req.flash('validationErrors')});
    }

    res.redirect('/auth/login');
}

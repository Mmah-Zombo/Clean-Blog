module.exports = (req, res, next) => {
    // if (req.files == null || req.body.title == null || req.body.body == null)
    if (req.files == null) {
        req.flash('validationErrors', "Please upload an image");
        return res.redirect('/posts/new');
    }

    next();
}

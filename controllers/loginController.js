module.exports = (req, res) => {
    const data = req.flash('data')[0];
    let username = "";
    let password = "";
    if (data) {
        username = data.username;
        password = data.password;

    }
    res.render('login', { errors: req.flash('validationErrors'), username: username, password: password});
}

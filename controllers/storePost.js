const BlogPost = require('../models/BlogPost');
const path = require('path');

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name))
    .catch(err => console.log(err));
    BlogPost.create({
        ...req.body,
        image: '/img/' + image.name
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
}
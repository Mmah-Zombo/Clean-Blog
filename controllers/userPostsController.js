const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({userid : req.session.userId}).populate('userid');
    res.render('user_posts', { blogposts, successMessage: req.flash('successMessage') });
}

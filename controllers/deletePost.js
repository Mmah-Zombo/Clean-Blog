const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blog_id = req.params.id;
    const blog = await BlogPost.findById(blog_id);
    if (loggedIn && (loggedIn == blog.userid._id)) {
        BlogPost.deleteOne({_id: blog_id})
        .then(() => {
            const successMessage = "Blog post deleted successfully";
            req.flash('successMessage', successMessage);
            res.redirect('/user/posts')
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        });
    }
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates a new schema(table)
const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Add a post title"]
    },
    body: {
        type: String,
        required: [true, "Blog post must have a body"]
    },
    username: String,
    datePosted: {
        type: Date,
        default: new Date
    },
    image: {
        type: String,
        required: [true, "Please upload an image"]
    },
});

// Creates a model our we will use to interact with the table
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates a new schema(table)
const BlogPostSchema = new Schema({
    title: String,
    body: String
});

// Creates a model our blog will use to interact with the table
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;
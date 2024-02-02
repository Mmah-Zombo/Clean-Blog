const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
let id = "658fa8a5b83b90290727930a";

BlogPost.create({
    title: 'Bad Weather',
    body: 'The weather had been really dark lately. Many think it is due to harmattan, but it is not. It is due to heavy pollution in the atmosphere.'
})
.then(blogPost => console.log(blogPost))
.catch(err => console.log(err));

BlogPost.find({})
.then(blogPosts => {
    console.log(blogPosts);
})
.catch(err => console.log(err));

BlogPost.findById(id)
.then(blogPost => console.log(blogPost))
.catch(err => console.log(err));

BlogPost.findByIdAndUpdate(id, {
    title: "This is the new one"
})
.then(blodPost => console.log(blodPost))
.catch(err => console.log(err));

BlogPost.findByIdAndDelete(id)
.then(blogpost => console.log(blogpost.title + " successfully deleted"))
.catch(err => console.log(err));

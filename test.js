const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
let id = "658fa8a5b83b90290727930a";

BlogPost.create({
    "title": "Social Awkwardness",
    "body": "Being socially awkward is a bad thing. It limits your from connecting with people of value and hiders you from improving existing ones. I believe we should all spend time to build our social skills.",
  },
  {
    "title": "Writing",
    "body": "Write things down; whether it be emotions, ideas, conversations, aspirations, write them down, because they will come in handy one day.",
  }
  )
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

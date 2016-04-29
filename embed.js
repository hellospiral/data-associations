var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "Mike@mike.edu",
    name: "Mike Smith"
});

newUser.posts.push({
    title: "How to brew beer",
    content: "I don't actually know, sorry."
});

newUser.save(function(err, user) {
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});

/*var newPost = new Post({
    title: "Buckets",
    content: "Buckets are neat"
});
newPost.save(function(err, post) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});*/
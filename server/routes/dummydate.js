const Post = require("../models/post");

function insertPostData() {
  Post.insertMany([
    {
      title: "Post 3",
      body: "this is the first post we will be adding.",
    },
    {
      title: "Post 4",
      body: "This is another post we will be including in our database. ",
    },
    {
      title: "test post 2",
      body: "this is a test to see if I unserstand some of the functions.",
    },
  ]);
}

// insertPostData();

module.exports = insertPostData;

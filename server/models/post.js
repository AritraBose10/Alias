const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // Define other fields of your post model here
  // For example, title, content, author, etc.
  title: String,
  content: String,
  author: String,
  likes: { type: Number, default: 0 }, // Add a field for storing like count
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

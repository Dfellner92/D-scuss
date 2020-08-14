const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: { type: String, required: true},
  description: {type: String, required: true},
  date: { type: Date, default: Date.now }
});


const BlogPost = mongoose.model("Blog Post", blogPostSchema);

module.exports = BlogPost;

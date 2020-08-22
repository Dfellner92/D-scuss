import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/blogUsers");
  },
  // Gets the book with the given id
  getSavedBlogPosts: function(id) {
    return axios.get("/api/blogusers/"+ id);
  },
  getEmail: function(id) {
    return axios.get("/api/blogUsers/"+ id);
  },
  saveBlogPost: function(post, id) {
    return axios.post("/api/blogPosts/" + id, post)
  },
  deletePost: function (id) {
    return axios.delete("/api/blogPosts/" + id);
  },
  saveUser: function(userEmail) {
    return axios.post("/api/blogUsers", userEmail);
  }
};
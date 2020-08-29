import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/blogUsers");
  },
  // Gets the book with the given id
  getSavedBlogPosts: function(id) {
    return axios.get("/api/blogUsers/"+ id);
  },
  getFindLogEmail: function(id) {
    return axios.get("/api/blogUsersDelete/" + id)
  },
  saveBlogPost: function(post, id) {
    return axios.post("/api/blogPosts/" + id, post)
  },
  deletePost: function (emailId, blogId, email) {
    return axios.delete("/api/blogUsers/" + emailId + "/" + blogId + "/" + email  )
  },
  updatePost: function (emailId, blogId, email, post) {
    return axios.put("/api/blogUsers/" + emailId + "/" + blogId + "/" + email, post)
  },
  findBlogPost: function (blogId) {
    return axios.get("/api/blogPosts/" + blogId)
  },
  saveUser: function(userEmail) {
    return axios.post("/api/blogUsers", userEmail);
  }
};
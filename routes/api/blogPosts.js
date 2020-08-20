const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const blogPostsController = require("../../controllers/blogPostsController");



// router.route("/")

router.route("/:id")
.get(blogPostsController.findById)
.post(blogPostsController.createPost)
  



// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

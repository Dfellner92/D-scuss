const router = require("express").Router();
const blogPostsController = require("../../controllers/blogPostsController");

router.route("/:id")
.get(blogPostsController.findById)
.post(blogPostsController.createPost)


  

module.exports = router;

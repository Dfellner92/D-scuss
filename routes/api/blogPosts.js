const router = require("express").Router();
const blogPostsController = require("../../controllers/blogPostsController");

router.route("/:id")
  //.get(blogPostsController.findById)
  .post(blogPostsController.createPost)

router.route("/:blogId")
  .get(blogPostsController.findOne)


  

module.exports = router;

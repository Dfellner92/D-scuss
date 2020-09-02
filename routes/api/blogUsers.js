const router = require("express").Router();
const blogUsersController = require("../../controllers/blogUsersController");

router.route("/")
  .get(blogUsersController.findAll)
  .post(blogUsersController.create)

router.route("/suggestions")
  .get(blogUsersController.findAllEmails)
  
router.route("/:email")
  .get(blogUsersController.findAll)
  .post(blogUsersController.create)
  
  
router.route("/:emailId/:blogId/:email")
  .delete(blogUsersController.remove)
  .put(blogUsersController.update)

router.route("/:emailId/:blogId")

module.exports = router;

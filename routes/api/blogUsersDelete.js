const router = require("express").Router();
const blogUsersDeleteController = require("../../controllers/blogUsersDeleteController");

router.route("/:_id")
  .get(blogUsersDeleteController.findLogEmail)

module.exports = router
  
const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const blogUsersController = require("../../controllers/blogUsersController");

// Matches with "/api/books"
router.route("/")
  //.post(booksController.create)
  //.get(booksController.findAll)
  .get(blogUsersController.findAll)
  .post(blogUsersController.create)
  

router.route("/:email")
//.post(booksController.create)
//.get(booksController.findAll)
.get(blogUsersController.findAll)
.post(blogUsersController.create)
  



// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

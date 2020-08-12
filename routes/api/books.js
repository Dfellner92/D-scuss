const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const blogUserController = require("../../controllers/blogUserController");

// Matches with "/api/books"
router.route("/")
  //.post(booksController.create)
  //.get(booksController.findAll)

  .post(blogUserController.create)
  



// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

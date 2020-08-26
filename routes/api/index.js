const path = require("path");
const router = require("express").Router();
const blogUserRoutes = require("./blogUsers");
const blogPostRoutes = require("./blogPosts");
const blogUserDeleteRoutes = require("./blogUsersDelete");

// Book routes
router.use("/blogUsers", blogUserRoutes);
router.use("/blogPosts", blogPostRoutes);
router.use("/blogUsersDelete", blogUserDeleteRoutes)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
  

module.exports = router;

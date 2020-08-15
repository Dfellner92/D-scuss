const path = require("path");
const router = require("express").Router();
const blogUserRoutes = require("./blogUsers");

// Book routes
router.use("/blogUsers", blogUserRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
  

module.exports = router;

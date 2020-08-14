const router = require("express").Router();
const blogUserRoutes = require("./blogUsers");

// Book routes
router.use("/blogUsers", blogUserRoutes);

module.exports = router;

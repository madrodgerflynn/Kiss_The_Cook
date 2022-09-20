const router = require("express").Router();

const apiRoutes = require("./API");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;

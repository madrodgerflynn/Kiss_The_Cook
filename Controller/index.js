const router = require("express").Router();

const apiRoutes = require("./API");
const homeRoutes = require("./home-routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;

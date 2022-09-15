const router = require("express").Router();

const recipe_routes = require("./recipe_routes");
const test_routes = require("./home-routes");

router.use("/recipe", recipe_routes);
router.use("/", test_routes);

module.exports = router;

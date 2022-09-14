const router = require("express").Router();

const recipe_routes = require("./recipe_routes");

router.use("/", recipe_routes);

module.exports = router;

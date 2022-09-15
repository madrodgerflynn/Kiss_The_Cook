const router = require("express").Router();

const userRoutes = require("./user_routes");
const recipeRoutes = require("./recipe_routes");
const homeRoutes = require("./home-routes");

router.use("/recipe", recipeRoutes);
router.use("/api", userRoutes);
router.use("/", homeRoutes);


module.exports = router;

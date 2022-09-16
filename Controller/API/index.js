const router = require("express").Router();

const userRoutes = require("./user_routes");
const recipeRoutes = require("./recipe_routes");

router.use("/recipes", recipeRoutes);
router.use("/users", userRoutes);

module.exports = router;

const router = require("express").Router();

const userRoutes = require("./user_routes");
const recipeRoutes = require("./recipe_routes");
const addRecipeRoutes = require("./add-recipe");
router.use("/recipes", recipeRoutes);
router.use("/users", userRoutes);
router.use("/add-recipe", addRecipeRoutes);
module.exports = router;

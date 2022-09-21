const router = require("express").Router();

const userRoutes = require("./user_routes");
const recipeRoutes = require("./recipe_routes");
const addRecipeRoutes = require("./add-recipe");
const deleteRecipeRoutes = require("./delete-recipe");

router.use("/recipes", recipeRoutes);
router.use("/users", userRoutes);
router.use("/add-recipe", addRecipeRoutes);
router.use("/delete-recipe", deleteRecipeRoutes);

module.exports = router;

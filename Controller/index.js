const router = require("express").Router();

const userRoutes = require("./user_routes");
const recipeRoutes = require("./recipe_routes");

router.use("/", recipeRoutes);
router.use("/api", userRoutes);

module.exports = router;

const router = require("express").Router();
const { Recipe, User } = require("../../Models");

// route --> /api/recipes
router.get("/recipes", async (req, res) => {
  try {
    const dbRecipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    console.log(chalk.red(dbRecipeData)); //we are not hitting this

    const allRecipes = dbRecipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
    console.log(chalk.blue(allRecipes));

    res.render("all-recipes", { allRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

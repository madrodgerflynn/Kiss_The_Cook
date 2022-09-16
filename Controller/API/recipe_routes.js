const router = require("express").Router();
const { Recipe, User } = require("../../Models/index");
const chalk = require("chalk");

// route --> /api/recipes
router.get("/", async (req, res) => {
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
    console.log(chalk.blue(allRecipes)); //or this
    res.status(200).json(allRecipes);
    // res.render("all-recipes", { allRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//finding one recipe
router.get("/recipes/:id", async (req, res) => {
  try {
    const dbRecipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: Recipe,
          attributes: [
            "id",
            "title",
            "image",
            "ingredients",
            "recipe_steps",
            "user_id",
          ],
        },
      ],
    });

    const recipe = dbRecipeData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render("recipes", { recipe, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

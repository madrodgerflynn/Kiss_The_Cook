const router = require("express").Router();
const { Recipe, User } = require("../Models");

router.get("/", async (req, res) => {
  try {
    const dbRecipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["title", "description"],
        },
      ],
    });

    const allRecipes = dbRecipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("login", {
      allRecipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

const router = require("express").Router();
const { Recipe, User } = require("../../Models/index");
const chalk = require("chalk");

// route --> /api/recipes
router.get("/", async (req, res) => {
  // --> for some reason this is redirecting to the home page even when req.session.loggedIn=true
  // if (!req.session.loggedIn) {
  //   res.redirect("/");
  // }
  //  else {
  try {
    const dbRecipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const allRecipes = dbRecipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
    console.log(req.session);
    res.render("all-recipes", {
      allRecipes,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // }
});

//finding one recipe by recipe id
// route --> /api/recipes/:id
router.get("/:id", async (req, res) => {
  try {
    const dbRecipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const recipe = dbRecipeData.get({ plain: true });
    console.log("========");
    console.log(req.session);
    console.log("========");
    res.render("one-recipe", { recipe, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// finding all recipes by matching user_id
// route --> /api/recipes/my/:user_id
router.get("/my/:user_id", async (req, res) => {
  try {
    const userRecipeData = await Recipe.findAll({
      where: {
        user_id: req.params.user_id,
      },
      include: {
        model: User,
        attributes: ["username"],
      },
    });

    let allRecipes = [];
    for (const recipe of userRecipeData) {
      allRecipes.push(recipe.get({ plain: true }));
    }

    res.render("all-recipes", {
      allRecipes,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(chalk.green("Oops. Failed to get recipes."));
    res.status(500).json(err);
  }
});

// api/recipes/add-recipe
//move this one too
// post a new recipe to the database
router.post("/add-recipe", async (req, res) => {
  try {
    const dbRecipeData = await Recipe.create({
      title: req.body.title,
      image: req.body.image,
      ingredients: req.body.ingredients,
      recipe_steps: req.body.recipe_steps,
      user_id: req.body.user_id,
    });
    res.status(200).json(dbRecipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

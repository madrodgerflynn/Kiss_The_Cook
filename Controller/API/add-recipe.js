const router = require("express").Router();
const { Recipe } = require("../../Models/index");
// const chalk = require("chalk");


// end point of api/add-recipe

router.get("/", async (req, res) => {
  try {
    res.render("create-recipe", {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
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

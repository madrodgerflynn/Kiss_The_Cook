const router = require("express").Router();
const { Recipe } = require("../../Models/index");
// const chalk = require("chalk");

// end point --> /api/delete-recipe/:id
router.delete("/:id", async (req, res) => {
  try {
    // find a matching recipe in the recipes table by id value
    const recipeMatch = await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });
    // if no recipe matches...
    if (!recipeMatch) {
      res.status(404).json({ message: "No recipe found with that id." });
    }
    // respond with the matching recipe --> {}
    res.status(200).json(recipeMatch);
  } catch {
    res.status(500).json({ message: "Failed to DELETE recipe." });
  }
});

module.exports = router;

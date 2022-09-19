const router = require("express").Router();
const { Recipe, User } = require("../../Models/index");
const chalk = require("chalk");

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

module.exports = router;

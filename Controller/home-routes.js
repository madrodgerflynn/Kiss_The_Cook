const router = require("express").Router();
// const { response } = require("express");

// Route to pull up homepage
router.get("/", (req, res) => {
  // if the user is already logged in, redirect to all recipes page
  if (req.session.loggedIn) {
    res.redirect("/api/recipes");
    return;
  }
  res.render("login");
});

// Route to pull up create a new account page
router.get("/create-user", (req, res) => {
  try {
    res.render("create-account");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
// const { response } = require("express");

// Route to pull up homepage
router.get("/", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
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

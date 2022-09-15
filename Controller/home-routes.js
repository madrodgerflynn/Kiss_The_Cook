const router = require("express").Router();
// const { response } = require("express");

router.get("/", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;

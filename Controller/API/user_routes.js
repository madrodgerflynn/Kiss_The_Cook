const router = require("express").Router();
const { response } = require("express");
const User = require("../../Models/users");

//create a new user -> /api/users/create-user
router.post("/create-user", async (req, res) => {
  try {
    const newUser = req.body;
    const userData = await User.create(newUser);
    if (!userData) {
      response.status(500).json({ message: "Failed to create User!" });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
  // return newUser;
});

// Post route to validate login info
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again." });
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again." });
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      console.log("Logged in");
    });

    res
      .status(200)
      .json({ user: dbUserData, message: "You are now logged in!" });
    document.location.replace("/api/recipes");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

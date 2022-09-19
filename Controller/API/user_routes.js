const router = require("express").Router();
const { response } = require("express");
const User = require("../../Models/users");
const chalk = require("chalk");

// create a new user
// route --> POST --> /api/users/create-user
router.post("/create-user", async (req, res) => {
  try {
    const newUser = req.body;
    const userData = await User.create(newUser);
    if (!userData) {
      response.status(500).json({ message: "Failed to create User!" });
    }

    req.session.save(() => {
      // create a key, loggedIn, on the session object & set its value = true
      req.session.loggedIn = true;
      req.session.user_id = userData.id;
      console.log(req.session); // loggedIn key = true
      // res.status(200).json({ user: dbUserData });
      res.redirect("/api/recipes");
    });
    // res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
  // return newUser;
});

// Login
// route --> POST --> /api/users/login
router.post("/login", async (req, res) => {
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
      return;
    }

    console.log(req.session); // no loggedIn key
    // .save() is used to save key:value pairs on the session object
    req.session.save(() => {
      // create a key, loggedIn, on the session object & set its value = true
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      console.log(req.session); // loggedIn key = true
      // res.status(200).json({ user: dbUserData });
      res.redirect("/api/recipes");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// LOGOUT
// route --> POST --> /api/users/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

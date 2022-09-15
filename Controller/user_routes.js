const router = require("express").Router();
const { response } = require("express");
const User = require("../../models/User");

router.post("/api/create-user", async (req, res) => {
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
  return newUser;
});

initmodule.exports = router;

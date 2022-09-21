const User = require("./users");
const Recipe = require("./recipes");

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Recipe };

const User = require("./Users");
const Recipe = require("./Recipes");

User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Recipe };

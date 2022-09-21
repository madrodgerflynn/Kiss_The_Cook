const sequelize = require("../config/connection");
const seedRecipes = require("./recipeData");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedRecipes();
  process.exit(0);
};

seedAll();

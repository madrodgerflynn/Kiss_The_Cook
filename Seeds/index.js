const sequelize = require("../Config/connection");
const seedRecipes = require("./recipeData");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedRecipes();
  await seedUsers();
  process.exit(0);
};

seedAll();

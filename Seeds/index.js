const sequelize = require("../Config/connection");
const seedRecipes = require("./recipeData");
const seedUsers = require("./userData");
const { User } = require("../Models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  // await seedUsers();
  await User.bulkCreate(seedUsers);
  await seedRecipes();
  process.exit(0);
};

seedAll();

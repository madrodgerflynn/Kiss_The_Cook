const { User } = require("../Models");

const userData = [
  {
    username: "relero90",
    password: "superSecret",
  },
  {
    username: "madrodgerflynn",
    password: "reallySecret",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
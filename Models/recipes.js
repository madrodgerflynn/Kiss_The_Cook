const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recipe_steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", //might need to be singular - double check
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "recipe",
  }
);

module.exports = Recipe;

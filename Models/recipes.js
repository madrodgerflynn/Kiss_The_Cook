const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
    ingredients: {
      type: DataTypes.ARRAY, //needs to receive an array of strings <8000 characters in length
      allowNull: false,
    },
    recipe_steps: {
      type: DataTypes.ARRAY, //needs to receive an array of strings <8000 characters in length
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: recipe,
  }
);

module.exports = Recipe;

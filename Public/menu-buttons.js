// const { User } = require("../Models");

const allRecipesBtn = async () => {
  console.log("button working");
  document.location.replace("/api/recipes");
};

const myRecipesBtn = async () => {
  // how to pull current user's id?
  const thisUser = await User.findOne;
  document.location.replace("/api/my/:user_id");
};

const addRecipeBtn = async () => {
  //include route to form for adding a recipe
};

const logOutBtn = async () => {
  document.location.replace("/");
};

document.querySelector("#allBtn").addEventListener("click", allRecipesBtn);
document.querySelector("#myBtn").addEventListener("click", myRecipesBtn);
document.querySelector("#addBtn").addEventListener("click", addRecipeBtn);
document.querySelector("#logout").addEventListener("click", logOutBtn);

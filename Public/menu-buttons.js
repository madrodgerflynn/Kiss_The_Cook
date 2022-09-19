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
  const response = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("logging out");
    window.location.replace("/");
  } else {
    console.log(`logout.js line 10 catch`);
  }
};

document.querySelector("#allBtn").addEventListener("click", allRecipesBtn);
document.querySelector("#myBtn").addEventListener("click", myRecipesBtn);
document.querySelector("#addBtn").addEventListener("click", addRecipeBtn);
document.querySelector("#logout").addEventListener("click", logOutBtn);

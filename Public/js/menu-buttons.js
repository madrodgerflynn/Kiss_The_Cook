// const { json } = require("sequelize");

const allRecipesBtn = async () => {
  console.log("button working");
  document.location.replace("/api/recipes");
};

const myRecipesBtn = (event) => {
  // how to pull current user's id?
  console.log(event.target);
  const thisUser = event.target.getAttribute("data-type");
  console.log(thisUser);

  document.location.replace(`/api/recipes/my/${thisUser}`);
};

const surpriseMe = async () => {
  // fetch all recipes
  const response = await fetch("/api/recipes/all", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const recipes = await response.json();
  // random number generator to pick a random recipe & capture ID
  let selectedRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  // render one-recipe with id value found
  let path = `/api/recipes/${selectedRecipe.id}`;
  window.location.replace(path);
};

const addRecipeBtn = () => {
  document.location.replace("/api/add-recipe");
};

const logOutBtn = async () => {
  const response = await fetch("/api/users/logout", {
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
document.querySelector("#surpriseBtn").addEventListener("click", surpriseMe);
document.querySelector("#addBtn").addEventListener("click", addRecipeBtn);
document.querySelector("#logout").addEventListener("click", logOutBtn);

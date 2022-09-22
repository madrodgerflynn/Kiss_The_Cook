const deleteRecipe = async () => {
  // fetch session object
  const sessionRes = await fetch("/api/users/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  // parse response
  const session = await sessionRes.json();
  const userId = session.user_id;

  const recipeRes = await fetch("/api/recipes/all", {
    method: "GET",
    // headers: { "Content-Type": "application/json" },
  });
  const recipeData = await recipeRes.json();
  console.log(recipeData); //returns array of all recipe objects

  let recipeTitle = document.querySelector(".recipe-title");

  let matchingRecipe = [];
  for (const recipe of recipeData) {
    if (recipe.user_id === userId && recipe.title == recipeTitle.textContent) {
      console.log(recipe.id);
      matchingRecipe.push(recipe);
    }
  }
  console.log(matchingRecipe);

  // capture recipe's id value
  let recipeId = matchingRecipe[0].id;
  console.log(recipeId);
  // template string fetch path with captured id value: /api/delete-recipe/${recipeId}
  const path = `/api/delete-recipe/${recipeId}`;
  // fetch request to path
  const deleteRes = await fetch(path, () => {});
  const parse = await deleteRes.json();
  console.log(parse);
  console.log("success!");
};

if (document.querySelector(".delete")) {
  document
    .querySelector(".delete-confirm")
    .addEventListener("click", deleteRecipe);
}

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
    headers: { "Content-Type": "application/json" },
  });
  const recipeData = await recipeRes.json();

  const recipeTitle = document.querySelector(".recipe-title");

  let matchingRecipe = [];
  for (const recipe of recipeData) {
    if (recipe.user_id === userId && recipe.title == recipeTitle.textContent) {
      matchingRecipe.push(recipe);
    }
  }
  // capture recipe's id value
  let recipeId = matchingRecipe[0].id;

  // template string fetch path with captured id value: /api/delete-recipe/${recipeId}
  const path = `/api/delete-recipe/${recipeId}`;
  console.log(path);
  // fetch request to path
  const deleteRes = await fetch(path, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const parse = await deleteRes.json();
  console.log(parse);
  //   console.log("success!");
  window.location.replace("/");
};

if (document.querySelector(".delete")) {
  document
    .querySelector(".delete-confirm")
    .addEventListener("click", deleteRecipe);
}

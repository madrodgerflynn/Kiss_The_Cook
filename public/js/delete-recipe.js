const deleteRecipe = async () => {
  // pop-up modal - confirm that the user really wants to do this
  // capture recipe's id value
  let recipeId;
  // template string fetch path with captured id value: /api/delete-recipe/${recipeId}
  const path = `/api/delete-recipe/${recipeId}`;
  // fetch request to path
  const deleteRes = await fetch(path, () => {});
  const parse = await deleteRes.json();
  console.log(parse);
  console.log("success!");
};

if (document.querySelector(".delete")) {
  document.querySelector(".delete").addEventListener("click", deleteRecipe);
}

const deleteBtn = document.querySelector(".delete");

const deleteRecipe = async () => {
  // pop-up modal - confirm that the user really wants to do this
  // capture recipe's id value
  // template string fetch path with captured id value: /api/delete-recipe/${recipeId}
  // fetch request to path
};

const renderDeleteBtn = () => {
  // logic to render delete button only when recipe's user_id = user's id
};
renderDeleteBtn();

deleteBtn.addEventListener("click", deleteRecipe);

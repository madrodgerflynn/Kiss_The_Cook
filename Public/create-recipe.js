const submitButton = document.querySelector("#submit-button")
const createRecipeFormHandler = async (event) => {

    const newRecipeName = document.querySelector("#recipe-name").value.trim();
    const newIngredientList = document.querySelector("#new-ingredient-list").value.trim();
    const newStepList = document.querySelector("#new-step-list").value.trim();
}

submitButton.addEventListener("click", createRecipeFormHandler);
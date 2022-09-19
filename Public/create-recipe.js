const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector('#name-input');
const ingredientInput = document.querySelector('#ingredient-input');
const stepInput = document.querySelector('#step-input');
let ingredientArray = []
let stepArray = []




const createRecipeFormHandler =  (event) => {

    // const newRecipeName = nameInput.value.trim();
    // const newIngredientList = ingredientInput.value.trim();
    // const newStepList = stepInput.value.trim();
    nameFormHandler()
}


function nameFormHandler() {
    const name = nameInput.value.trim()
    console.log(name);
    if (name === null) {
        console.log("Please enter a name");
    } else {
        const newName = document.createElement(name);
        document.body.appendChild(newName);
    }
}

function ingredientFormHandler() {

}

function stepFormHandler() {

}


submitButton.addEventListener("click", createRecipeFormHandler);
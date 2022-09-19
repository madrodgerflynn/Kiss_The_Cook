const addNameButton = document.querySelector('#add-name-button');
const addIngredientButton = document.querySelector('#add-ingredient-button');
const addStepButton = document.querySelector('#add-step-button');
const nameInput = document.querySelector('#name-input');
const ingredientInput = document.querySelector('#ingredient-input');
const stepInput = document.querySelector('#step-input');

function saveName () {
    const savedName = { name: nameInput.value };
    console.log(savedName);
    localStorage.setItem("savedName", JSON.stringify(savedName));
}

function displayName () {}

function saveIngredient (input) {
    
}

function displayIngredient () {

}

function saveStep (input) {
    
}

function displayStep () {

}

addNameButton.addEventListener("click", saveName)
addIngredientButton.addEventListener("click", )
addStepButton.addEventListener("click", )
// SUBMIT button
const submitButton = document.querySelector("#submit-button");
// ADD buttons
const addNameButton = document.querySelector('#add-name-button');
const addImageButton = document.querySelector('#add-image-button');
const addIngredientButton = document.querySelector('#add-ingredient-button');
const addStepButton = document.querySelector('#add-step-button');
// INPUT forms
const nameInput = document.querySelector('#name-input');
const imageInput = document.querySelector('#image-input');
const ingredientInput = document.querySelector('#ingredient-input');
const stepInput = document.querySelector('#step-input');
// APPEND text
const nameTextDiv = document.querySelector('#name-text');
const ingredientUl = document.querySelector('#ingredient-list');
const stepOl = document.querySelector('#step-list');
// RESPOND to user
const feedback = document.querySelector('#feedback');
// EMPTY ARRAYS
let ingredientArray = []
let stepArray = []


const createRecipeFormHandler = async (event) => {
    if (recipeName && ingredientLi && stepLi ) {
        const response = await fetch("/api/recipes/add-recipe", {
            method: "POST",
            body: JSON.stringify({
                title: recipeName,
                image: image,
                ingredients: ingredientArray,
                recipe_steps: stepArray,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace(" ")
        }
    }

    
}


function nameFormHandler(event) {
    event.preventDefault()
    const recipeName = nameInput.value
    // console.log(name);
    if (recipeName === '') {
        console.log("Please enter a name");
    } else {
        const newNameH2 = document.createElement("h2");
        newNameH2.textContent = recipeName
        nameTextDiv.appendChild(newNameH2);
        nameInput.value = ''
        // console.log(name);
    }
}

function imageFormHandler(event) {
    event.preventDefault()
    const image = imageInput.value
    console.log(image);
    if (image=== '') {
        console.log("Please enter an image");
    } else {
        const newImage = document.createElement();
        newImage.textContent = image
        nameTextDiv.appendChild(newImage);
    }
}

function ingredientFormHandler(event) {
    event.preventDefault()
    const ingredient = ingredientInput.value
    // console.log(ingredient);
    if (ingredient === '') {
        console.log("Please enter an ingredient");
    } else {
        const ingredientLi = document.createElement("li");
        ingredientLi.classList.add("list-group-item")
        ingredientLi.textContent = ingredient
        ingredientUl.appendChild(ingredientLi);
        ingredientInput.value = ''
        // console.log(ingredientLi.textContent);
        ingredientArray.push(ingredientLi.textContent)
        console.log(ingredientArray);
    }
}

function stepFormHandler(event) {
    event.preventDefault()
    const step = stepInput.value
    if(step === '') {
        console.log("Please enter a recipe step");
    } else {
        const stepLi = document.createElement("li");
        stepLi.classList.add("list-group-item")
        stepLi.textContent = step
        stepOl.appendChild(stepLi);
        stepInput.value = ''
        stepArray.push(stepLi.textContent)
        console.log(stepArray);
    }

}

// Event Handlers
addNameButton.addEventListener("click", nameFormHandler);
addImageButton.addEventListener('click', imageFormHandler);
addIngredientButton.addEventListener("click", ingredientFormHandler);
addStepButton.addEventListener("click", stepFormHandler);
submitButton.addEventListener("click", createRecipeFormHandler);
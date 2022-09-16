const openSingleRecipe = async (event) => {
  event.preventDefault();
  //second if option not working...
  if (
    event.target.className === "card-img-top" ||
    event.target.className === "click"
  ) {
    //get recipe id
    console.log("working");
    const thisId = event.target.getAttribute("recipe_id");
    console.log(thisId); //replace with new path
    document.location.replace(`/api/recipes/` + thisId);
  }
};

document.querySelector("#recipes").addEventListener("click", openSingleRecipe);

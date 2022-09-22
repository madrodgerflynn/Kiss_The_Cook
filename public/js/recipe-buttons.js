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
  // renderDeleteBtn();
};

// function to render delete button only when recipe's user_id = user's id
// const renderDeleteBtn = async () => {
//   // fetch session object
//   const sessionRes = await fetch("/api/users/", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   // parse response
//   const session = await sessionRes.json();
//   console.log(session.user_id);
//   console.log(session.username);

//   // grab username from recipe
//   const byAtUsername = document.querySelector(".username").textContent;

//   // if the displayed recipe belongs to the loggedIn user
//   if (`By: @${session.username}` === byAtUsername) {
//     // stop hiding the delete button
//     document.querySelector(".delete").classList.remove("hidden");
//   }
// };

document.querySelector("#recipes").addEventListener("click", openSingleRecipe);

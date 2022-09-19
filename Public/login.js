const loginFormHandler = async (event) => {
  event.preventDefault();
  // console.log("login.js is loaded");
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value;
  const feedback = document.querySelector("#feedback-area");

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("yay");
      window.location.replace("/api/recipes");
    } else {
      feedback.textContent = "Failed to login. Please try again!";
      //   then refresh page?
    }
  }
};

//Sends user to the create a new account page
const createAccountPage = async (event) => {
  document.location.replace("/create-user");
};
// Binds an event listener to the login button on login page
document
  .querySelector("#login-btn")
  .addEventListener("click", loginFormHandler);

// Logic to go to the create an account page when user clicks "Create a new account"
document
  .querySelector("#new-account-btn")
  .addEventListener("click", createAccountPage);

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const feedback = document.querySelector("#feedback-area");

  if (email && password) {
    // TODO: How to make sure this is a valid user?
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/all-recipes");
    } else {
      feedback.textContent = "Failed to login. Please try again!";
      //   then refresh page?
    }
  }
};

//Sends user to the create a new account page
const createAccountPage = async (event) => {
  document.location.replace("/api/create-user");
};
// Binds an event listener to the login button on login page
document
  .querySelector("#login-btn")
  .addEventListener("submit", loginFormHandler);

// Logic to go to the create an account page when user clicks "Create a new account"
document
  .querySelector("#new-account-btn")
  .addEventListener("submit", createAccountPage);

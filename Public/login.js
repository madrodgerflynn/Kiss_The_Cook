const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const feedback = document.querySelector("#feedback-area");

  if (email && password) {
    // TODO: How to make sure this is a valid user?
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      feedback.textContent = "Failed to login. Please try again!";
      //   then refresh page?
    }
  }
};

// TODO: Write logic to switch pages at this point
const createAccountPage = async (event) => {};
// Binds an event listener to the login button on login page
document
  .querySelector("#login-btn")
  .addEventListener("submit", loginFormHandler);

// Logic to go to the create an account page when user clicks "Create a new account"
document
  .querySelector("#new-account-btn")
  .addEventListener("submit", createAccountPage);

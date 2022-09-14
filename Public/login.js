const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const feedback = document.querySelector("#feedback-area");

  if (email && password) {
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

document
  .querySelector("#login-button")
  .addEventListener("submit", loginFormHandler);

const createAccountFormHandler = async (event) => {
  console.log("working!");
  event.preventDefault();

  const newUsername = document.querySelector("#username-create").value.trim();
  const newPassword = document.querySelector("#password-create").value.trim();
  const confirmPassword = document
    .querySelector("#confirm-password-create")
    .value.trim();
  const feedback = document.querySelector("#feedback");

  //This won't be a good user experience because they'll have to re-type everything
  if (newPassword !== confirmPassword) {
    feedback.textContent = "Passwords don't match.";
    return;
  }

  if (newUsername && newPassword && confirmPassword) {
    const response = await fetch("/api/users/create-user", {
      method: "POST",
      body: JSON.stringify({
        username: newUsername,
        password: newPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      feedback.textContent = "Failed to create new user. Please try again!";
    }
  }
};

document
  .querySelector("#create-account-btn")
  .addEventListener("click", createAccountFormHandler);

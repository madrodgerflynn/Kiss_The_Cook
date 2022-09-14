const createAccountFormHandler = async (event) => {
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
    const response = await fetch("/api/create-user", {
      method: "POST",
      body: JSON.stringify({ newUsername, newPassword }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/login");
    } else {
      feedback.textContent = "Failed to create new user. Please try again!";
    }
  }
};

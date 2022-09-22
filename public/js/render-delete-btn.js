// function to render delete button only when recipe's user_id = user's id
const renderDeleteBtn = async () => {
  // fetch session object
  const sessionRes = await fetch("/api/users/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  // parse response
  const session = await sessionRes.json();

  // grab username from recipe
  const byAtUsername = document.querySelector(".username").textContent;

  // if the displayed recipe belongs to the loggedIn user
  if (`By: @${session.username}` === byAtUsername) {
    // stop hiding the delete button
    document.querySelector(".delete").classList.remove("hidden");
  }
};
renderDeleteBtn();

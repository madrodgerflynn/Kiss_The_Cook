const logout = async () => {
  const response = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.replace("/");
  } else {
    console.log(`logout.js line 10 catch`);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

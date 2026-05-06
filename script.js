const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// ==========================
// SHOW BUTTON IF USER EXISTS
// ==========================
function checkExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Run when page loads
checkExistingUser();

// ==========================
// FORM SUBMIT
// ==========================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (checkbox.checked) {
    // SAVE credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // REMOVE credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);

  // update button visibility
  checkExistingUser();
});

// ==========================
// LOGIN AS EXISTING USER
// ==========================
existingBtn.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});

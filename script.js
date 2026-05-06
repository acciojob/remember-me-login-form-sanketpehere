const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");


/* ==========================
   CHECK SAVED CREDENTIALS
==========================*/

function checkExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

checkExistingUser();


/* ==========================
   FORM SUBMIT
==========================*/

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove saved credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkExistingUser();
});


/* ==========================
   LOGIN AS EXISTING USER
==========================*/

existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
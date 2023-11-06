const users = [
  { user: "admin", password: "1234" },
  { user: "Sti3v", password: "1234"},
];

//* Date d'expiration dans 2 heure
const expirationDate = new Date();
expirationDate.setHours(expirationDate.getHours() + 2);

const form = document.forms[0]; //* récupère le premier formulaire de la page */

const usernameInput = document.getElementById("username");
const mdpInput = document.getElementById("password");
let cookieValue;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = mdpInput.value;
  const user = users.find(
    (user) => user.user === username && user.password === password
  );
  if (user) {
    document.cookie = `connecter=true,&(usernameInput);expires=${expirationDate.toUTCString()};path=/`;
    window.location.href = "../index.html";
  } else {
    alert("Username or password is incorrect!");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)connecter\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
});

const inputs = document.querySelectorAll("input");
inputs.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (index + 1 < inputs.length) {
        inputs[index + 1].focus();
      } else {
        inputs[0].focus();
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (index - 1 >= 0) {
        inputs[index - 1].focus();
      } else {
        inputs[inputs.length - 1].focus();
      }
    }
  });
});

//*  Ovrire et fermer l'oeil, pour montrer le mots de passz
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  }
});

if (user) {
  document.cookie = `connecter=true;expires=${expirationDate.toUTCString()};path=/`;
  document.cookie = `username=${username};expires=${expirationDate.toUTCString()};path=/`;
  window.location.href = "./index.html";
}

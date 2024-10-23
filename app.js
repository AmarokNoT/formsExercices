document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const username = document.querySelector("#name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmP = document.querySelector("#confirmPassword");

  // Validation du nom d'utilisateur
  if (validerUsername(username.value)) {
    setSuccess(username);
  } else {
    setError(
      username,
      "Username must be between 5 and 10 characters and lowercase only"
    );
  }

  // Validation de l'email
  if (validerEmail(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Please enter a valid email address");
  }

  // Validation du mot de passe
  if (validatePassword(password.value)) {
    setSuccess(password);
  } else {
    setError(password, "Password must be between 8 and 15 characters");
  }

  // Validation de la confirmation du mot de passe
  if (password.value === confirmP.value && password.value !== "") {
    setSuccess(confirmP);
  } else {
    setError(confirmP, "Passwords must match");
  }
});

// Fonctions de validation
function validerUsername(username) {
  return (
    username.length >= 5 && username.length <= 10 && /^[a-z]+$/.test(username)
  );
}

function validerEmail(email) {
  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  return password.length >= 8 && password.length <= 15;
}

// Fonctions d'erreur et de succès
function setError(input, message) {
  const caseDiv = input.parentElement; // Sélectionner le parent de l'input
  const msg = caseDiv.querySelector(".msg"); // Sélectionner le message
  msg.textContent = message; // Changer le texte du message d'erreur
  msg.classList.add("error");
  msg.classList.remove("success");
  input.classList.add("error");
  input.classList.remove("success");
}

function setSuccess(input) {
  const caseDiv = input.parentElement;
  const msg = caseDiv.querySelector(".msg");
  msg.textContent = "Looks good!";
  msg.classList.add("success");
  msg.classList.remove("error");
  input.classList.add("success");
  input.classList.remove("error");
}

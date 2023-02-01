'use strict';

var lastName = document.getElementById("lastName");
var firstName = document.getElementById("firstName");
var password = document.getElementById("password");
var passwordVerif = document.getElementById("passwordVerif");
var birthday = document.getElementById("birthday");
var email = document.getElementById("email");

const nameRegex = /^[a-zA-Z]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const birthdayRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/[0-9]{4}$/;
const acceptCGUIsValid = acceptCGUValue;

function validateName(name) {
  return nameRegex.test(name);
}

function validatePassword(password) {
  return passwordRegex.test(password);
}

function validateEmail(email) {
  return emailRegex.test(email);
}

function validateBirthday(birthday) {
  return birthdayRegex.test(birthday);
}
function acceptCGUValue(acceptcgu) {
    return acceptCGUIsValid.test(acceptcgu);
}
function checkPassword() {
    if (password.value !== passwordVerif.value) {
      alert("Les mots de passe ne correspondent pas.");
      return false;
    }
    else {
    return true;
}

  }

const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  if (!validateName(lastName.value)) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "Nom non valide";

  } else if (!validateName(firstName.value)) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "Prénom non valide";

  } else if (!validatePassword(password.value)) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "Mot de passe non valide";

//   } else if (password.value !== passwordVerif.value) {
//     event.preventDefault();
//     document.getElementById("errorMessage").innerHTML = "Les mots de passe ne correspondent pas";

  } else if (!validateEmail(email.value)) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "Adresse e-mail non valide";
    
  } else if (!validateBirthday(birthday.value)) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "Date de naissance non valide (MM/DD/YYYY)";
  }

  else if (!acceptCGUIsValid) {
    alert("Vous devez accepter les conditions générales d'utilisation.");
  }
});
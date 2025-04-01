function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalBtnClose.addEventListener("click", closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Prevent the modal from closing on Submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
})

// Validate Firstname
function validatePrenom() {
  let prenom = document.getElementById("first").value;
  if (prenom.length < 2) {
    return false;
  } else {
    return true;
  }

}

// Validate Lastname
function validateNom() {
  let nom = document.getElementById("last").value;
  if (nom.length < 2) {
    return false;
  } else {
    return true;
  }
}

// Validate Email
function validateEmail() {
  let email = document.getElementById("email").value;
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    return false;
  }  else {
    return true;
  }
}

// Make sure the values are correct OR Error
function validate() {
    validatePrenom();
    validateNom();
    validateEmail();
}
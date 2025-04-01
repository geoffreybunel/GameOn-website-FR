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
  let first = document.getElementById("first");
  if (first.value.trim().length < 2) {
    console.log(false);
  } else {
    console.log(true);
  }
}

// Validate Lastname
function validateNom() {
  let last = document.getElementById("last");
  if (last.value.trim().length < 2) {
    console.log(false);
  } else {
    console.log(true);
  }
}

// Validate Email
function validateEmail() {
  let email = document.getElementById("email");
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email.value)) {
    console.log(false);
  } else {
    console.log(true);
  }
}

// Validate Birthdate
function validateBirthdate() {
  let birthdate = document.getElementById("birthdate");
  if (birthdate.value === "") {
    console.log(false);
  } else {
    console.log(true);
  }
}

// Validate tournaments number
function validateQuantity() {
  let quantity = document.getElementById("quantity");
  if (quantity.value === "" || isNaN(quantity.value)) {
    console.log(false);
  } else {
    console.log(true);
  }
}

// Make sure the values are correct OR Error
function validate() {
    validatePrenom();
    validateNom();
    validateEmail();
    validateBirthdate()
    validateQuantity()
}
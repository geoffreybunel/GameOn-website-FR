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
  const nameRegExp = /^[\p{Letter}\s\-.']+$/u;
  
  if (first.value.trim().length < 2 || !nameRegExp.test(first.value)) {
    console.log("First is " + false);
  } else {
    console.log("First is " + true);
  }
}

// Validate Lastname
function validateNom() {
  let last = document.getElementById("last");
  const nameRegExp = /^[\p{Letter}\s\-.']+$/u;

  if (last.value.trim().length < 2 || !nameRegExp.test(last.value)) {
    console.log("Last is " + false);
  } else {
    console.log("Last is " + true);
  }
}

// Validate Email
function validateEmail() {
  let email = document.getElementById("email");
  let emailRegExp = new RegExp('^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$');
  if (!emailRegExp.test(email.value)) {
    console.log("Email is " + false);
  } else {
    console.log("Email is " + true);
  }
}

// Validate Birthdate
function validateBirthdate() {
  let birthdate = document.getElementById("birthdate");
  if (birthdate.value === "") {
    console.log("Birthdate is " + false);
  } else {
    console.log("Birthdate is " + true);
  }
}

// Validate Quantity
function validateQuantity() {
  let quantity = document.getElementById("quantity");
  if (quantity.value === "" || isNaN(quantity.value)) {
    console.log("Quantity is " + false);
  } else {
    console.log("Quantity is " + true);
  }
}

// Validate Location
function validateLocation() {
  let location = document.querySelectorAll('input[name="location"]');

  for (let i = 0; i < location.length; i++ ) {
    if (location[i].checked) {
      console.log(i + " is " + true)
      break
    } else {
      console.log("Location is " + false)
    }
  }
}

// Validate Checkbox
function validateCheckbox() {
  let checkbox = document.getElementById("checkbox1");

  if (checkbox.checked) {
    console.log("Checkbox is " + true)
  } else {
    console.log("Checkbox is " + false)
  }
}

// Make sure the values are correct OR Error
function validate() {
    validatePrenom();
    validateNom();
    validateEmail();
    validateBirthdate()
    validateQuantity()
    validateLocation()
    validateCheckbox()
}
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
let isValid = true;

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
function validateFirst() {
  let first = document.getElementById("first");
  const nameRegExp = /^[\p{Letter}\s\-.']+$/u;
  
  if (first.value.trim().length < 2 || !nameRegExp.test(first.value)) {
    isValid = false;
    throw { element: first, message: "Veuillez entrer 2 caractères ou plus pour le champ du nom."};
  } else {
    return true;
  }
}

// Validate Lastname
function validateLast() {
  let last = document.getElementById("last");
  const nameRegExp = /^[\p{Letter}\s\-.']+$/u;

  if (last.value.trim().length < 2 || !nameRegExp.test(last.value)) {
    isValid = false;
    throw { element: last, message: "Veuillez entrer 2 caractères ou plus pour le champ du nom."};
  } else {
    return true;
  }
}

// Validate Email
function validateEmail() {
  let email = document.getElementById("email");
  let emailRegExp = new RegExp('^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$');
  if (!emailRegExp.test(email.value)) {
    isValid = false;
    throw { element: email, message: "L'email n'est pas valide."};
  } else {
    return true;
  }
}

// Validate Birthdate
function validateBirthdate() {
  let birthdate = document.getElementById("birthdate");
  if (birthdate.value === "") {
    isValid = false;
    throw { element: birthdate, message: "Vous devez entrer votre date de naissance."};
  } else {
    return true;
  }
}

// Validate Quantity
function validateQuantity() {
  let quantity = document.getElementById("quantity");
  if (quantity.value === "" || isNaN(quantity.value)) {
    isValid = false;
    throw { element: quantity, message: "Vous devez ajouter une valeur."};
  } else {
    return true;
  }
}

// Validate Location
function validateLocation() {
  let location = document.querySelectorAll('input[name="location"]');
  let locationChecked = false;

  for (let i = 0; i < location.length; i++ ) {
    if (location[i].checked) {
      locationChecked = true;
      return true;
    }
  }

  if (!locationChecked) {
    isValid = false;
    throw { element: location, message: "Vous devez choisir une option."};
  }
}

// Validate Checkbox
function validateCheckbox() {
  let checkbox = document.getElementById("checkbox1");

  if (checkbox.checked) {
    return true;
  } else {
    isValid = false;
    throw { element: checkbox, message: "Vous devez vérifier que vous acceptez les termes et conditions."};
  }
}

// Display Error Message
function displayErrorMessage(element, message) {
  let divError = document.createElement("div");
  
  divError.style.color = "red";
  divError.textContent = message;

  element.classList.add("formData::after", "formData .text-control")
  formData.append(divError)
}

// Make sure the values are correct OR Error
function validate() {
  isValid = true;

  const firstValid = validateFirst();
  const lastValid = validateLast();
  const emailValid = validateEmail();
  const birthdateValid = validateBirthdate();
  const quantityValid = validateQuantity();
  const locationValid = validateLocation();
  const checkboxValid = validateCheckbox();

  try {
    firstValid;
    lastValid;
    emailValid;
    birthdateValid;
    quantityValid;
    locationValid;
    checkboxValid;

  } catch (error) {
    displayErrorMessage(error.element, error.message);
  }

  console.log("First is " + firstValid);
  console.log("Last is " + lastValid);
  console.log("Email is " + emailValid);
  console.log("Birthdate is " + birthdateValid);
  console.log("Quantity is " + quantityValid);
  console.log("Location is " + locationValid);
  console.log("Checkbox is " + checkboxValid);

  if (isValid === true) {
    alert("Merci, nous avons reçu votre réservation !");
    closeModal();
    form.reset();
  }

  return isValid;
}
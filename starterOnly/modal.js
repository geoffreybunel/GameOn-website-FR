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
const modalContainer = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const formDiv = document.querySelector(".modal-body");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
let isValid = true;

// Creation of confirmation message
const confirmationMessage = document.createElement("div");
confirmationMessage.className = "confirmation-message";
confirmationMessage.style.display = "none";
confirmationMessage.style.textAlign = "center";
confirmationMessage.style.padding = "30px";
confirmationMessage.innerHTML = `
  <h2 style="margin-bottom: 30px; font-size: 36px; color: white;">Merci pour votre inscription</h2>
  <button class="btn-submit" id="btn-close">Fermer</button>
  `;

// Adding the confirmation message to the HTML
modalContainer.append(confirmationMessage);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalBtnClose.addEventListener("click", closeModal);

// Close modal function
function closeModal() {
  modalbg.style.display = "none";

  formDiv.style.display = "block";
  confirmationMessage.style.display = "none";
}

// Prevent the modal from closing on Submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
})

// Validate Firstname
function validateFirst() {
  const first = document.getElementById("first");
  // Define RegExp for firstname
  const nameRegExp = /^[\p{Letter}\s\-.']+$/u;
  
  // If Firstname value doesn't respect RegExp OR Firstname value < 2 characters, throw error
  if (first.value.trim().length < 2 || !nameRegExp.test(first.value)) {
    isValid = false;
    throw { element: first, message: "Veuillez entrer 2 caractères ou plus pour le prénom."};
  } else {
    return true;
  }
}

// Validate Lastname
function validateLast() {
  const last = document.getElementById("last");
  // Define RegExp for lastname
  const nameRegExp = /^[\p{Letter}\s\-.']+$/u;

  // If Lastname value doesn't respect RegExp OR Lastname value < 2 characters, throw error
  if (last.value.trim().length < 2 || !nameRegExp.test(last.value)) {
    isValid = false;
    throw { element: last, message: "Veuillez entrer 2 caractères ou plus pour le nom."};
  } else {
    return true;
  }
}

// Validate Email
function validateEmail() {
  const email = document.getElementById("email");
  // Define RegExp for Email
  const emailRegExp = new RegExp('^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$');

  // If email value doesn't respect RegExp, throw error
  if (!emailRegExp.test(email.value)) {
    isValid = false;
    throw { element: email, message: "L'email n'est pas valide."};
  } else {
    return true;
  }
}

// Validate Birthdate
function validateBirthdate() {
  const birthdate = document.getElementById("birthdate");
  const userBirthdate = new Date(birthdate.value);
  const today = new Date();
  const minimumAge = new Date();
  minimumAge.setFullYear(minimumAge.getFullYear() - 18);

  // If birthdate value is null, throw error
  if (birthdate.value === "") {
    isValid = false;
    throw { element: birthdate, message: "Vous devez entrer votre date de naissance."};
  // If birthdate value is over today's date, throw error
  } else if (userBirthdate > today) {
    isValid = false;
    throw { element: birthdate, message: "Vous devez entrer une date valide."};
  // If user age is < 18, throw error
  } else if (userBirthdate > minimumAge) {
    isValid = false;
    throw { element: birthdate, message: "Vous devez avoir 18 ans."};
  } else {
    return true;
  }
}

// Validate Quantity
function validateQuantity() {
  const quantity = document.getElementById("quantity");

  // If quantity is null or if quantity is Not a Number, throw Error
  if (quantity.value === "" || isNaN(quantity.value)) {
    isValid = false;
    throw { element: quantity, message: "Vous devez ajouter une valeur."};
  } else {
    return true;
  }
}

// Validate Location
function validateLocation() {
  const location = document.querySelectorAll('input[name="location"]');
  let locationChecked = false;

  // Check if a radio button is checked. If yes return true
  for (let i = 0; i < location.length; i++ ) {
    if (location[i].checked) {
      locationChecked = true;
      return true;
    }
  }

  // If no radio button is checked, throw Error
  if (!locationChecked) {
    isValid = false;
    throw { element: location, message: "Vous devez choisir une option."};
  }
}

// Validate Checkbox
function validateCheckbox() {
  let checkbox = document.getElementById("checkbox1");

  // If Terms is checked, return True
  if (checkbox.checked) {
    return true;
    // Else throw Error
  } else {
    isValid = false;
    throw { element: checkbox, message: "Vous devez vérifier que vous acceptez les termes et conditions."};
  }
}

// DISPLAY ERROR MESSAGE function
function displayErrorMessage(element, message) {
  let parentElement;

  // If multiple elements, chose the first one
  if (element.length) {
    parentElement = element[0].closest(".formData");
  } else {
    parentElement = element.closest(".formData");
  }

  parentElement.setAttribute("data-error", message);
  parentElement.setAttribute("data-error-visible", "true");
}

// RESET ERRORS function
function resetErrors() {
  formData.forEach(element => {
    element.removeAttribute("data-error");
    element.removeAttribute("data-error-visible");
  })
}

// DISPLAY SUCCESS MESSAGE
function displaySuccessMessage() {
  const btnCloseConfirmationMessage = document.getElementById("btn-close");

  formDiv.style.display = "none";
  confirmationMessage.style.display = "block";
  btnCloseConfirmationMessage.addEventListener("click", closeModal);
}



// VALIDATION  function
function validate() {
  // Reset errors on submit
  resetErrors();

  // Reset isValid to true at the beginning of validation
  isValid = true;

  // Create an array to stock all the errors
  let errors = [];

  // Firstname Validation
  try {
    validateFirst();
  } catch (error) {
    // Push error in errors's array
    errors.push(error);
  }

  // Lastname Validation
  try {
    validateLast();
  } catch (error) {
    errors.push(error);
  }

  // Email Validation
  try {
    validateEmail();
  } catch (error) {
    errors.push(error);
  }

  // Birthdate validation
  try {
    validateBirthdate();
  } catch (error) {
    errors.push(error);
  }

  // Quantity validation
  try {
    validateQuantity();
  } catch (error) {
    errors.push(error);
  }

  // Location validation
  try {
    validateLocation();
  } catch (error) {
    errors.push(error);
  }

  // Checkbox validation
  try {
    validateCheckbox();
  } catch (error) {
    errors.push(error);
  }

  // Display all errors collected from TRY/CATCH
  // If errors's array > 0 = If there is at least one error
  if (errors.length > 0) {
    isValid = false;
    errors.forEach(error => {
      displayErrorMessage(error.element, error.message);
    })
  }

  // If no errors
  if (isValid === true) {
    // display success message
    displaySuccessMessage();
    // Reset form inputs
        form.reset();
  }
}
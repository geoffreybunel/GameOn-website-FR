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
  const first = document.getElementById("first");
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
  const last = document.getElementById("last");
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
  const email = document.getElementById("email");
  const emailRegExp = new RegExp('^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$');
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
  if (birthdate.value === "") {
    isValid = false;
    throw { element: birthdate, message: "Vous devez entrer votre date de naissance."};
  } else {
    return true;
  }
}

// Validate Quantity
function validateQuantity() {
  const quantity = document.getElementById("quantity");
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
  let parentElement;

  // Si c'est une NodeList (comme pour les radio buttons)
  if (element.length) {
    parentElement = element[0].closest(".formData");
  } else {
    // Pour tous les autres éléments
    parentElement = element.closest(".formData");
  }

  // Définir le message d'erreur dans l'attribut data-error
  parentElement.setAttribute("data-error", message);

  // Ajouter le data-error-visible au parent
  parentElement.setAttribute("data-error-visible", "true");
}

// Reset Errors
function resetErrors() {
  const formData = document.querySelectorAll(".formData");

  formData.forEach(element => {
    element.removeAttribute("data-error");
    element.removeAttribute("data-error-visible");
  })
}

// Make sure the values are correct OR Error
function validate() {
  isValid = true;

  resetErrors();

  try {
    validateFirst();
    validateLast();
    validateEmail();
    validateBirthdate();
    validateQuantity();
    validateLocation();
    validateCheckbox();

  } catch (error) {
    displayErrorMessage(error.element, error.message);
  }

  if (isValid === true) {
    alert("Merci, nous avons reçu votre réservation !");
    closeModal();
    form.reset();
  }

  return isValid;
}
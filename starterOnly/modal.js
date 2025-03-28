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

//Inputs validation
function validateName() {
  let first = document.getElementById("first");
  let last = document.getElementById("last");

  if (first.length < 2) {
    throw new Error("Le prénom est trop court.")
  }
  if (last.length < 2) {
    throw new Error("Le nom est trop court. ")
  }
}

function validateEmail() {
  let email = document.getElementById("email");
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
      throw new Error("L'email n'est pas valide.")
  }
}





// Form Submit
function submitForm() {
  form.addEventListener("submit", (event) => {
    console.log(event)
  })
}

document
  .getElementById("regbtn")
  .addEventListener("click", function submitHandler(event) {
    event.preventDefault();
    fnameChecker();
    lnameChecker();
    emailChecker();
    passchecker();
    repasschecker();
    genchecker();
    agechecker();
    phnchecker();
    adrchecker();
    statechecker();
    declchecker();
  });

let fname = document.getElementById("fname");
let fnameError = document.getElementById("fnError");
function fnameChecker() {
  if (fname.value.trim().length > 30) {
    fnameError.textContent = "First name should not exceed 30 characters!";
  } else if (!fname.value) {
    fnameError.textContent = "POOR";
  } else if (!/^[a-zA-Z]+$/.test(fname.value.trim())) {
    fnameError.textContent = "First name should containt only alphabets!";
  } else {
    fnameError.textContent = "";
  }
}

let lname = document.getElementById("lname");
let lnameError = document.getElementById("lnError");
function lnameChecker() {
  if (lname.value.trim().length > 30) {
    lnameError.textContent = "Name should not exceed 30 characters!";
  } else if (!lname.value) {
    lnameError.textContent = "POOR";
  } else if (!/^[a-zA-Z]+$/.test(lname.value.trim())) {
    lnameError.textContent = "Name should containt only alphabets!";
  } else {
    lnameError.textContent = "";
  }
}

let Email = document.getElementById("Email");
let EmailError = document.getElementById("EmailError");
function emailChecker() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(Email.value.trim())) {
    EmailError.textContent = "POOR";
  } else {
    EmailError.textContent = "";
  }
}

let pass = document.querySelector("#Password");
let passError = document.querySelector("#PassError");
function passchecker() {
  if (!pass.value) {
    passError.textContent = "POOR";
  }
}

let repass = document.querySelector("#RePassword");
let repassError = document.querySelector("#RePassError");
function repasschecker() {
  if (!repass.value) {
    repassError.textContent = "POOR OR MISMATCH";
  }
}

let m = document.querySelector("#Male");
let f = document.querySelector("#Female");
let genError = document.querySelector("#GenError");
function genchecker() {
  if (!m.checked && !f.checked) {
    genError.textContent = "Please select your gender";
  }
}

let age = document.querySelector("#Age");
let ageError = document.querySelector("#AgeError");
function agechecker() {
  if (!age.value) {
    ageError.textContent = "POOR";
  }
}

let phn = document.querySelector("#Phone");
let phnError = document.querySelector("#PhnError");
function phnchecker() {
  if (!phn.value) {
    phnError.textContent = "POOR";
  }
}

let adr = document.querySelector("#Address");
let adrError = document.querySelector("#AdrError");
function adrchecker() {
  if (!adr.value) {
    adrError.textContent = "POOR";
  }
}

let state = document.querySelector("#State");
let stateError = document.querySelector("#StateError");
function statechecker() {
  if (!state.value) {
    stateError.textContent = "POOR";
  }
}

let decl = document.querySelector("#decl");
let declCont = document.querySelector("#declCont");
function declchecker() {
  if (!decl.checked) {
    declCont.classList.add("error");
  }
}

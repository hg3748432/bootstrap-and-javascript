document
  .getElementById("submit-btn")
  .addEventListener("click", function submitHandler(event) {
    event.preventDefault();
    nameChecker();
    UrlChecker();
    emailChecker();
    MsgChecker();
  });

let Name = document.getElementById("Name");
let NameError = document.getElementById("NameError");
function nameChecker() {
  if (Name.value.trim().length > 30) {
    Name.classList.add("error");
    NameError.textContent = "Name should not exceed 30 characters!";
  } else if (!Name.value) {
    Name.classList.add("error");
    NameError.textContent = "This field is required";
  } else if (!/^[a-zA-Z]+$/.test(Name.value.trim())) {
    Name.classList.add("error");
    NameError.textContent = "Name should containt only alphabets!";
  } else {
    NameError.textContent = "";
  }
}

let Email = document.getElementById("Email");
let EmailError = document.getElementById("EmailError");
function emailChecker() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(Email.value.trim())) {
    EmailError.textContent = "A valid email address is required";
    Email.classList.add("error");
  } else {
    EmailError.textContent = "";
  }
}

let url = document.querySelector("#Website");
let urlerror = document.querySelector("#UrlError");
function UrlChecker() {
  if (!url.value) {
    urlerror.textContent = "A valid url is required";
    url.classList.add("error");
  } else {
    urlerror.textContent = "";
  }
}

let Message = document.getElementById("Message");
let Msgerr = document.getElementById("MsgError");
function MsgChecker() {
  if (!Message.value) {
    Msgerr.textContent = "This field is required";
    Message.classList.add("error");
  }
}

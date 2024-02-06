// Validate Email
const validateEmail = () => {
  const msg = document.querySelector(".field-input span");
  const email = document.getElementById("email").value;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (email.match(regexEmail)) {
    msg.innerHTML = "Email Valid";
  } else {
    msg.innerHTML = "invalid email";
  }
};

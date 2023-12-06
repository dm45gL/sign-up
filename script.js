function validateForm() {
  let requiredFields = ["fullName", "username", "email", "password", "confirmPassword"];
  for (let field of requiredFields) {
    let input = document.getElementById(field);
    if (input.value === "") {
      input.classList.add("error");
      return false;
    } else {
      input.classList.remove("error");
    }
  }

  
  let emailInput = document.getElementById("email");
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    return false;
  } else {
    emailInput.classList.remove("error");
  }


  let passwordInput = document.getElementById("password");
  let confirmPasswordInput = document.getElementById("confirmPassword");
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("error");
    return false;
  } else {
    confirmPasswordInput.classList.remove("error");
  }

  let termsInput = document.getElementById("terms");
  if (!termsInput.checked) {
    termsInput.classList.add("error");
    return false;
  } else {
    termsInput.classList.remove("error");
  }

  
  if (isValid) {
    window.location.href ="../login/index.html";
  }
  return true;
}

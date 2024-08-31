
let em = document.getElementById("logemail");
let pwd = document.getElementById("logpwd");
let strengthMessage = document.createElement('small');
pwd.parentNode.appendChild(strengthMessage);  // Add the strength message below the password input

pwd.addEventListener("input", function () {
  const passwordValue = pwd.value;
  const strength = checkPasswordStrength(passwordValue);
  // Set border color and strength message according to password strength
  if (strength === 'poor') {
    pwd.style.borderColor = "red";
    strengthMessage.textContent = "Password strength: Poor";
    strengthMessage.style.color = "red";
  } else if (strength === 'medium') {
    pwd.style.borderColor = "orange";
    strengthMessage.textContent = "Password strength: Medium";
    strengthMessage.style.color = "orange";
  } else if (strength === 'strong') {
    pwd.style.borderColor = "green";
    strengthMessage.textContent = "Password strength: Strong";
    strengthMessage.style.color = "green";
  }
});
function validate() {
  const emailValue = em.value;
  const passwordValue = pwd.value;
  const isEmailValid = validateEmail(emailValue);
  const isPasswordValid = validatePassword(passwordValue);

  if (!isEmailValid) {
    alert("Invalid email format!");
  }
   if (!isPasswordValid) {
    alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
return false;  
}
  return isEmailValid && isPasswordValid;
}

// Email validation
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
// Password validation with strength check
function validatePassword(password) {
  return checkPasswordStrength(password) !== 'poor';
}
function checkPasswordStrength(password) {
  if (password.length < 8) {
    return 'poor';
  }

  const mediumRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Minimum 8 characters, one letter, one number
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Minimum 8 characters, one uppercase, one lowercase, one number

  if (strongRegex.test(password)) {
    return 'strong';
  } else if (mediumRegex.test(password)) {
    return 'medium';
  } else {
    return 'poor';
  }
}

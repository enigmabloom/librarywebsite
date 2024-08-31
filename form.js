let em = document.getElementById("email");
let pwd = document.getElementById("password");
let phno = document.getElementById("phno");
let usname = document.getElementById("username");
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
  const phoneValue = phno.value;
  const passwordValue = pwd.value;
  const usernameValue = usname.value;

  const isEmailValid = validateEmail(emailValue);
  const isPhoneValid = validatePhone(phoneValue);
  const isPasswordValid = validatePassword(passwordValue);
  

  if (!isEmailValid) {
    alert("Invalid email format!");
  }
  if (!isPhoneValid) {
    alert("Invalid phone number format!");
  }
  if (!isPasswordValid) {
    alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
  }
  if (usernameValue.trim("")==''){
    alert("user name cannot be empty")
    return false;
  }
  return isEmailValid && isPhoneValid && isPasswordValid && usernameValue;
}

// Email validation
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Phone number validation
function validatePhone(phone) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
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

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const date = document.getElementById("date").value.trim();
  const message = document.getElementById("message");

  // Basic validation
  if (!name || !mobile || !email || !password || !date) {
    message.style.color = "red";
    message.textContent = "All fields are required.";
    return;
  }

  // Mobile number validation (10 digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobile.match(mobilePattern)) {
    message.style.color = "red";
    message.textContent = "Mobile number must be 10 digits.";
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
    return;
  }

  // Password length check
  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Success
  message.style.color = "green";
  message.textContent = "Registration successful!";
});
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simple validation
  if (name === "" || email === "" || password === "") {
    message.style.color = "red";
    message.textContent = "All fields are required.";
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
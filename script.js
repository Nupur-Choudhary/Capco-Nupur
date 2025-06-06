// script.js
function validateContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (email.value.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  if (message.value.trim() === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    // You can add actual form submission logic here
    event.target.reset();
  }
}

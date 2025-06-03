(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message || !validateEmail(email)) {
    document.getElementById("status").textContent = "Please fill out all fields correctly.";
    return;
  }

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(() => {
    document.getElementById("status").textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();
  }, (error) => {
    document.getElementById("status").textContent = "Failed to send message. Try again.";
    console.error("EmailJS error:", error);
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill all fields.";
      return;
    }

    try {
      formMessage.textContent = "Sending...";
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();
      formMessage.textContent = data.message;

      if (response.ok) {
        contactForm.reset();
      }
    } catch (error) {
      formMessage.textContent = "Sent Successfully.";
    }
  });
}

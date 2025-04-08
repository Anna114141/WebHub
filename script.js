// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("modeToggle");
    const icon = document.getElementById("modeIcon");
    const body = document.body;
  
    // Load saved mode
    const savedMode = localStorage.getItem("mode") || "dark";
    body.classList.add(savedMode);
    toggle.checked = savedMode === "dark";
    icon.textContent = savedMode === "dark" ? "🌙" : "☀️";
  
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        body.classList.remove("light");
        body.classList.add("dark");
        icon.textContent = "🌙";
        localStorage.setItem("mode", "dark");
      } else {
        body.classList.remove("dark");
        body.classList.add("light");
        icon.textContent = "☀️";
        localStorage.setItem("mode", "light");
      }
    });
  });
/*function sendMail(){
  let params = {
    name:document.getElementById("name"),
    email:document.getElementById("email"),
    subject:document.getElementById("subject"),
    message:document.getElementById("message")
  }
  //emailjs.send("service_czxns16","template_wvrcld9",params).then(alert("Email sent...!"))

  emailjs.send("service_czxns16", "template_wvrcld9", params)
    .then(() => {
      alert("✅ Email sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      alert("❌ Failed to send email.");
      console.error(err);
    });
}*/

function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    title: document.getElementById("title")?.value || "Contact Message"
  };

  emailjs.send("service_ygcpi46", "template_wvrcld9", params)
    .then(function (res) {
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset(); // clears form
    })
    .catch(function (err) {
      alert("Failed to send email. Please try again.");
      console.error("EmailJS Error:", err);
    });
}



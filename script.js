//Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const name =document.getElementById("name").Value.trim();
    const email =document.getElementById("email").Value.trim();
    const message =document.getElementById("message").Value.trim();

    if (name && email && message) {
        formStatus.textContent ="✅ Message sent successfully!";
        formStatus.style.color ="blue";
        contactForm.reset();
    }
    else {
        formStatus.textContent ="❌ Please fill in all Fields.";
        formStatus.style.color ="red";
     }
});
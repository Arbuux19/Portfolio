const menuToggle = document.getElementById("menuToggle");
const body = document.body;

menuToggle.addEventListener("click", () => {
  body.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar-links2");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    body.classList.remove("active");
  });
});

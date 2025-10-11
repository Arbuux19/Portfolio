const menuToggle = document.getElementById('menuToggle');
const body = document.body;
const navLinks = document.querySelectorAll('.navbar-links2');

menuToggle.addEventListener('click', () => {
  body.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('active');
  });
});

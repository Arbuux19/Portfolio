const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav1');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
const menuIcon = menuToggle.querySelector('ion-icon[name="menu-outline"]');
const closeIcon = menuToggle.querySelector('ion-icon[name="close-outline"]');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('active');

  // Toggle icons
  if (document.body.classList.contains('active')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});



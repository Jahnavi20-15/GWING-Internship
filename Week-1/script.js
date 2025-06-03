const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Toggle icon
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

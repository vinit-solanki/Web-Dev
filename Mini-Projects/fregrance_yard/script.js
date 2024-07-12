// script.js
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');

  menuButton.addEventListener('click', function() {
      nav.classList.toggle('nav-active');
  });

  // Optional: Close the menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('nav-active');
      });
  });
});

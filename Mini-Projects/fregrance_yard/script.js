// Select elements for JavaScript manipulation
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-button');

// Function to toggle mobile menu visibility
function toggleMenu() {
  nav.classList.toggle('nav-active');
}

// Event listener for menu button click
menuButton.addEventListener('click', toggleMenu);

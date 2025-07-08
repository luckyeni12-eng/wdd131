// Hamburger menu toggle
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
  navMenu.setAttribute('aria-hidden', expanded);
  menuButton.textContent = expanded ? '☰' : '✕';
});

// Footer dynamic year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
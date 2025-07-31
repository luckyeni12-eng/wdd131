// filtered-temples.js

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil",
    location: "Dunas, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  }
];

// Helper to parse year from dedication date string (e.g., "2005, August, 7" => 2005)
function getYearFromDate(dateStr) {
  return parseInt(dateStr.split(',')[0].trim());
}

// Function to create temple card HTML elements and append to container
function displayTemples(templesToDisplay) {
  const container = document.getElementById('templesContainer');
  container.innerHTML = ''; // Clear existing cards

  templesToDisplay.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Filter functions
function filterTemples(filterType) {
  switch(filterType) {
    case 'old':
      return temples.filter(t => getYearFromDate(t.dedicated) < 1900);
    case 'new':
      return temples.filter(t => getYearFromDate(t.dedicated) > 2000);
    case 'large':
      return temples.filter(t => t.area > 90000);
    case 'small':
      return temples.filter(t => t.area < 10000);
    case 'all':
    default:
      return temples;
  }
}

// Set up navigation event listeners
function setupNavigation() {
  const navLinks = document.querySelectorAll('nav.navigation a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      link.classList.add('active');

      // Get filter type from data-filter attribute
      const filterType = link.dataset.filter || 'all';
      const filteredTemples = filterTemples(filterType);
      displayTemples(filteredTemples);
    });
  });
}

// Setup footer year and last modified date
function setupFooterDates() {
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
  lastModifiedSpan.textContent = document.lastModified;
}

// On DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setupFooterDates();
  setupNavigation();

  // Default display all temples
  displayTemples(temples);

  // Mark Home link as active initially
  const homeLink = document.querySelector('nav.navigation a[data-filter="all"]');
  if (homeLink) homeLink.classList.add('active');
});
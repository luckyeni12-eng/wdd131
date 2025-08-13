"use strict";

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836-03-27",
    area: 16000,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Kirtland_Temple%2C_Ohio_-_restored_view.JPG",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Salt_Lake_Temple_1.jpg",
  },
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California, United States",
    dedicated: "2005-04-24",
    area: 72000,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/San_Diego_California_Temple.JPG",
  },
  {
    templeName: "Monticello Utah Temple",
    location: "Monticello, Utah, United States",
    dedicated: "1998-11-20",
    area: 6800,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/MonticelloUtahTemple.jpg",
  },
  {
    templeName: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023-06-04",
    area: 30000,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Bangkok_Temple_of_the_Church_of_Jesus_Christ_of_Latter-day_Saints_2023.jpg",
  },
];

// Helper: create one temple card element
function createTempleCard(temple) {
  const card = document.createElement("article");
  card.className = "temple-card";

  // Image
  const img = document.createElement("img");
  img.className = "temple-image";
  img.src = temple.imageUrl;
  img.alt = `Image of ${temple.templeName}`;
  img.loading = "lazy";
  card.appendChild(img);

  // Info container
  const info = document.createElement("div");
  info.className = "temple-info";

  // Name
  const name = document.createElement("h2");
  name.textContent = temple.templeName;
  info.appendChild(name);

  // Location
  const location = document.createElement("p");
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  info.appendChild(location);

  // Dedicated date (format nicely)
  const date = new Date(temple.dedicated);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${date.toLocaleDateString(
    undefined,
    options
  )}`;
  info.appendChild(dedicated);

  // Area with commas and sq ft label
  const area = document.createElement("p");
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
  info.appendChild(area);

  card.appendChild(info);

  return card;
}

// Main render function
function renderTemples(filteredTemples) {
  const container = document.getElementById("temples-container");
  container.innerHTML = ""; // Clear existing

  if (filteredTemples.length === 0) {
    const noResult = document.createElement("p");
    noResult.textContent = "No temples match the selected filter.";
    noResult.style.textAlign = "center";
    container.appendChild(noResult);
    return;
  }

  filteredTemples.forEach((temple) => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Filter functions
const filters = {
  home: () => temples,
  old: () =>
    temples.filter((t) => {
      const year = new Date(t.dedicated).getFullYear();
      return year < 1900;
    }),
  new: () =>
    temples.filter((t) => {
      const year = new Date(t.dedicated).getFullYear();
      return year > 2000;
    }),
  large: () => temples.filter((t) => t.area > 90000),
  small: () => temples.filter((t) => t.area < 10000),
};

function setActiveButton(activeId) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.id === activeId ? "true" : "false");
  });
}

function onFilterClick(event) {
  const id = event.target.id;
  if (!filters[id.replace("filter-", "")]) return;

  const key = id.replace("filter-", "");
  setActiveButton(id);
  renderTemples(filters[key]());
}

// Initialize page
function init() {
  renderTemples(temples);

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => btn.addEventListener("click", onFilterClick));

  document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

  document.getElementById("last-modified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", init);
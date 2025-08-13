"use strict";

const temples = [
  // ... [All temple data as provided] ...
];

// Helper: create one temple card element
function createTempleCard(temple) {
  const card = document.createElement("article");
  card.className = "temple-card";

  const img = document.createElement("img");
  img.className = "temple-image";
  img.src = temple.imageUrl;
  img.alt = `Image of ${temple.templeName}`;
  img.loading = "lazy";
  card.appendChild(img);

  const info = document.createElement("div");
  info.className = "temple-info";

  const name = document.createElement("h3");
  name.textContent = temple.templeName;
  info.appendChild(name);

  const location = document.createElement("p");
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  info.appendChild(location);

  const date = new Date(temple.dedicated);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${date.toLocaleDateString(undefined, options)}`;
  info.appendChild(dedicated);

  const area = document.createElement("p");
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
  info.appendChild(area);

  card.appendChild(info);
  return card;
}

// Main render function
function renderTemples(filteredTemples) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

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
    temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900),
  new: () =>
    temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000),
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
  const key = id.replace("filter-", "");
  if (!filters[key]) return;

  setActiveButton(id);
  renderTemples(filters[key]());
}

// Initialize
function init() {
  renderTemples(temples);

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => btn.addEventListener("click", onFilterClick));

  document.getElementById("copyright-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", init);
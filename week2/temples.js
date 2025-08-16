document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
      menuBtn.textContent = "☰";
    } else {
      navMenu.style.display = "flex";
      menuBtn.textContent = "✖";
    }
  });
});
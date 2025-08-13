const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// When the DOM is fully loaded, populate the Product Name select element
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");

  // Use the products array to populate the select structure with options
  // Each option uses the product's id as the value and the name as the display text
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;          // value is product ID
    option.textContent = product.name;  // visible name in the dropdown
    select.appendChild(option);
  });
});
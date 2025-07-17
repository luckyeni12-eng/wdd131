function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
  // Set footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("moddate").textContent = "July 14, 2025";

  const t = 32; // in °C
  const s = 15; // in km/h
  const windChillEl = document.getElementById("windchill");

  if (t <= 10 && s > 4.8) {
    windChillEl.textContent = calculateWindChill(t, s).toFixed(1) + "°C";
  } else {
    windChillEl.textContent = "N/A";
  }
});
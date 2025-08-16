// Static weather values for Nigeria
const temperatureC = 32; // Celsius
const windSpeedKmh = 10; // Kilometers per hour

// Wind Chill Calculation (returns a string with 1 decimal place)
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

window.addEventListener("DOMContentLoaded", () => {
  const tempElem = document.getElementById("temp");
  const windSpeedElem = document.getElementById("wind-speed");
  const windChillElem = document.getElementById("wind-chill");
  const currentYearElem = document.getElementById("current-year");
  const lastModifiedElem = document.getElementById("last-modified");

  // Set static temperature and wind speed display
  tempElem.textContent = `${temperatureC}°C`;
  windSpeedElem.textContent = `${windSpeedKmh} km/h`;

  // Only calculate wind chill if conditions are met
  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    windChillElem.textContent = `${windChill}°C`;
  } else {
    windChillElem.textContent = "N/A";
  }

  // Footer content
  currentYearElem.textContent = new Date().getFullYear();
  lastModifiedElem.textContent = new Date(document.lastModified).toLocaleDateString();
});
// js/api.js - Henry Abia
const planetsData = [
  {
    "name": "Mercury", "type": "Terrestrial", "distanceFromSun": 57.9,
    "image": "https://anurella.github.io/images/planets/mercury.webp",
    "mass": 0.000174, "diameter": 4879, "period": 88, "temperature": 440, "gravity": 3.7, "moons": 0,
    "description": "The smallest planet and closest to the Sun."
  },
  {
    "name": "Venus", "type": "Terrestrial", "distanceFromSun": 108.2,
    "image": "https://anurella.github.io/images/planets/venus.webp",
    "mass": 0.00256, "diameter": 12104, "period": 225, "temperature": 737, "gravity": 8.9, "moons": 0,
    "description": "The hottest planet, covered in thick clouds."
  },
  {
    "name": "Earth", "type": "Terrestrial", "distanceFromSun": 149.6,
    "image": "https://anurella.github.io/images/planets/earth.jpg",
    "mass": 0.00315, "diameter": 12756, "period": 365, "temperature": 288, "gravity": 9.8, "moons": 1,
    "description": "The only known planet to support life."
  },
  {
    "name": "Mars", "type": "Terrestrial", "distanceFromSun": 227.9,
    "image": "https://anurella.github.io/images/planets/mars.webp",
    "mass": 0.000338, "diameter": 6792, "period": 687, "temperature": 208, "gravity": 3.7, "moons": 2,
    "description": "The Red Planet."
  },
  {
    "name": "Jupiter", "type": "Gas Giant", "distanceFromSun": 778.6,
    "image": "https://anurella.github.io/images/planets/jupiter.webp",
    "mass": 1, "diameter": 142984, "period": 4333, "temperature": 163, "gravity": 23.1, "moons": 95,
    "description": "The largest planet, known for its Great Red Spot."
  },
  {
    "name": "Saturn", "type": "Gas Giant", "distanceFromSun": 1433.5,
    "image": "https://anurella.github.io/images/planets/saturn.webp",
    "mass": 0.299, "diameter": 120536, "period": 10759, "temperature": 133, "gravity": 9, "moons": 146,
    "description": "Distinguished by its stunning ring system."
  },
  {
    "name": "Uranus", "type": "Ice Giant", "distanceFromSun": 2872.5,
    "image": "https://anurella.github.io/images/planets/uranus.webp",
    "mass": 0.0457, "diameter": 51118, "period": 30687, "temperature": 78, "gravity": 8.7, "moons": 28,
    "description": "An ice giant that rotates on its side."
  },
  {
    "name": "Neptune", "type": "Ice Giant", "distanceFromSun": 4495.1,
    "image": "https://anurella.github.io/images/planets/neptune.webp",
    "mass": 0.0539, "diameter": 49528, "period": 60190, "temperature": 73, "gravity": 11, "moons": 16,
    "description": "The windiest planet."
  },
  {
    "name": "Pluto", "type": "Dwarf Planet", "distanceFromSun": 5906.4,
    "image": "https://anurella.github.io/images/planets/pluto.webp",
    "mass": 0.0000069, "diameter": 2376, "period": 90560, "temperature": 48, "gravity": 0.7, "moons": 5,
    "description": "A dwarf planet in the Kuiper Belt."
  }
];

// THE API FUNCTIONS
function getAllPlanets() {
  return planetsData;
}

function getPlanetByName(name) {
  return planetsData.find(p => p.name.toLowerCase() === name.toLowerCase());
}



// USE YOUR IDs TO FILL THE PAGE - SAFE VERSION
const earth = getPlanetByName("Earth");

const nameEl = document.getElementById("planet-name");
const gravityEl = document.getElementById("planet-gravity");
const massEl = document.getElementById("planet-mass");
const periodEl = document.getElementById("planet-period");

if (nameEl) nameEl.textContent = earth.name;
if (gravityEl) gravityEl.textContent = earth.gravity;
if (massEl) massEl.textContent = earth.mass;
if (periodEl) periodEl.textContent = earth.period + " days";

console.log("API working - Loaded:", earth.name);
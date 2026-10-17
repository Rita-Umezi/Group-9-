(function () {
  const API_URL = "https://anurella.github.io/json/planet.json";
  let planets = [];
  let isLoading = true;
  const input = document.querySelector("#search");
  const button = document.querySelector(".search-box button");
  const card = document.querySelector(".hero-card");
  const errorCard = document.createElement("section");
  errorCard.className = "error-card";
  errorCard.hidden = true;
  errorCard.innerHTML =
    "<h2></h2>" +
    "<p></p>" +
    '<button type="button" class="retry-btn" hidden>Try again</button>';
  card.insertAdjacentElement("afterend", errorCard);
  const errorTitle = errorCard.querySelector("h2");
  const errorText = errorCard.querySelector("p");
  const retryButton = errorCard.querySelector(".retry-btn");
  function showError(title, text, canRetry) {
    errorTitle.textContent = title;
    errorText.textContent = text;
    retryButton.hidden = !canRetry;
    card.hidden = true;
    errorCard.hidden = false;
  }
  function loadPlanets() {
    isLoading = true;
    errorCard.hidden = true;
    card.hidden = false;
    card.classList.add("is-loading");
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        planets = data;
        console.log("Planets loaded:", planets.length);
      })
      .catch((error) => {
        console.error(error);
        showError(
          "Could not load planets",
          "Something went wrong while loading the planets. Check your internet connection and try again.",
          true
        );
      })
      .finally(() => {
        isLoading = false;
        card.classList.remove("is-loading");
      });
  }
  function showPlanet(planet) {
    errorCard.hidden = true;
    card.hidden = false;
    document.querySelector(".planet-info h1").textContent = planet.name;
    document.querySelector(".planet-info p:first-of-type").textContent = planet.type;
    document.querySelector(".planet-info p:last-of-type").textContent = 
planet.description;
    document.querySelector(".planet-info img").src = planet.image;
    const cells = document.querySelectorAll(".planet-stats td");
    cells[0].textContent = planet.gravity;
    cells[1].textContent = planet.mass;
    cells[2].textContent = planet.period;
  }
  function searchPlanet() {
    if (isLoading) return;
    const typed = input.value.trim().toLowerCase();
    if (typed === "") return;
    const planet = planets.find((p) => p.name.toLowerCase() === typed);
    if (planet) {
      showPlanet(planet);
    } else {
      showError(
        "No results found!",
        "We couldn't find any planet matching your search. Please double-check the name and try again.",
        false
      );
    }
  }
  retryButton.addEventListener("click", loadPlanets);
  button.addEventListener("click", searchPlanet);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchPlanet();
    }
  });
  loadPlanets();
})();
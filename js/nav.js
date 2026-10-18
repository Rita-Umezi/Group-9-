(function () {
  const input = document.querySelector("#search");
  const button = document.querySelector(".search-box button");
  const suggestions = document.querySelector("#planet-options");
  const planets = getAllPlanets();

  if (!input || !button || !Array.isArray(planets)) return;

  if (suggestions) {
    planets.forEach((planet) => {
      const option = document.createElement("option");
      option.value = planet.name;
      suggestions.appendChild(option);
    });
  }

  function searchPlanet() {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      showSearchMessage("Enter a planet name to search.", true);
      input.focus();
      return;
    }

    const exactMatch = planets.find((planet) => planet.name.toLowerCase() === query);
    const prefixMatches = planets.filter((planet) => planet.name.toLowerCase().startsWith(query));
    const partialMatches = planets.filter((planet) => planet.name.toLowerCase().includes(query));
    const matches = exactMatch ? [exactMatch] : prefixMatches.length ? prefixMatches : partialMatches;

    if (matches.length === 1) {
      input.value = matches[0].name;
      renderPlanet(matches[0]);
      showSearchMessage("");
      return;
    }

    if (matches.length > 1) {
      showSearchMessage("More than one planet matches. Type a few more letters.", true);
      return;
    }

    showSearchMessage(`No planet found for “${input.value.trim()}”. Try a planet name such as Earth or Mars.`, true);
  }

  button.addEventListener("click", searchPlanet);
  input.addEventListener("input", () => showSearchMessage(""));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") searchPlanet();
  });

  renderPlanet(getPlanetByName("Earth"));
})();

function renderPlanet(planet) {
  if (!planet) return;

  const card = document.querySelector(".hero-card");
  const image = document.querySelector(".planet-info img");
  const name = document.querySelector(".planet-info h1");
  const description = document.querySelector(".planet-info p:last-of-type");
  const type = document.querySelector(".planet-info p:first-of-type");
  const gravity = document.querySelector("#planet-gravity");
  const mass = document.querySelector("#planet-mass");
  const period = document.querySelector("#planet-period");

  if (!card || !image || !name || !type || !description || !gravity || !mass || !period) return;

  name.textContent = planet.name;
  type.textContent = planet.type;
  description.textContent = planet.description;
  image.src = planet.image;
  image.alt = `Planet ${planet.name}`;
  image.hidden = false;
  image.onerror = () => {
    image.onerror = null;
    image.hidden = true;
  };

  gravity.textContent = planet.gravity;
  mass.textContent = planet.mass;
  period.textContent = planet.period;

  const detailValues = {
    temperature: planet.temperature,
    moons: planet.moons,
    diameter: Number(planet.diameter).toLocaleString(),
    distance: planet.distanceFromSun.toLocaleString()
  };

  document.querySelectorAll(".planet-detail[data-detail]").forEach((detail) => {
    const value = detailValues[detail.dataset.detail];
    const valueElement = detail.querySelector(".planet-detail-value");
    if (valueElement && value !== undefined) valueElement.textContent = value;
  });

  card.hidden = false;
  card.classList.remove("is-loading");
}

function showSearchMessage(message, isError = false) {
  const messageElement = document.querySelector("#planet-search-message");
  if (!messageElement) return;

  messageElement.textContent = message;
  messageElement.classList.toggle("is-error", isError);
}

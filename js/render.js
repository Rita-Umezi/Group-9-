function renderPlanet(planet) {
  if (!planet) return;

  const card = document.querySelector(".hero-card");
  const image = document.querySelector(".planet-info img");
  const name = document.querySelector(".planet-info h1");
  const description = document.querySelector(".planet-info p:last-of-type");
  const type = document.querySelector(".planet-info p:first-of-type");
  const stats = document.querySelectorAll(".planet-stats td");

  if (!card || !image || !name || !type || !description || stats.length < 3) return;

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

  stats[0].textContent = `${planet.gravity} m/s²`;
  stats[1].textContent = planet.mass;
  stats[2].textContent = `${planet.period} days`;

  const detailValues = {
    temperature: `${planet.temperature} K`,
    moons: planet.moons,
    diameter: `${Number(planet.diameter).toLocaleString()} km`,
    distance: `${planet.distanceFromSun.toLocaleString()} million km`
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

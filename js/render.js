// Display the selected planet's information.
function renderPlanet(planet) {
    if (!planet) {
        showSearchMessage("Planet data not found.");
        return;
    }

    const planetImage = document.querySelector(".planet-info img");
    const planetName = document.querySelector(".planet-info h1");
    const planetParagraphs = document.querySelectorAll(".planet-info div p");

    // Update the planet image.
    if (planetImage) {
        planetImage.src = planet.image;
        planetImage.alt = `Planet ${planet.name}`;
    }

    // Update the planet name, type, and description.
    if (planetName) {
        planetName.textContent = planet.name;
    }

    if (planetParagraphs.length >= 2) {
        planetParagraphs[0].textContent = planet.type;
        planetParagraphs[1].textContent = planet.description;
    }

    // Update gravity, mass, and orbital period.
    const statCells = document.querySelectorAll(
        ".planet-stats table tr:nth-child(2) td"
    );

    if (statCells.length >= 3) {
        statCells[0].textContent = `${planet.gravity} m/s²`;
        statCells[1].textContent = planet.mass;
        statCells[2].textContent = `${planet.period} days`;
    }

    // Keep the existing images and display their information visibly.
    const detailCards = document.querySelectorAll(".planet-details > div");

    const details = [
        { label: "Temperature", value: `${planet.temperature} K` },
        { label: "Moons", value: planet.moons },
        { label: "Diameter", value: `${planet.diameter} km` },
        {
            label: "Distance from Sun",
            value: `${planet.distanceFromSun} million km`
        }
    ];

    detailCards.forEach((card, index) => {
        const detail = details[index];

        if (!detail) return;

        let label = card.querySelector(".planet-detail-label");
        let value = card.querySelector(".planet-detail-value");

        if (!label) {
            label = document.createElement("p");
            label.className = "planet-detail-label";
            card.appendChild(label);
        }

        if (!value) {
            value = document.createElement("p");
            value.className = "planet-detail-value";
            card.appendChild(value);
        }

        label.textContent = detail.label;
        value.textContent = detail.value;

        const image = card.querySelector("img");

        if (image) {
            image.alt = detail.label;
            image.title = `${detail.label}: ${detail.value}`;
        }
    });

    showSearchMessage("");
}

// Display search feedback.
function showSearchMessage(message) {
    const searchBox = document.querySelector(".search-box");

    if (!searchBox) return;

    let messageElement = document.querySelector("#planet-search-message");

    if (!messageElement) {
        messageElement = document.createElement("p");
        messageElement.id = "planet-search-message";
        messageElement.setAttribute("role", "status");
        searchBox.insertAdjacentElement("afterend", messageElement);
    }

    messageElement.textContent = message;
}

// Find a planet by name and display it.
function searchPlanet(name) {
    const planet = getPlanetByName(name.trim());

    if (!planet) {
        showSearchMessage(
            "Planet not found. Please check the name and try again."
        );
        return;
    }

    renderPlanet(planet);
}

// Connect the search box to the planet data.
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector(".search-box button");

if (searchInput && searchButton) {
    searchButton.addEventListener("click", () => {
        if (searchInput.value.trim()) {
            searchPlanet(searchInput.value);
        }
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && searchInput.value.trim()) {
            searchPlanet(searchInput.value);
        }
    });
}

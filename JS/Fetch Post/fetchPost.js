const cars = {};

const createTable = () => {
  const brand = document.createElement("th");
  brand.textContent = "Brand";

  const model = document.createElement("th");
  model.textContent = "Model";

  const tr = document.createElement("tr");
  tr.append(brand, model);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.body.append(table);
};

function addToTable(cars) {
  const tbody = document.querySelector("tbody");

  cars.forEach((car) => {
    const brand = document.createElement("td");
    brand.textContent = car.brand;

    const model = document.createElement("td");
    model.textContent = car.model;

    const tr = document.createElement("tr");
    tr.append(brand, model);
    tbody.append(tr);
  });
}

createTable();

const doFetch = async () => {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me");
    if (response.ok) {
      const cars = await response.json();
      console.log(cars);
      addToTable(cars);
    }
  } catch (error) {
    console.error(error);
  }
};

doFetch();

const addCarToTable = async () => {
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const brandInput = document.getElementById("brand").value;
    const modelInput = document.getElementById("model").value;
  });

  const response = await fetch("https://olive-bead-glazer.glitch.me", {
    method: "POST",
    body: JSON.stringify({
      brand: `${brandInput}`,
      model: `${modelInput}`,
    })
      .then((response) => response.json())
      .then((cars) => {
        console.log("Success:", cars);
      })
      .catch((error) => {
        console.error("Error:", error);
      }),
  });
};

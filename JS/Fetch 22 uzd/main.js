const createTable = () => {
  const newTable = document.createElement("table");
  const tableHeaderForID = document.createElement("th");
  const tableHeaderForImage = document.createElement("th");
  const tableHeaderForFirstName = document.createElement("th");
  const tableHeaderForLastName = document.createElement("th");
  const tableHeaderForCity = document.createElement("th");
  const tableHeaderForFavColor = document.createElement("th");
  const tableRow = document.createElement("tr");

  tableHeaderForID.textContent = "ID";
  tableHeaderForImage.textContent = "Image";
  tableHeaderForFirstName.textContent = "First Name";
  tableHeaderForLastName.textContent = "Last Name";
  tableHeaderForCity.textContent = "City";
  tableHeaderForFavColor.textContent = "Favorite color";

  document.body.append(newTable);
  newTable.append(tableRow);
  tableRow.append(
    tableHeaderForID,
    tableHeaderForImage,
    tableHeaderForFirstName,
    tableHeaderForLastName,
    tableHeaderForCity,
    tableHeaderForFavColor
  );
};

const renderTable = (robots) => {
  const mainTable = document.querySelector("table");
  const tableBody = document.createElement("tbody");

  robots.forEach((element) => {
    const tableRow = document.createElement("tr");
    const id = document.createElement("td");

    id.textContent = element.id;

    mainTable.append(tableBody);
    tableBody.append(tableRow);
    tableRow.append(id);
  });
};

createTable();

const getRobots = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    const robots = await response.json();
    await renderTable(robots);
  } catch (error) {
    console.error(error);
  }
};

await getRobots();

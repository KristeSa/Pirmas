//Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).

const users = {};

const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "isVipCheckbox");
  document.body.append(checkbox);
};

const checkboxLabel = document.createElement("label");
checkboxLabel.setAttribute("for", "isVipCheckbox");
checkboxLabel.textContent = "VIP";
document.body.append(checkboxLabel);

const createSearchForm = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "search");
  input.setAttribute("id", "search");
  document.body.append(input);

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.setAttribute("type", "button");
  searchButton.setAttribute("id", "button");
  document.body.append(searchButton);

  const form = document.createElement("form");
  form.append(input, searchButton);
  document.body.append(form);
};

const createTable = () => {
  const id = document.createElement("th");
  id.innerText = "ID";

  const image = document.createElement("th");
  image.innerText = "Picture";

  const firstName = document.createElement("th");
  firstName.innerText = "First Name";

  const lastName = document.createElement("th");
  lastName.innerText = "Last Name";

  const city = document.createElement("th");
  city.innerText = "City";

  const favColor = document.createElement("th");
  favColor.innerText = "Favourite colour";

  const tr = document.createElement("tr");
  tr.append(id, image, firstName, lastName, city, favColor);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.body.append(table);
};

function addToTable(users) {
  const tbody = document.querySelector("tbody");

  users.forEach((user) => {
    const id = document.createElement("td");
    id.textContent = user.id;

    const img = document.createElement("img");
    img.src = user.image;
    img.setAttribute("alt", "UserPicture");
    const image = document.createElement("td");
    image.append(img);

    const firstName = document.createElement("td");
    firstName.textContent = user.name.split(" ")[0];

    const lastName = document.createElement("td");
    lastName.textContent = user.name.split(" ")[1];

    const city = document.createElement("td");
    city.textContent = user.city;

    const favColor = document.createElement("td");
    favColor.textContent = user.fav_color;

    const tr = document.createElement("tr");
    tr.append(id, image, firstName, lastName, city, favColor);
    tbody.append(tr);
  });
}

createCheckbox();
createSearchForm();
createTable();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchString = document.getElementById("search").value.toLowerCase();
  addToTable(
    users.filter((user) => user.name.toLowerCase().includes(searchString))
  );
});

document.getElementById("isVipCheckbox").addEventListener("change", (event) => {
  addToTable(event.target.checked ? users.filter((user) => user.vip) : users);
});

const doFetch = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      const users = await response.json();
      console.log(users);
      addToTable(users);
    }
  } catch (error) {
    console.error(error);
  }
};

doFetch();

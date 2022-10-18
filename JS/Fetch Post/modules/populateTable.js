import { getToDos } from "./getToDos.js";

const tableElement = document.querySelector("table#toDo");

const addRow = (newItem) => {
  const title = document.createElement("td");
  const completed = document.createElement("td");
  const rowElement = document.createElement("tr");
  const completedCheckbox = document.createElement("input");

  title.textContent = newItem.title;
  completedCheckbox.type = "checkbox";
  completedCheckbox.checked = newItem.completed;

  completed.appendChild(completedCheckbox);
  rowElement.append(title, completed);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  const toDos = await getToDos();

  toDos.forEach((toDoItem) => addRow(toDoItem));
};

export { populateTable };

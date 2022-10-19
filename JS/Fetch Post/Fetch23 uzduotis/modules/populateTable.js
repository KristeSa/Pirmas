import { getToDos } from "./getToDos.js";

const tableElement = document.querySelector("table#toDo");

const addRow = (toDo) => {
  const { title, completed } = toDo; // ts pats kas title=todo.title

  const toDoTitleElement = document.createElement("td");
  const toDoCompletedElement = document.createElement("td");
  const rowElement = document.createElement("tr");
  const isCompletedCheckbox = document.createElement("input");

  toDoTitleElement.textContent = toDo.title;
  isCompletedCheckbox.type = "checkbox";
  isCompletedCheckbox.checked = newItem.completed;

  completed.appendChild(isCompletedCheckbox);
  rowElement.append(toDoTitleElement, toDoCompletedElement);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  const toDoListElement = document.querySelector("#toDo>tbody");

  const toDos = await getToDos();
  toDos.forEach((toDoItem) => addRow(toDoItem, toDoListElement));
};

export { populateTable };

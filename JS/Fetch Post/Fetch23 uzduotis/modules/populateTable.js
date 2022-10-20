import { getToDos } from "./getToDos.js";

const tableBody = document.querySelector("table#toDo");

const addRow = (toDo) => {
  const { title, completed } = toDo; // ts pats kas title=todo.title

  const toDoTitleElement = document.createElement("td");
  const toDoCompletedElement = document.createElement("td");
  const rowElement = document.createElement("tr");
  const isCompletedCheckbox = document.createElement("input");

  toDoTitleElement.textContent = title;
  isCompletedCheckbox.type = "checkbox";
  isCompletedCheckbox.checked = completed;

  toDoCompletedElement.append(isCompletedCheckbox);
  rowElement.append(toDoTitleElement, toDoCompletedElement);
  tableBody.append(rowElement);
};

export const populateTable = async () => {
  const toDos = await getToDos();

  toDos.forEach((toDoItem) => addRow(toDoItem));
};

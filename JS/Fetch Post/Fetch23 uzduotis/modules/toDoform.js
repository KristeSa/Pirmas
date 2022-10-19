const createTodoForm = document.querySelector("form#toDoform");

const showAddStatus = (isSuccessfullyAdded) => {
  if (isSuccessfullyAdded) {
    const successfulTextParagraph = document.createElement("p");
    successfulText.textContent = "Congratulations";

    createTodoForm.prepend(successfulTextParagraph);

    return;
  }

  alert("could not add todo");
  throw Error("could not add todo");
};

createTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoTitle = document.querySelector("#title").value.trim();
  const todoCompleted = document.querySelector("#completed").checked;

  const newTodo = {
    title: todoTitle,
    completed: todoCompleted,
  };
});

showAddStatus();

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

export const ToDoForm = () => {
  const [toDo, setToDo] = useState("");
  const [savedToDos, setSavedToDos] = useState<string[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setToDo(event.target.value);
  };

  // const handleDelete: React.ChangeEventHandler<JSX.Element> = (event) => {
  //   setToDo(event.currentTarget);
  // };

  const deleteToDo = setToDo.filter((toDo: any) => toDo.id !== id);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedToDos((prevSavedToDos) => [...prevSavedToDos, toDo]);

    setToDo("");
  };

  return (
    <>
      <h1> You have {savedToDos.length} ToDos</h1>

      {savedToDos.map((curToDo, i) => {
        return (
          <p className="toDo" key={i}>
            {curToDo}
            <span>
              {" "}
              <button
                className="icon"
                id="toDo"
                onClick={() => {
                  deleteToDo;
                }}
              >
                <FontAwesomeIcon icon={faXmarkCircle} />
              </button>
            </span>
          </p>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input value={toDo} onChange={handleChange} placeholder="Enter item" />
        <button>Submit</button>
      </form>
    </>
  );
};

import axios from "axios";
import { useState } from "react";

export const AddMed = ({ fetchMeds }: any) => {
  const [newMed, setNewMed] = useState({
    name: null,
    description: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewMed({
      ...newMed,
      [prop]: event.target.value,
    });
  };

  const handleMedSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/meds/", {
        name: newMed.name,
        description: newMed.description,
      })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleMedSubmit}>
      <div className="card">
        <input
          value={newMed.name ?? ""}
          onChange={(event) => handleInputChange(event, "name")}
          placeholder="Name"
        />

        <input
          value={newMed.description ?? ""}
          onChange={(event) => handleInputChange(event, "description")}
          placeholder="Description"
        />

        <button className="orange-button">Add medication</button>
      </div>
    </form>
  );
};

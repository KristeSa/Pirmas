import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddMed = () => {
  const [newMed, setNewMed] = useState({
    name: null,
    description: null,
  });

  const navigate = useNavigate();

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
    navigate(`/meds`);

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
      <div className="form-card">
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

        <button
          className="orange-button"
          onClick={() => window.location.replace("/meds")}
        >
          ADD MEDICATION
        </button>
      </div>
    </form>
  );
};

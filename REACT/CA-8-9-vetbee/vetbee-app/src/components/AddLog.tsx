import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddLog = () => {
  const [newLog, setNewLog] = useState({
    pet_id: null,
    description: null,
    status: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewLog({
      ...newLog,
      [prop]: event.target.value,
    });
  };

  const handleLogSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigate(`/pets`);

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/logs/", {
        pet_id: newLog.pet_id,
        description: newLog.description,
        status: newLog.status,
      })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleLogSubmit}>
      <div className="form-card">
        <input
          value={newLog.pet_id ?? ""}
          onChange={(event) => handleInputChange(event, "pet_id")}
          placeholder="Pet Id"
          type="number"
        />

        <input
          value={newLog.description ?? ""}
          onChange={(event) => handleInputChange(event, "description")}
          placeholder="Description"
        />

        <input
          value={newLog.status ?? ""}
          onChange={(event) => handleInputChange(event, "status")}
          placeholder="Status"
        />

        <button className="orange-button">Add log</button>
      </div>
    </form>
  );
};

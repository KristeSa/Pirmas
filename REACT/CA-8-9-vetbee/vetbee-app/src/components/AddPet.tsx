import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddPet = () => {
  const [newPet, setNewPet] = useState({
    name: null,
    dob: null,
    client_email: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPet({
      ...newPet,
      [prop]: event.target.value,
    });
  };

  const handlePetSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigate(`/pets`);

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/pets/", {
        name: newPet.name,
        dob: newPet.dob,
        client_email: newPet.client_email,
      })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handlePetSubmit}>
      <div className="form-card">
        <input
          value={newPet.name ?? ""}
          onChange={(event) => handleInputChange(event, "name")}
          placeholder="Name"
        />

        <input
          value={newPet.dob ?? ""}
          onChange={(event) => handleInputChange(event, "dob")}
          placeholder="Date of birth"
        />

        <input
          value={newPet.client_email ?? ""}
          onChange={(event) => handleInputChange(event, "client_email")}
          placeholder="Client email"
          type="email"
        />

        <button className="orange-button">Add pet</button>
      </div>
    </form>
  );
};

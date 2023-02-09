import axios from "axios";
import { useState } from "react";

export const AddPrescription = () => {
  const [newPrescription, setNewPrescription] = useState({
    medication_id: null,
    pet_id: null,
    comment: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewPrescription({
      ...newPrescription,
      [prop]: event.target.value,
    });
  };

  const handlePrescriptionSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/", {
        medication_id: newPrescription.medication_id,
        pet_id: newPrescription.pet_id,
        comment: newPrescription.comment,
      })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handlePrescriptionSubmit}>
      <div className="card">
        <input
          value={newPrescription.medication_id ?? ""}
          onChange={(event) => handleInputChange(event, "medication_id")}
          placeholder="Medication Id"
          type="number"
        />

        <input
          value={newPrescription.pet_id ?? ""}
          onChange={(event) => handleInputChange(event, "pet_id")}
          placeholder="Pet Id"
          type="number"
        />

        <input
          value={newPrescription.comment ?? ""}
          onChange={(event) => handleInputChange(event, "comment")}
          placeholder="Comment"
        />

        <button className="orange-button">Add prescription</button>
      </div>
    </form>
  );
};

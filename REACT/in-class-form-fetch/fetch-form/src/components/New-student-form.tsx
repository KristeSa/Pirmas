import { useState } from "react";
import axios from "axios";

export const NewStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<null | number>(null);
  const [newStudent, setNewStudent] = useState([]);

  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001/create-student", {
        firstName,
        lastName,
        age,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleStudentSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input
        value={age ?? ""}
        onChange={(e) => setAge(+e.target.value)}
        type="number"
      />
      <button>ADD</button>
    </form>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";

export const Meds = () => {
  const [meds, setMeds] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeds = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/meds")
      .then((response) => setMeds(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchMeds();
  }, []);

  return (
    <>
      <h1>Medications</h1>
      <button
        className="orange-button"
        onClick={(event) => (window.location.href = "/add-med")}
      >
        Add Medication
      </button>
      {isLoading ? (
        <p>Loading meds</p>
      ) : (
        <div className="container">
          {meds.map((med: any) => (
            <div className="med-card" key={med.id}>
              <h3>{med.name}</h3>
              <p>Description: {med.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";

export const Meds = () => {
  const [meds, setMeds] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeds = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/meds")
      .then((response) =>
        setMeds(response.data.filter((med: any) => med.name && med.description))
      )
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
      <div className="top-menu">
        <h1>Medications</h1>
        <button
          className="top-orange-button"
          onClick={() => (window.location.href = "/add-med")}
        >
          Add Medication
        </button>
      </div>
      {isLoading ? (
        <p>Loading meds</p>
      ) : (
        <div className="container">
          {meds.map((med: any) => (
            <div className="card" key={med.id}>
              <h3>{med.name}</h3>
              <p>Description: {med.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

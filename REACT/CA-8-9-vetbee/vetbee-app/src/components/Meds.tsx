import axios from "axios";
import { useEffect, useState } from "react";
import { NewMedication } from "./NewMedication";

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
      <div className="add-new">
        <NewMedication />
      </div>
    </>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchPrescriptions = () => {
    axios
      .get(
        `https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/${id}`
      )
      .then((response) => setPrescriptions(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchPrescriptions();
  }, [id]);

  return (
    <>
      <h1>Prescriptions</h1>
      <button
        className="top-orange-button"
        onClick={() => (window.location.href = "/add-prescription")}
      >
        ADD PRESCRIPTION
      </button>
      {isLoading ? (
        <p>Loading prescriptions</p>
      ) : (
        <div className="container">
          {prescriptions.map((prescription: any) => (
            <div className="card" key={prescription.id}>
              <p>{prescription.medication_id}</p>
              <p>{prescription.pet_id}</p>
              <p>{prescription.comment}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

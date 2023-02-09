import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PetLog = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [showLog, toggleShowlog] = useState(true);
  const [showPrescription, toggleShowPrescription] = useState(true);
  const { id } = useParams();

  const fetchLogById = () => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchLogById();
  }, [id]);

  const fetchPrescriptionsById = () => {
    axios
      .get(
        `https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/${id}`
      )
      .then((response) => setPrescriptions(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPrescriptionsById();
  }, [id]);

  return (
    <>
      <div className="button-container">
        <button
          className="top-orange-button"
          onClick={() => (window.location.href = "/add-prescription")}
        >
          ADD PRESCRIPTION
        </button>
        <button
          className="top-white-button"
          onClick={() => (window.location.href = "/add-log")}
        >
          ADD LOG
        </button>
      </div>
      <div>
        <h1>{logs[0]?.name} Health records</h1>
        <div className="top-button-container">
          <p>Display:</p>
          <button
            className="top-orange-button"
            onClick={() => toggleShowlog(!showLog)}
          >
            LOGS {showLog ? "show" : "hide"}
          </button>
          <button
            className="top-orange-button"
            onClick={() => toggleShowPrescription(!showPrescription)}
          >
            PRESCRIPTIONS {showPrescription ? "show" : "hide"}
          </button>
        </div>
        {showLog && (
          <div className="container">
            {logs.map((log, i) => (
              <div className="card" key={i}>
                <h3>{log.status}</h3>
                <p>Description: {log.description}</p>
              </div>
            ))}
          </div>
        )}

        {showPrescription && (
          <div className="container">
            {prescriptions.map((prescription, i) => (
              <div className="card" key={i}>
                <h3>{prescription.medication_id}</h3>
                <h3>{prescription.pet_id}</h3>
                <p>Comment: {prescription.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

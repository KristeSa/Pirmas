import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PetLog = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  axios
    .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
    .then((response) => setLogs(response.data))
    .catch((error) => console.error(error));

  useEffect(() => {}, [id]);

  const handleLogButton = (id: number) => {
    navigate(`/logs/${id}`);
  };

  const handlePrescriptionButton = (id: number) => {
    navigate(`/prescriptions/${id}`);
  };

  return (
    <>
      <div className="button-container">
        <button
          className="top-orange-button"
          onClick={(event) => (window.location.href = "/add-prescription")}
        >
          ADD PRESCRIPTION
        </button>
        <button
          className="top-white-button"
          onClick={(event) => (window.location.href = "/add-log")}
        >
          ADD LOG
        </button>
      </div>
      <div>
        <p>Display:</p>{" "}
        <button className="top-orange-button" onClick={() => handleLogButton}>
          LOGS
        </button>
        <button
          className="top-orange-button"
          onClick={() => handlePrescriptionButton}
        >
          PRESCRIPTIONS
        </button>
      </div>
      <div className="container">
        {logs.map((log: any) => (
          <div className="log-card" key={log.id}>
            <h1>{logs[0].name} Health records</h1>
            <div className="container">
              <h3>{log.status}</h3>
              <p>Description: {log.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

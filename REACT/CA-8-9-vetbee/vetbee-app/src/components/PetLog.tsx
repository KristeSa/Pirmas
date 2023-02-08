import axios from "axios";
import { useState } from "react";

export const PetLog = () => {
  const [logs, setLogs] = useState<any[]>([]);

  const viewPetLog = (id: any) => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((response) => setLogs(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {logs.map((log: any) => (
        <div className="log-card" key={log.id}>
          <h1>{log.pets.name} Health records</h1>
          <div className="container">
            <h3>{log.status}</h3>
            <p>Description: {log.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

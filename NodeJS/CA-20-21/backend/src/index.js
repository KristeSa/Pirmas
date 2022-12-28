require("./config");

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
const PORT = +process.env.serverPort || 5070;

const pets = require("./routes/v1/pets");
const meds = require("./routes/v1/medications");
const logs = require("./routes/v1/logs");
const prescriptions = require("./routes/v1/prescriptions");

app.use(express.json());
app.use(cors());

app.get("/pets", pets.getPets);

app.post("/pet", pets.postPet);

app.delete("pets/:id", pets.deletePet);

app.get("/meds", meds.getMeds);

app.post("/med", meds.postMeds);

app.get("/logs", logs.getLogs);

app.post("/log", logs.postLog);

app.get("/prescriptions", prescriptions.getPrescriptions);

app.post("/prescription", prescriptions.postPrescription);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

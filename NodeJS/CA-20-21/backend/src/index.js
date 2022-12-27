require("./config");

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();

const pets = require("./routes/v1/pets");

app.use(express.json());
app.use(cors());

app.use("/v1/pets/", pets);
app.use("/v1/meds/", medications);
app.use("/v1/logs/", logs);
app.use("/v1/prescriptions/", prescriptions);

const PORT = +process.env.serverPort || 5070;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

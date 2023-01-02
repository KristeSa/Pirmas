require("./config");

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = +process.env.serverPort || 5070;

const pets = require("./routes/v1/pets");
const meds = require("./routes/v1/medications");
const logs = require("./routes/v1/logs");
const prescriptions = require("./routes/v1/prescriptions");

app.use(express.json());
app.use(cors());

console.log(pets);

app.use("/v1/pets", pets);

app.use("/v1/meds", meds);

app.use("/v1/logs", logs);

app.use("/prescriptions", prescriptions);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

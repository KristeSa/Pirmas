const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = +process.env.PORT || 5010;

const app = express();

app.use(express.json());
app.use(cors());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars/:brand", (req, res) => {
  res.send(cars[req.params.brand]);
});

app.listen(PORT);

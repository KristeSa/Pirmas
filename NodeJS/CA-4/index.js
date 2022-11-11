const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5010;

app.use(express.json());
app.use(cors());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars/:brand", (req, res) => {
  const { brand } = req.params;
  console.log(brand);
  //const carsArray = cars.brand;

  res.send(brand);
});

app.listen(PORT);

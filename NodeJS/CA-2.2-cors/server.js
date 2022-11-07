const express = require("express");
const PORT = 5000;

const app = express();

app.use(cors());

const cars = ["BMW", "VW", "Porsche"];

app.get("/", (req, res) => {
  res.send({ cars });
});

app.listen(5000, () => console.log("server is listening on PORT 5000"));

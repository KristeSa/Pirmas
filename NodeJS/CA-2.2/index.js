const express = require("express");
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(8080, () => console.log("Server is running on port 8080"));

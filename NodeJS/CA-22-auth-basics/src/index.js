const express = require("express");
const cors = require("cors");

const { PORT } = require("./config");

const auth = require("./routes/v1/auth");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1/auth/", auth);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

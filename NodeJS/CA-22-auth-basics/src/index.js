import express from "express";
import cors from "cors";
import { port } from "./config.js";

import auth from "./routes/v1/auth.js";
import content from "./routes/v1/content.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1/auth/", auth);
app.use("/v1/content/", content);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

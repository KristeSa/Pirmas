import express from "express";
import cors from "cors";
import { port } from "./config.js";
import { loggedUserContent } from "./routes/v1/content.js";
import auth from "./routes/v1/auth.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/v1/auth/", auth);
app.use("/v1/content/", loggedUserContent);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

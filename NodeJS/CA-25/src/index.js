import express from "express";
import cors from "cors";
import { port } from "./config.js";
import auth from "./routes/v1/auth.js";
import { countUsers } from "./routes/v1/count.js";
import {
  getTutorialsByUserId,
  getAllTutorials,
  postTutorial,
} from "./routes/v1/tutorials.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/v1/auth/", auth);
app.use("/v1/users", countUsers);
app.use("/v1/user-tutorials/:id", getTutorialsByUserId);
app.use("/v1/tutorials", getAllTutorials);
app.use("/v1/tutorial", postTutorial);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

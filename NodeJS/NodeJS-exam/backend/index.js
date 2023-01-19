import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { userRouter } from "./src/routes/auth.js";
import { groupsRouter } from "./src/routes/groups.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth/", userRouter);
app.use("/groups", groupsRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

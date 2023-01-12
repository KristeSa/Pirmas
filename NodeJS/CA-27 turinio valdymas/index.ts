import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import { getNames } from "./names";


const app = express();
const PORT = 5005;

app.use(cors(), express.json());

app.get("/names", getNames)

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
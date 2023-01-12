import dotenv from "dotenv"
dotenv.config()

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { getHome } from "./src/modules/getHome";
import { signIn } from "./src/modules/signIn";
import { isLoggedIn } from "./src/modules/utils/isLoggedIn";

const app = express();
const PORT = 5001;

app.use(cors(), express.json(), cookieParser());

app.get("/user-settings", isLoggedIn, getHome)
app.post("/sign-in", signIn);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
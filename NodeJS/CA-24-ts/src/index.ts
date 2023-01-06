import { config } from "dotenv";
config();

import cookieParser from "cookie-parser";
import express from "express";
import auth from "./route/v1/auth";



const PORT = +process.env.PORT || 5100;
const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/v1/auth/", auth);

//app.post("/", )
//app.use("/v1/content/", content);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
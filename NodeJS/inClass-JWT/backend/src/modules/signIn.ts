import dotenv from "dotenv"
dotenv.config()

import jwt from "jsonwebtoken";
import { TUserPayload } from "./getHome";

const jwtSecret = "slaptazodis"

export const signIn = (req, res) => {
  const { userName, password } = req.body;

  const expiresIn = 60;
  const issuedAt = new Date().getTime();

  const userPayload: TUserPayload = { userName, issuedAt };

  const users = {
    Jonas: "kaledos",
    Andrius: "velykos",
  };

  if (typeof userName !== "string" || typeof password !== "string") {
    return res.status(400).send({ error: "Data is incorrect" });
  }

  if (!userName || !password) {
    return res
      .status(400)
      .send({ error: "Please provide userName and password" });
  }

  if (password !== users[userName]) {
    return res.status(400).send({ error: "Incorrect login data" });
  }

  const token = jwt.sign(userPayload, jwtSecret, {
    algorithm: "HS256",
    expiresIn,
  }); 

  res.send({"accessToken": token, "issuedAt": issuedAt}).end();
};

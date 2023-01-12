import dotenv from "dotenv"
dotenv.config()

import jwt from "jsonwebtoken";

export type TUserPayload = { userName: string; issuedAt: number };

const jwtSecret = "slaptazodis"

export const getHome = (req, res) => {
  
  try {
    const payload: TUserPayload = jwt.verify(req.headers.authorization.split(" ")[1], jwtSecret);

    res.send(`Welcome ${payload.userName}`).end();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }
    return res.status(400).end();
  }
};
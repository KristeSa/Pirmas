import { jwtSecret } from "./config.js";

import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, jwtSecret);
    console.log(user);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ err: "Invalid Token" });
  }
};

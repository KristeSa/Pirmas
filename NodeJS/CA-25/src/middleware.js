import jwt from "jsonwebtoken";
import { jwtSecret } from "./config.js";

export const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, jwtSecret);
    req.userId = decodedToken.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ err: "Invalid Token" });
  }
};

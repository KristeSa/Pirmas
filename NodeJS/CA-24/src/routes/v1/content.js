import express from "express";
import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import { jwtSecret, MSQL_CONFIG } from "../../config.js";

const router = express.Router();

export const loggedUserContent = async (req, res) => {
  const query = "SELECT * FROM articles";
  let token = req.headers.authorization;
  const TOKEN_START = "Bearer ";

  if (!token?.startsWith(TOKEN_START)) {
    return res
      .status(403)
      .send({ error: "Tokens is not a valid Bearer token" })
      .end();
  }

  token = token.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, jwtSecret);
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.send(result).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error(error);
  }
};

export default router;

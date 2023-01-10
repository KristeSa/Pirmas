import express from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG, jwtSecret } from "../../config.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const TOKEN_START = "Bearer ";

export const getTutorialsByUserId = async (req, res) => {
  const id = +mysql.escape(req.params.id.trim()).replaceAll("'", "");
  const query = `SELECT user_id, title, content FROM tutorials INNER JOIN users ON users.id = tutorials.user_id WHERE users.id=${id}`;
  let token = req.headers.authorization;

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

export const getAllTutorials = async (req, res) => {
  const queryNotPrivate = `SELECT * FROM tutorials WHERE private=0`;
  const queryAll = `SELECT * FROM tutorials`;

  let token = req.headers.authorization;

  if (!token) {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const result = (await con.execute(queryNotPrivate))[0];
    await con.end();
    return res
      .status(201)
      .send({ msg: "Log in to see full content", result })
      .end();
  }

  token = token.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, jwtSecret);
    const con = await mysql.createConnection(MSQL_CONFIG);
    const result = (await con.execute(queryAll))[0];
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

export const postTutorial = async (req, res) => {
  const { title, content, isPrivate } = req.body;
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .send({ error: "Please log in to post tutorial" })
      .end();
  }

  token = token.replace("Bearer ", "");

  const payload = jwt.verify(token, jwtSecret);
  const query = `INSERT INTO tutorials (user_id, title, content, isPrivate) VALUES ('${payload.id}', '${title}', '${content}', '${isPrivate}')`;
  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send({ msg: "Tutorial successfully added", result }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error(error);
  }
};

export default router;

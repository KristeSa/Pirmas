import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import {TUserPayload} from "./getHome"

dotenv.config()

const jwtSecret = process.env.jwtSecret

export const signIn = (req, res) =>{
    const {userName, password} = req.body

    const expiresIn = 60
    const issuedAt = new Date().getTime()

    const userPayload: TUserPayload = {userName, issuedAt}

    const users = {
        Jonas: "kaledos",
        Andrius: "velykos",
    }
console.log(userName, password)
    if (typeof userName !== "string" || typeof password !== "string") {
        return res.status(400).send({error: "Data is incorrect"})
    }

    if (password !== users[userName]) {
        return res.status(400).send({error: "Incorrect login data"})
    }

    const token = jwt.sign(userPayload, jwtSecret, {
        algorithm: "HS256",
        expiresIn, //expires in turetu buti env file
    })

    res.cookie("token", token, {maxAge: expiresIn * 1_000})

    res.send("Signed in successfully")
}
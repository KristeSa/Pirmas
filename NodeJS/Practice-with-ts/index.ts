import { config } from "dotenv"
config();

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express from "express"
import {getHome} from "./getHome"
import {signIn} from "./signIn"

const app = express()

const PORT = 5003

app.use(bodyParser.json())
app.use(cookieParser())

app.get("/home", getHome)
app.post("/sign-in", signIn)

app.listen(PORT, ()=> console.log(`Server is listening on ${PORT}`))
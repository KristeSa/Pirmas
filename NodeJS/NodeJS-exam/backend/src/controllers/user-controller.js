// import { Router } from "express";
// import { createUser, getUsers } from "../services/user-services.js";

// export const userRouter = Router();

// userRouter.get("/", (_, res) => {
//   const users = getUsers();

//   res.send({ users }).end();
// });

// userRouter.post("/register", (req, res) => {
//   const { email, password } = req.body;
//   const firstName = mysql.escape(req.body.full_name.split(" ")[0].trim());
//   const lastName = mysql.escape(req.body.full_name.split(" ")[1].trim());
//   const full_name = `${firstName} ${lastName}`;

//   const { user, error } = createUser({
//     full_name,
//     email,
//     password,
//   });

//   if (!user || error) {
//     return res.status(400).send({ error: error.message }).end();
//   }

//   res.send({ msg: `User ${full_name} was created` }).end();
// });

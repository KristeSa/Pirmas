// import Joi from "joi";

// const userSchema = Joi.object({
//   firstName: Joi.string().trim().required(),
//   lastname: Joi.string().trim().required(),
//   email: Joi.string().email().trim().lowercase().required(),
//   password: Joi.string().required(),
// });

// export class User {
//   id;
//   firstName;
//   lastname;
//   email;
//   password;

//   constructor({ id, full_name, email, password }) {
//     const newUserData = {
//       id,
//       firstName,
//       lastname,
//       email,
//       password,
//     };

//     const validationResult = userSchema.validate(newUserData);

//     if (validationResult.error) {
//       throw Error(validationResult.error);
//     }

//     this.id = id;
//     this.firstName = firstName;
//     this.lastname = lastname;
//     this.email = email;
//     this.password = password;
//   }
// }

// // generateToken function implementation
// const jwt = require('jsonwebtoken');

// // const generateToken = (payload) => {
// //   const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
// //   return token;
// // }
// const generateToken = (payload) => {
//     const tokenPayload = typeof payload === 'object' && !Array.isArray(payload)
//       ? payload // If payload is already an object, use it as-is
//       : { data: payload }; // Otherwise, wrap payload in a new object
  
//     const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY);
//     return token;
//   }
  


// // hashPassword and comparePassword function implementations
// const crypto = require("crypto");

// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   const hashedPassword =  password;//await crypto.hash(password, saltRounds);
//   return hashedPassword;
// }

// const comparePassword = async (password, hashedPassword) => {
//   //const match = await crypto.compare(password, hashedPassword);
//   var match = false;
//   if(password === hashedPassword)
//         { match = true;}
//   return match;
// }

// module.exports = { hashPassword, comparePassword, generateToken };

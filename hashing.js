// import bcrypt from "bcrypt";
// let password = "shresthaDada@2005";
// let hashedPassword = await bcrypt.hash(password, 10);
// console.log(hashedPassword);

//10 = it generates 10 hased codes, compared between them and provide us by choosing from it

//compare hashcode, compare always gives a boolean value.

// let loginPassword = "shresthaDada@2005";
// let isValidPassword = await bcrypt.compare(loginPassword, hashedPassword);
// console.log(isValidPassword);

//nodemailer

import bcrypt from "bcrypt";
let signupPass = "lala";
let hashedPassword = await bcrypt.hash(signupPass, 10);
console.log(hashedPassword);

let signinPass = "lala";
let isCommonPass = await bcrypt.compare(signinPass, hashedPassword);
console.log(isCommonPass);

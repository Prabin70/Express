//json web token

// there is only one secretkey in whole fullstack application....

import jwt from "jsonwebtoken";
let infoObj = {
  id: 1234,
};
let secretKey = "newtonInstitute";

let expiryInnfo = {
  expiresIn: "1d",
};

let token = jwt.sign(infoObj, secretKey, expiryInnfo);
console.log(token);

//to verify

let token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNzIyNDI3NjI4LCJleHAiOjE3MjI1MTQwMjh9.rITGrmok6QEExV439Wy_E1fLLrwXP1AfyItny51dC-k";

try {
  let infoObj = jwt.verify(token1, "newtonInstitute");
  console.log(infoObj);
} catch (error) {
  console.log("SecretKey is invalid");
}

//output => { id: 1234, iat: 1722427628, exp: 1722514028 }

//To  veify a token, a token must be made form given secretkey  and it should not be exceed expiryInfo ,

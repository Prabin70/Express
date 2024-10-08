import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";

const isAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    // console.log(token);
    //now, we need to verify the token

    let userTokenVerified = await jwt.verify(token, secretKey);
    req._id = userTokenVerified.id;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default isAuthenticated;

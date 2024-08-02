import { Webuser } from "../schema/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createWebUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashedPassword,
    };

    let result = await Webuser.create(data);

    //generate token ...
    let infoObj = {
      id: result._id,
    };

    let expiryInfo = {
      expiresIn: "1d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    //send verify message to the user in email

    await sendEmail({
      to: data.email,
      subject: "Account Registration",
      html: `<h1> Your account has been registered Successfully</h1>
      <a href="https://localhost:3000/verify-email?token=${token}">"https://localhost:3000/verify-email?token=${token}"</a>`,
    });

    res.json({
      success: true,
      message: "webUser created successfully",
      resut: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllWebUserController = async (req, res, next) => {
  try {
    let output = await Webuser.find({});
    res.json({
      success: true,
      message: "WebUser found Successfully",
      output: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

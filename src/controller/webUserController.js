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

export const verifyEmail = async (req, res, next) => {
  // try {
  //   let tokenString = req.headers.authorization;
  //   let tokenArray = tokenString.split(" ");
  //   let token = tokenArray[1];

  //   let infoObj = await jwt.verify(token, secretKey);
  //   let userId = infoObj.id;

  //   let result = await Webuser.findByIdAndUpdate(userId, {
  //     isVerifiedEmail: true,
  //   });

  //   res.status(200).json({
  //     success: true,
  //     message: "Email verified successfully",
  //     result: result,
  //   });
  // } catch (error) {
  //   res.status(400).json({
  //     success: false,
  //     message: error.message,
  //   });
  // }

  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let infoObj = await jwt.verify(token, secretKey);
    let userId = infoObj.id;

    console.log(infoObj);

    let result = await Webuser.findByIdAndUpdate(userId, {
      isVerifiedEmail: true,
    });

    res.status(200).json({
      success: true,
      message: "Account verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    // get email and pass from datdabase which we got from user
    let email = req.body.email;
    let password = req.body.password;

    let user = await Webuser.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    //if email is not verified

    if (!user.isVerifiedEmail) {
      throw new Error("Email is not verified");
    }

    //compare the pass of database and kogin passs

    let isValidPassword = await bcrypt.compare(password, user.password);
    //if passowrd is not valid
    if (!isValidPassword) {
      throw new Error("Invalid Credentials");
    }
    //token creation

    let infoObj = {
      id: user._id,
    };
    let expiryInfo = {
      expiresIn: "100d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    res.status(200).json({
      success: true,
      message: "Web user login successfully",
      data: user,
      token: token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// export const login = async (req, res, next) => {
//   try {
//     let email = req.body.email;
//     let password = req.body.password;
//     let user = await Webuser.findOne({ email: email });
//     if (!user) {
//       throw new Error("Invalid Credentials");
//     }
//     if (!user.isVerifiedEmail) {
//       throw new Error("Email is not verified");
//     }

//     let isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//       throw new Error("Invalid Credentials");
//     }

//     let infoObj = {
//       id: user._id,
//     };
//     let expiresInfo = {
//       expiresIn: "100d",
//     };

//     let token = await jwt.sign(infoObj, secretKey, expiresInfo);
//     res.status(200).json({
//       success: true,
//       message: "User login Successfully",
//       date: user,
//       token: token,
//     });
//   } catch (error) {
//     res.json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

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

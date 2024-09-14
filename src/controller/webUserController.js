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
      <a href="http://localhost:5173/verify-email?token=${token}">http://localhost:5173/verify-email?token=${token}</a>`,
    });

    res.json({
      success: true,
      message: "Verificaation mail sent",
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

    if (user.isVerifiedEmail === "false") {
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

export const myProfile = async (req, res, next) => {
  //   try {
  //     let id = req._id;
  //     let result = await Webuser.findById(id);
  //     // console.log(first);
  //     res.status(200).json({
  //       success: true,
  //       message: "myProfile read successfully",
  //       data: result,
  //     });
  //   } catch (error) {
  //     res.status(400).json({
  //       success: false,
  //       message: error.message,
  //     });
  //   }
  // };

  try {
    let id = req._id;
    let result = await Webuser.findById(id);
    res.status(200).json({
      success: true,
      message: "Account read sucessfully",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    let id = req._id; //id taken from authenticated section...
    let oldPassword = req.body.oldPassword;
    //we need to provide an old password before changing the password
    let newPassword = req.body.newPassword;
    //this is a new password
    let data = await Webuser.findById(id);
    //get the user password
    let hashedPassword = data.password;
    //taking old paswordor hashed password from database..
    let isValidPassword = await bcrypt.compare(oldPassword, hashedPassword);
    //comparing olld passwords of user stored in database and user provided password ..
    if (isValidPassword) {
      let newHashedpassword = await bcrypt.hash(newPassword, 10);
      //hashing new password ..
      let result = await Webuser.findByIdAndUpdate(
        id,
        { password: newHashedpassword },
        { new: true }
      );
      //updating password seting new password
      res.status(200).json({
        success: true,
        message: "Password updated successfully",
        result: result,
      });
      //successfully
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  //if error
};

export const forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let result = await Webuser.findOne({ email: email });

    if (result) {
      let infoObj = {
        id: result._id,
      };
      let expiresInfo = {
        expiresIn: "1d",
      };

      let token = await jwt.sign(infoObj, secretKey, expiresInfo);
      await sendEmail({
        to: email,
        subject: "Reset Password",
        html: `<h1>Please click on this link to reset the password</h1>
        <a href ="http://localhost:5173/reset-password?token=${token}">
        http://localhost:5173/reset-password?token=${token}</a>`,
      });
      res.status(200).json({
        success: true,
        message: "Password reset successfully",
        result: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    // let password = req.password
    // let id = req._id
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let result = await Webuser.findByIdAndUpdate(
      req._id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res, next) => {
  // try {
  //   let _id = req._id;
  //   let data = req.body;
  //   delete data.email;
  //   delete data.password;

  //   let result = await Webuser.findByIdAndUpdate(_id, data, { new: true });
  //   res.status(200).json({
  //     success: true,
  //     message: "Profile updated successfully",
  //     data: result,
  //   });
  // } catch (error) {
  //   res.status(400).json({
  //     success: false,
  //     message: error.message,
  //   });
  // }

  try {
    let _id = req._id;
    let data = req.body;
    delete data.email;
    delete data.password;

    let result = await Webuser.findByIdAndUpdate(_id, data, { new: true });
    res.status(200).json({
      success: true,
      message: "Account updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
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

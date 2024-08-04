import { User } from "../schema/model.js";

export const createUserController = async (req, res, next) => {
  try {
    let result = await User.create(req.body);
    res.json({
      success: true,
      message: "user create successfully.",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUserController = async (req, res, next) => {
  try {
    let output = await User.find({});
    res.json({
      success: true,
      message: "user read successfuly",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

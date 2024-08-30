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

export const readSpecificUserController = async (req, res, next) => {
  let id = req.params.id;
  let result = await User.findById(id);

  try {
    res.status(200).json({
      success: true,
      message: "Specific user read succesfullly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    let data = req.body;

    let result = await User.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User uodated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: result,
    });
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

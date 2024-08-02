import { Teacher } from "../schema/model.js";

export const createTeacherController = async (req, res, next) => {
  try {
    let output = await Teacher.create(req.body);
    res.json({
      success: true,
      message: "Teacher has found",
      data: output,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllCreateTeacherController = async (req, res, next) => {
  try {
    let result = await Teacher.find({});
    res.json({
      success: true,
      message: "Found teacher successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

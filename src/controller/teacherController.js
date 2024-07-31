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
